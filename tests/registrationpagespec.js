var Registration = require('../webobjects/RegistrationPage');
var Base = require('../common/Base');


describe('AngularJS User Registration and Login App', function (){
	
	var objReg = new Registration();
	var objBase = new Base();

	
	
		
	it('open home page',function(){		
		objBase.get();		
	});
	
	it('have a register link and open registration page by clicking on it', function(){
		
	objReg.clickRegisterLink();
		
	});	
	
	it('should have a label named Register', function(){
		
		expect(objReg.getRegisterLabel()).toEqual('Register');
		
	});	
	
	it('should have a registration page where user can register',function(){
		objReg.setFirstName("Leonel");
		objReg.setLastName("Messi");
		objReg.setUserName("l_messi");
		objReg.setUserPassword("lmessi");
		objReg.clickRegisterButton();
		
	});
	
	it('should have registration success message', function(){
		expect(objReg.getRegistrationSuccessMessage()).toEqual('Registration successful');
	});
		
	
	
});