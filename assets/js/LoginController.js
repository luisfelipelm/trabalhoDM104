var LoginController = {
	
	init: function () {
        
        LoginController.createLoginMessage();
        LoginController.setForm();
	},
    
    setForm: function () {
		var form = document.getElementById('formLogin');
		form.addEventListener('submit', function(event) {
            event.preventDefault();
			LoginController.confirmLogin();   
		});
	},
		
	confirmLogin: function () {
        var login = document.getElementById('login').value,
            passwd = document.getElementById('psswd').value;;
		
        LoginService.saveLogin(login, passwd, function(){
            LoginController.createLoginMessage(); 
        });
           

	},
    
    createLoginMessage: function () {
        var userMessage = document.getElementById('userMessage'),
            user = LoginService.getUser();
        
        if(user == ''){
            userMessage.innerHTML = 'Você não está logado ainda!' + LoginService.getUser();
        }else{
            userMessage.innerHTML = 'Você está logado como: ' + LoginService.getUser();
        }

	}
	
};	
//initialization
LoginController.init();
