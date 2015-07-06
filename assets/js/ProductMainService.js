var ProductService = {

	list: [],
	
	getList: function(callback) {
		$.ajax({
			type: 'GET',
			url: 'assets/php/getProducts.php',
            dataType: 'json',
			success: function(list) {
				callback(list);
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