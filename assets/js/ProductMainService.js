var ProductService = {

	list: [],
	
	getList: function(callback) {
		$.ajax({
			type: 'GET',
			url: 'assets/php/productDAO.php',
            dataType: 'json',
            data: {
                method: 'getProducts'
            },
			success: function(list) {
				callback(list);
			},
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Erro ao tentar ação!');
            },
		});
	},
    
    getProductById: function(callback) {
		$.ajax({
			type: 'GET',
			url: 'assets/php/productDAO.php',
            dataType: 'json',
            data: {
                method: 'getProductById',
                id: id
            },
			success: function(list) {
				callback(list);
			},
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Erro ao tentar ação!');
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