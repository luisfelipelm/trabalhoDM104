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
    
    getFreight: function(weight, cep, callback) {
		$.ajax({
			type: 'GET',
			url: '../php/getFreight.php',
            dataType: 'json',
            data: {
                cepDestination: cep,
                weight: weight
            },
			success: function(freightList) {
				callback(freightList);
			},
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Erro ao tentar ação!');
                alert(jqXHR);
                alert(textStatus);
                alert(errorThrown);
            },
		});
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

    saveOrder: function(productId, clientId, quantity, totalValue, freight) {
		$.ajax({
			type: 'POST',
			url: '../php/orderDAO.php',
            data:{
                product_id: productId,
                client_id: clientId,
                quantity: quantity,
                total: totalValue,
                freight: freight
            },
			success: function() {
				return true;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Erro ao tentar ação!');
                return false;              
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