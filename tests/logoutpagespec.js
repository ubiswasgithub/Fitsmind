var Logout = require('../webobjects/LogoutPage');
var PreLoggedHome = require('../webobjects/PreLoggedHomePage');

describe('Angular JS example and Login app', function(){
	var objLogout = new Logout();
	var objHome = new PreLoggedHome();
	
	it('should have a logout button', function(){
		expect(objLogout.getLogutButton()).toEqual('Logout');
	});
	
	it('should have delete link to delete user and delete user', function(){
		objLogout.deletUser();
	});
	
	it('logout by click logout option ', function(){
		objLogout.clickLogoutButton();
	});
	
	it('login screen is displayed after logout', function(){
		expect(objHome.getLoginLabel()).toEqual('Login');
	});
});