# uri-parse-lib

Small library for parse URI(URL)

[![N|Solid](https://pp.vk.me/c637816/v637816997/3320a/nvaUMQhIbkc.jpg)](https://www.npmjs.com/package/uri-parse-lib)

# Install

    npm install uri-parse-lib
    
# Usage   

 In Browser
    
     <html>
         <head>
             <script language="javascript" src="uri-parse-lib.js"></script>
         </head>
         <script>
            var t = parseURI("http://user:pass@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
            /*
                full: "http://user:pass@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor"
                hash: "anchor"
                host: "example.com"
                origin: "http://example.com:8080"
                password: "pass"
                pathname: "/directory/file.ext"
                port: "8080"
                protocol: "http"
                query: {
                    next:"4"
                    query:"1"
                    sed:"5"
                }
                user:"user"
            */
         </script>
    
 
 In NodeJS 
    
       var parseURI = require("uri-parse-lib");
       var t = parseURI("http://user:pass@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
       /*
            full: "http://user:pass@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor"
            hash: "anchor"
            host: "example.com"
            origin: "http://example.com:8080"
            password: "pass"
            pathname: "/directory/file.ext"
            port: "8080"
            protocol: "http"
            query: {
                next:"4"
                query:"1"
                sed:"5"
            }
            user:"user"
       */
    