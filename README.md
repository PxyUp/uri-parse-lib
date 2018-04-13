# uri-parse-lib

Small library for parse URI(URL)

[![NPM](https://nodei.co/npm/uri-parse-lib.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/uri-parse-lib/)

# Install

    npm install uri-parse-lib
    
# Usage   

 In Browser
    
     <html>
         <head>
             <script language="javascript" src="uri-parse-lib.js"></script>
         </head>
         <script>
            var t = parserURI("http://user:pass@example.com:8080/directory/file.ext?query[nan][0][nan]=1&query[nan][1][sed]=4&sed[]=5&query[nan][2][sed]=4#anchor");
            /*
                hash: "anchor"
                host: "example.com"
                origin: "http://example.com:8080"
                password: "pass"
                pathname: "/directory/file.ext"
                port: "8080"
                protocol: "http"
                query: {
                    nan: [
                      {
                        nan: '1',
                      }, {
                        sed: '4'
                      }, {
                        sed: '4'
                      }
                    ]
                  },
                  sed: ['5']
                }
                user: "user"
            */
         </script>
         
    // param == null -> incorrect       
    
 In NodeJS 
    
       var parserURI = require("uri-parse-lib");
       var t = parserURI("http://user:pass@example.com:8080/directory/file.ext?query[nan][0][nan]=1&query[nan][1][sed]=4&sed[]=5&query[nan][2][sed]=4#anchor");
       /*
            hash: "anchor"
            host: "example.com"
            origin: "http://example.com:8080"
            password: "pass"
            pathname: "/directory/file.ext"
            port: "8080"
            protocol: "http",
            query: {
                nan: [
                  {
                    nan: '1',
                  }, {
                    sed: '4'
                  }, {
                    sed: '4'
                  }
                ]
              },
              sed: ['5']
            },
            user: "user"
       */
    
    // param == null -> incorrect 
    
   
