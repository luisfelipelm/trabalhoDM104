var CartService = {

	list: [],
    
    add: function (id) {
        CartService.getProductById(id, function(product) {
            CartService.list.push(product);
            CartService.saveToLocalStorage();
        });
	},
	
	getList: function() {
        CartService.retrieveFromLocalStorage();
        return CartService.list;
	},
    
    getProductById: function(id, callback) {
		$.ajax({
			type: 'GET',
			url: 'assets/php/getProductById.php',
            dataType: 'json',
            data: {
                method: 'getProductById',
                id: id
            },
			success: function(product) {
				callback(product);
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
		var listJson = JSON.stringify(CartService.list);
		window.sessionStorage.setItem('productlist', listJson);
	},
	
	retrieveFromLocalStorage: function () {
		var listJson = window.sessionStorage.getItem('productlist');
		if(listJson) {
			CartService.list = JSON.parse(listJson);
		}
	}
}