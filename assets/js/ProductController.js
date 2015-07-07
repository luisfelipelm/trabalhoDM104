var ProductController = {
	
	init: function () {
		ProductController.showList();
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
			ddDescription = ProductController.createDD(product.descricao, 'description');
            imgAddToCart = ProductController.createAddToCart(product),
		
        ddName.appendChild(imgAddToCart);
		
		dl.appendChild(dt);
		dl.appendChild(ddName);
		dl.appendChild(ddDescription);
		
		productList.appendChild(dl);
	},
	
	createImage: function(imageLocation) {
		var img = document.createElement('img');
		img.src = imageLocation;
		return img;
	},
	
	createDT: function(product) {
		var 
			dt = document.createElement('dt'),
			img = ProductController.createImage('assets/images/product.png');
		
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
		var imgDelete = ProductController.createImage('assets/images/addToCart.png');
		
		imgDelete.setAttribute('data-productid', product.id);
		imgDelete.setAttribute('data-productname', product.produto);
		
		imgDelete.addEventListener('click', function() {
			ProductController.deleteProduct(this);
		});
		
		return imgDelete;
	}

};

//initialization
ProductController.init();
