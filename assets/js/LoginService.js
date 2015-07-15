var LoginService = {
    
    user: '',
    
    getUser: function (login, password) {
        LoginService.retrieveFromSessionStorage();
        return LoginService.user;
	},
    
    saveLogin: function (login, password, notifyController) {
        LoginService.getLogin(login, password, function(credentials) {
            LoginService.user = credentials[0];
            LoginService.saveToSessionStorage();
            notifyController();
        });
	},
    
    getLogin: function(login, password, callback) {
		$.ajax({
			type: 'POST',
			url: 'assets/php/login.php',
            dataType: 'json',
            data: {
                login: login,
                senha: password
            },
			success: function(credentials) {
				callback(credentials);
			},
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Erro ao tentar ação!');
                alert(jqXHR);
                alert(textStatus);
                alert(errorThrown);
            },
		});
	},
	
	saveToSessionStorage: function () {
		window.sessionStorage.setItem('user', LoginService.user);
	},
	
	retrieveFromSessionStorage: function () {
		var user = window.sessionStorage.getItem('user');
		if(user) {
			LoginService.user = user;
		}
	}
}