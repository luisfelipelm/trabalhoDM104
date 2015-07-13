var ProductController = {
	
	init: function () {
		ProductController.showList();
        ProductController.initItemIntoCart();
	},
		
	addProduct: function(form) {
		var product = {
			name: form.name.value,
			email: form.email.value
		};
		ProductService.add(product, function(addedProduct){
			ProductController.addToHTML(addedProduct);	
			ProductController.clearForm();
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
        var list = ProductService.getList(function(list) {
            list.forEach(function(product) {
				ProductController.addToHTML(product);
			});
		});
    
	},
	
	addToHTML: function (product) {
		var
			productList = document.getElementById('productList'),
			dl = document.createElement('dl'),
			dt = ProductController.createDT(product),
			ddName = ProductController.createDD(product.produto, 'name');
			ddPrice = ProductController.createDD('R$ ' + product.valor, 'price');
            imgAddToCart = ProductController.createAddToCart(product),
		
        ddName.appendChild(imgAddToCart);
		
		dl.appendChild(dt);
		dl.appendChild(ddName);
		dl.appendChild(ddPrice);
		
		productList.appendChild(dl);
	},
	
	createImage: function(imageLocation, textLegend) {
		var img = document.createElement('img');
		img.src = imageLocation;
        img.title = textLegend;
		return img;
	},

	
	createDT: function(product) {
		var 
			dt = document.createElement('dt'),
			img = ProductController.createImage('assets/images/product.png', product.produto);
		
		dt.appendChild(img);
		dt.className = "photo";
		
		return dt;
	},
	
	createDD: function(value, className) {
		var dd = document.createElement('dd');
		
		dd.innerHTML = value;
		dd.className = className;
		
		return dd;
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
        
        CartService.add(productId);
        quantityItem =  parseInt(quantityItem) + 1;
        $('#itemQuantity').text(quantityItem);
        alert(CartService.getList().length);
	},
    
    initItemIntoCart: function(product) {
		document.getElementById('itemQuantity').innerHTML = '0';
	}


};

//initialization
ProductController.init();
