var Base = require('../common/Base');
var Home = require('../webobjects/PreLoggedHomePage');


describe('AngularJS User Registration and Login App', function (){
	
	var objHome = new Home();
	var objBase = new Base();
	
		
	it('oopen home page',function(){		
		objBase.get();
		
	});
	
	it('should have a title',function(){		
		expect(objHome.getTitle()).toEqual('AngularJS User Registration and Login Example');
	});
	
	it('should have a registration link',function(){
		expect(objHome.getRegistrationLink()).toEqual('Register');
	});
	
	it('should have a lable named Login',function(){
		
		expect(objHome.getLoginLabel()).toEqual('Login');
	});	
	
});