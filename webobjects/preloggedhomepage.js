var PreLoggedHomePage = function(){	
	
	
	var registerbutton = element(by.className('btn-link'));
	var loginbutton = element(by.className('btn-primary'));
	var loginlabel = element(by.css('h2'));
	
	
	
	
	var username = element(by.model('vm.username'));
	var userpass = element(by.model('vm.password'));
	
	
	this.getTitle = function(){
		return browser.getTitle();
	};
	
	this.getRegistrationLink = function(){
		return registerbutton.getText();
	};
	this.getLoginButton = function(){
		return loginbutton.getText();
	};
	
	this.getLoginLabel = function(){
		return loginlabel.getText();
	};
	
	this.clickLoginButton = function(){
		loginbutton.click();
	};
	
	
	this.setUsername = function(name){
		username.sendKeys(name);
	};
	
	this.setPassword = function(pass){
		userpass.sendKeys(pass);
	};
	
	this.clickRegsiterLink = function(){
		registerbutton.click();
		
	};
};
//module.exports = new HomePage();
module.exports = PreLoggedHomePage;
	
	