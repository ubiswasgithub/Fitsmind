var Base = function (){

	var url = 'http://127.0.0.1:8080';
	
	this.get = function() {
		browser.get(url);
	};
	
	this.getBrowserMaxWindow = function(){
		browser.driver.manage().window().maximize();
	};
	
	this.browserPuase = function(b){
		b.driver.sleep(5000);
		b.waitForAngular();
		
	};
};
//module.exports = new Base();

module.exports = Base;