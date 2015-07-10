var CartService = {

	list: [],
    
    add: function (id) {
        var product = CartService.getProductById(id);
        CartService.list.push(product);
	},
	
	getList: function() {
        return CartService.list;
	},
    
    getProductById: function(id) {
		$.ajax({
			type: 'GET',
			url: 'assets/php/getProductById.php',
            dataType: 'json',
            data: {
                method: 'getProductById',
                id: id
            },
			success: function(product) {
				return product;
			},
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Erro ao tentar ação!');
                alert(jqXHR);
                alert(textStatus);
                alert(errorThrown);
            },
		});
	},
	
	saveToLocalStorage: function () {
		var listJson = JSON.stringify(ProductService.list);
		window.localStorage.setItem('productlist', listJson);
	},
	
	retrieveFromLocalStorage: function () {
		var listJson = window.localStorage.getItem('productlist');
		if(listJson) {
			ProductService.list = JSON.parse(listJson);
		}
	}
}