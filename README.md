# Fitsmind

- Run angualar js application locally by 
    - installing http-server using command: npm install -g http-server [should have node.js installed on your machine]
    - go to application folder > open command prompt and run command : http-server -o to open the application [application is running on   http://127.0.0.1:8080 or http://yourip:8080
- open commmand prompt > Now start selenium server by running the command - webdriver-manager start [should have protractor installed on mahcine]
- Now go to script folder and open command prompt> run the all suites simaltaneously be running the below command:
protractor config.js --suite preloggedhomepage,registrationpage,loginpage [here my suites are: preloggedhomepage,registrationpage,loginpage,logoutpage]
