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
            linkRelatorio = document.getElementById('aLinkRelatorio'),
            linkAlteraDados = document.getElementById('aLinkAlteraDados'),
            linkMenuAdmin = document.getElementById('aLinkMenuAdmin'),
            user = LoginService.getUser();
        
        if(user == ''){
            userMessage.innerHTML = 'Você não está logado ainda!' + LoginService.getUser();
        }else{
            userMessage.innerHTML = 'Você está logado como: ' + LoginService.getUser();
            if(user === 'admin'){
                linkMenuAdmin.innerHTML = 'Menu Admin';
                linkAlteraDados.innerHTML = '';
                linkRelatorio.innerHTML = '';
                document.getElementById("sairButton").disabled = false;
            }
            else{
                linkMenuAdmin.innerHTML = '';
                linkAlteraDados.innerHTML = 'Alterar dados';
                linkRelatorio.innerHTML = 'Relatorio compras';
                document.getElementById("sairButton").disabled = false;
            }        
        }
	},
    
    session: function(){
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "../php/setSession.php?variable=" + document.getElementById('login').value, true);
        xmlhttp.send();
    },
    
    removeSession: function(){
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "../php/removeSession.php", true);
        xmlhttp.send();
        document.getElementById("sairButton").disabled = true;
        linkRelatorio = document.getElementById('aLinkRelatorio');
        linkAlteraDados = document.getElementById('aLinkAlteraDados');
        linkMenuAdmin = document.getElementById('aLinkMenuAdmin');
        linkRelatorio.innerHTML = '';
        linkAlteraDados.innerHTML = '';
        linkMenuAdmin.innerHTML = '';
        window.sessionStorage.setItem('user','');
        location.reload();
    }

};	
//initialization
LoginController.init();
