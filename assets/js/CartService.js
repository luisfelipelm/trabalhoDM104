var CartService = {

	listId: [],
    
    addId: function (id) {
		CartService.listId.push(id);
	},
	
	getListId: function() {
        return CartService.listId;
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