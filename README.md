# uri-parse-lib

Small library for parse URI(URL)

[![N|Solid](https://pp.vk.me/c637816/v637816997/3320a/nvaUMQhIbkc.jpg)](https://github.com/PxyUp/uri-parse-lib/)

# Install

    npm install --save uri-parse-lib
    
# Usage   

 In Browser
    
     <html>
         <head>
             <script language="javascript" src="uri-parse-lib.js"></script>
         </head>
         <script>
            var t = parseURI("http://user:pass@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
         </script>
    
 
 In NodeJS 
    
       var parseURI = require("uri-parse-lib");
       var t = parseURI("http://user:pass@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
    