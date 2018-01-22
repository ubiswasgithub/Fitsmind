exports.config ={
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	suites:{
		preloggedhomepage: 'tests/preloggedhomespec.js',
		registrationpage: 'tests/registrationpagespec.js',
		loginpage:'tests/loginpagespec.js'
	},
	//specs:'tests/registrationpagespec.js'	
	capabilities: {
    browserName: 'ie'},
	jasmineNodeOpts: {
    showColors: true
  }
	
}