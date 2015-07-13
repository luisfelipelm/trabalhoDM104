var CartController = {
	
    total: 0,
    
    init: function () {
        CartController.getItemsIntoCart();
        CartController.showList();
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
        var list = CartService.getList();
        list.forEach(function(product) {
            CartController.addToHTML(product);
            CartController.total += product.value;
        });
        
        CartController.crateTotal();
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
            inputQuantity = CartController.createInputText('1', 'text'),
            tdQuantity = CartController.createTD(''),
            tdValue = CartController.createTD(product.valor);

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
    
    createInputText: function(value, type) {
        var inputQuantity = document.createElement('input');
		inputQuantity.type = type;
        inputQuantity.value = value;
		return inputQuantity;
	},
    
    crateTotal: function() {
        var tdTotal = document.getElementById('total');
        tdTotal.innerHTML = CartController.total;
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
	}
};

//initialization
CartController.init();
