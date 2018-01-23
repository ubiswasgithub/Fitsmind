var Base = require('../common/Base');

var LogoutPage = function (){
	var objBase = new Base();
	var logoutbutton = element(by.className('btn-primary'));
	var deleteLink = element.all(by.className('ng-binding ng-scope'));
	
	this.clickLogoutButton = function (){
		logoutbutton.click();
		objBase.browserPuase(browser);
	};
	
	this.getLogutButton = function(){
		return logoutbutton.getText();
	};
	this.deletUser = function(){
		deleteLink.click();
	}
};

module.exports = LogoutPage;