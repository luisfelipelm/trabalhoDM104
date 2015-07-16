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

    saveOrder: function(productId, clientId, quantity, totalValue) {
		$.ajax({
			type: 'GET',
			url: '../php/orderDAO.php',
            dataType: 'json',
            data: {
                product_id: productId,
                client_id: clientId,
                quantity: quantity,
                total: totalValue
            },
			success: function(freightList) {
				alert("Pedido enviado com sucesso!");
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