var CartController = {
	
    total: parseFloat('0.0'),
    
    totalWeight: parseFloat('0.0'),
    
    freight: 0,
    
    init: function () {
        CartController.getItemsIntoCart();
        CartController.showList();
        CartController.setForm();
        CartController.sendOrder();
	},	
    
    setForm: function () {
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
            alert('Hi');
            list.forEach(function(product) {
                CartController.getOrderValuesAndSave(product.id); 
            });    
		});
	},
	
	deleteProduct: function(imgDelete) {
		var 
			productName = imgDelete.dataset.productname,
			productId = imgDelete.dataset.productid;
		
		if(confirm('Are you sure to delete ' + productName + '?')) {
			ProductService.remove(productId, function(isDeleted) {
				if(isDeleted) {
					$(imgDelete).parents('dl').remove();
				}
			})
		}
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
            tdQuantity = CartController.createTD(''),
            tdValue = CartController.createTD(product.valor);

        tdValue.id = 'totalProd' + product.id;
        tdQuantity.appendChild(inputQuantity);
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
        tdTotal.innerHTML = 'R$ ' + value;
	},
	
	createAddToCart: function(product) {
		var imgAddToCart = ProductController.createImage('assets/images/addToCart.png', 'Adicionar ao Carrinho');
		
		imgAddToCart.setAttribute('data-productid', product.id);
		imgAddToCart.setAttribute('data-productname', product.produto);
		
		imgAddToCart.addEventListener('click', function() {
			ProductController.incrementItemIntoCart(this);
		});
		
		return imgAddToCart;
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
             label = document.createElement("label");;   
        
        radioButton.type = 'radio';
        radioButton.id = freight.tipo;
        radioButton.value = freight.valor;
        radioButton.name = 'freight';
        
        radioButton.addEventListener('change', function(event) {
                CartController.freight = parseFloat(event.target.value);
                CartController.calculateTotal(CartController.freight);
		});
        
        label.appendChild(radioButton);
        label.appendChild(document.createTextNode(freight.tipo +  ": R$ " + freight.valor));
        
        fieldset.appendChild(label);
	},
    
    clearRadioButton: function() {
         var fieldset =  document.getElementById('freightFields'),
             radioButtonPac = document.getElementById('PAC'),
             radioButtonSedex = document.getElementById('SEDEX');   
        
        if (radioButtonPac != null && radioButtonPac != null) {
            fieldset.removeChild(radioButtonPac);
            fieldset.removeChild(radioButtonSedex);
        }
    },
    
    calculateTotal: function(value) {
         CartController.createTotal(parseFloat(value) + CartController.total);    
    },
    
    getOrderValuesAndSave: function(productId) {
        var clientId = LoginService.getUserId(),
            quantity = document.getElementById('product' + productId).value,
            total = document.getElementById('totalProd' + productId).value,
            freight = CartController.freight;
        
            CartService.saveOrder(productId, clientId, quantity, total, freight);
    }
};

//initialization
CartController.init();
