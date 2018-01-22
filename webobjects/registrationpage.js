var Base = require('../common/Base');
var RegistrationPage = function (){
	
	var objBase = new Base();
	var fname = element(by.model('vm.user.firstName'));
	var lname = element(by.model('vm.user.lastName'));
	var username = element(by.model('vm.user.username'));
	var userpass = element(by.model('vm.user.password'));
	var registerlink = element(by.className('btn-link'));
	
	var registerbutton = element(by.className('btn-primary'));
	var cancel = element(by.className('btn-link'));	
	var registerlabel = element(by.css('h2'));
	
	
	
	
	
	this.getRegisterLabel = function(){
		return registerlabel.getText();
	};
	
	this.clickRegisterLink = function (){
		
		registerlink.click();
		objBase.browserPuase(browser);
		
	};
	
	this.setFirstName = function(f_name){
		fname.sendKeys(f_name);
	};
	
	this.setLastName = function(l_name){
		lname.sendKeys(l_name);
	};
	
	this.setUserName = function(user_name){
		username.sendKeys(user_name);
	};
	
	this.setUserPassword = function(pass){
		userpass.sendKeys(pass);	
		objBase.browserPuase(browser);
	
		
	};
	
	this.clickRegisterButton = function(){
		
		registerbutton.click();
		objBase.browserPuase(browser);
		
	};
	
	
};
module.exports = RegistrationPage;