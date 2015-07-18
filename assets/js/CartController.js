var CartController = {
	
    total: parseFloat('0.0'),
    
    totalWeight: parseFloat('0.0'),
    
    freight: 0,
    
    init: function () {
        CartController.getItemsIntoCart();
        CartController.showList();
        CartController.setFreightForm();
        CartController.sendOrder();
	},	
    
    setFreightForm: function () {
		var form = document.getElementById('freightForm');
		form.addEventListener('submit', function(event) {
            event.preventDefault();
            CartController.calculateFreight();   
		});
	},
    
    sendOrder: function () {
        var sendButton = document.getElementById('sendOrder'),
            list = CartService.getList();

		sendButton.addEventListener('click', function(event) {
            var orderNumber = Math.floor(Math.random() * 10000) - 1000,
                clientId = LoginService.getUserId(),
                freight = CartController.freight;
            
            if (clientId === '' ||  clientId === null){
                alert('Você não está Logado. Por favor, faça login antes de enviar o pedido!');
                
            }else if (freight === '' || freight === null || freight === 0){
                alert('Calcule o frete antes de enviar o pedido!');
                
            } else {
                list = CartService.getList();
                list.forEach(function(product) {
                    CartController.getOrderValuesAndSave(product.id, orderNumber, clientId, freight); 
                });  
          
                alert('Pedido de número ' + orderNumber + ' enviado com sucesso!');
            }

		});
	},
	
	deleteProduct: function(imgDelete, productId) {
		if(confirm('Você tem certeza que o produto de código ' + productId + '?')) {
			CartService.remove(productId, function(isDeleted) {
				if(isDeleted) {
                    var total = document.getElementById('totalProd' + productId).innerHTML;
                    CartController.total = CartController.total - parseFloat(total.slice(3));
                    CartController.createTotal(parseFloat(CartController.total).toFixed(2));
					$(imgDelete).parents('tr').remove();
                    
				}
			})
		}
	},
    
    updateTotalByProduct: function(productId, value) {
		var totalProd = document.getElementById('totalProd' + productId),
            oldTotalProduct = totalProd.innerHTML.slice(3),
            quantity = document.getElementById('product' + productId).value,
            newTotalProduct = value * parseInt(quantity),
            freight = $("input[name='freightRadio']:checked").val(),
            diffTotalProduct = parseFloat(newTotalProduct) - parseFloat(oldTotalProduct),
            newTotal = CartController.total + parseFloat(diffTotalProduct);
        
        if(freight != null && freight != '' && freight != 'undefined' && freight != 'NaN'){
            newTotal = newTotal + parseFloat(freight);
        }
        
        CartController.total = parseFloat(newTotal);
        totalProd.innerHTML = 'R$ ' + parseFloat(newTotalProduct).toFixed(2);
        CartController.createTotal(parseFloat(newTotal).toFixed(2));		
	},
	
	showList: function () {
        var list = CartService.getList(),
            sum = 0.0,
            sumWeight = 0.0;
        
        list.forEach(function(product) {
            CartController.addToHTML(product);
            sum = sum + parseFloat(product.valor);
            sumWeight = sumWeight + parseFloat(product.peso);
        });
        
        CartController.total = sum;
        CartController.totalWeight = sumWeight;
        CartController.createTotal(CartController.total);
	},
	
	addToHTML: function (product) {
		var	
            tbody = document.getElementById('products'),
            tr = CartController.createTR(product);
        
		tbody.appendChild(tr);
	},
	
	createImage: function(imageLocation, textLegend) {
		var img = document.createElement('img');
		img.src = imageLocation;
        img.title = textLegend;
		return img;
	},

	
	createTR: function(product) {
		var tr = document.createElement('tr'),
            tdId = CartController.createTD(product.id),
            tdNome = CartController.createTD(product.produto),
            inputQuantity = CartController.createInputText('1', 'text', product.id),
            updateQuantityImg= CartController.createImage('../images/updateQuantity.png', 'Atualizar Valor'),
            removeItemImg = CartController.createImage('../images/removeItem.png', 'Remover Produto'),
            tdQuantity = CartController.createTD(''),
            tdValue = CartController.createTD('R$ ' + product.valor);

        tdValue.id = 'totalProd' + product.id;
        tdValue.className = 'tdProdValue';
        
        updateQuantityImg.addEventListener('click', function(event) {
            CartController.updateTotalByProduct(product.id, product.valor); 
         });  
        
         removeItemImg.addEventListener('click', function(event) {
            CartController.deleteProduct(this, product.id); 
         });  
        
        tdQuantity.appendChild(inputQuantity);
        tdQuantity.appendChild(updateQuantityImg);
        tdQuantity.appendChild(removeItemImg);
        tdQuantity.className = 'tdQuantity';
        
        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tr.appendChild(tdQuantity);
        tr.appendChild(tdValue);
        
		return tr;
	},
    
	createTD: function(value) {
		var td = document.createElement('td');
		td.innerHTML = value;
		return td;
	},
    
    createInputText: function(value, type, id) {
        var inputQuantity = document.createElement('input');
		inputQuantity.type = type;
        inputQuantity.value = value;
        inputQuantity.id = 'product' + id;

		return inputQuantity;
	},
    
    createTotal: function(value) {
        var tdTotal = document.getElementById('total');
        tdTotal.innerHTML = 'R$ ' + parseFloat(value).toFixed(2);
	},
    
    incrementItemIntoCart: function(product) {
		var
			quantityItem = document.getElementById('itemQuantity').innerHTML,
            itemsId = new Array(),
			productId = product.dataset.productid;
        
        CartService.addId(productId);
        quantityItem =  parseInt(quantityItem) + 1;
        $('#itemQuantity').text(quantityItem);
	},
    
    getItemsIntoCart: function(product) {
        var itemsQuantity = CartService.getList().length;
		document.getElementById('itemQuantity').innerHTML = parseInt(itemsQuantity);
	},
    
    calculateFreight: function(product) {
        var cep = document.getElementById('cep').value;
        CartService.getFreight(CartController.totalWeight, cep, function(freightList) {
            CartController.clearRadioButton();
            CartController.creatingRadioButton(freightList['pac']);
            CartController.creatingRadioButton(freightList['sedex']);
        });
	},
    
    creatingRadioButton: function(freight) {
         var fieldset =  document.getElementById('freightFields'),
             radioButton = document.createElement('input'),
             label = document.createElement("label");   
        
        radioButton.type = 'radio';
        radioButton.id = freight.tipo;
        radioButton.value = freight.valor;
        radioButton.name = 'freightRadio';
        
        radioButton.addEventListener('change', function(event) {
                CartController.freight = parseFloat(event.target.value);
                CartController.calculateTotal(parseFloat(CartController.freight) + CartController.total);
		});
        
        label.id = 'label' + freight.tipo;
        label.appendChild(radioButton);
        label.appendChild(document.createTextNode(freight.tipo +  ": R$ " + freight.valor));
        
        fieldset.appendChild(label);
	},
    
    clearRadioButton: function() {
         var fieldset =  document.getElementById('freightFields'),
             labelPac = document.getElementById('labelPAC'),
             labelSedex = document.getElementById('labelSEDEX');   
        
        if (labelPac != null && labelSedex != null) {
            fieldset.removeChild(labelPac);
            fieldset.removeChild(labelSedex);
        }
    },
    
    calculateTotal: function(total) {
         CartController.createTotal(total);    
    },
    
    getOrderValuesAndSave: function(productId, orderNumber, clientId, freight) {
        var quantity = document.getElementById('product' + productId).value,
            total = document.getElementById('totalProd' + productId).innerHTML.slice(3);
        
            CartService.saveOrder(productId, clientId, quantity, total, freight, orderNumber);          
    }
};

//initialization
CartController.init();
