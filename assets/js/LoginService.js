var LoginService = {
    
    user: '',
    
    userId: '',
    
    getUser: function () {
        LoginService.retrieveFromSessionStorage();
        return LoginService.user;
	},
    
    getUserId: function () {
        LoginService.retrieveUserIdFromSessionStorage();
        return LoginService.userId;
	},
    
    saveLogin: function (login, password, notifyController) {
        LoginService.getLogin(login, password, function(credentials) {
            LoginService.user = credentials[0];
            LoginService.userId = credentials[2]
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
        window.sessionStorage.setItem('userId', LoginService.userId);
	},
	
	retrieveFromSessionStorage: function () {
		var user = window.sessionStorage.getItem('user');
		if(user) {
			LoginService.user = user;
		}
	},
    
    retrieveUserIdFromSessionStorage: function () {
		var userId = window.sessionStorage.getItem('userId');
		if(userId) {
			LoginService.userId = userId;
		}
	}
}