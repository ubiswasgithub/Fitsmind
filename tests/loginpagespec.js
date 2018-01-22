var Login = require('../webobjects/LoginPage');
var Base = require('../common/Base');


describe('AngularJS User Registration and Login App', function (){
	
	var objLogin = new Login();
	var objBase = new Base();

	
		
	it('open login page',function(){		
		objBase.get();		
		
	});
	
	it('should have a login page where user can login with valid username and pass',function(){
		objLogin.setUserName("l_messi");
		objLogin.setUserPassword("lmessi");
		objLogin.clickLoginButton();
		objLogin.getGreetingMessage();
		
	});		
	
	it('should have user greeting message for logged user', function(){
		expect(objLogin.getGreetingMessage()).toEqual('Hi Leonel!');
	});
	
	
});