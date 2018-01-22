var Base = require('../common/Base');
var LoginPage = function (){
	
	var objBase = new Base();
	
	var username = element(by.model('vm.username'));
	var userpass = element(by.model('vm.password'));
	var loginbutton = element(by.className('btn-primary'));
	var greetingmessage = element(by.css('h1'));
	
	this.setUserName = function(name){
		username.sendKeys(name);
	};
	
	this.setUserPassword = function(pass){
		userpass.sendKeys(pass);
	};
	
	this.clickLoginButton = function(){
		objBase.browserPuase(browser);
		loginbutton.click();
		
		
	};
	
	this.getGreetingMessage = function(){
		objBase.browserPuase(browser);
		return greetingmessage.getText();
	};
};

module.exports = LoginPage;
