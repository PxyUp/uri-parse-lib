# uri-parse-lib

Small library for parse URI(URL)

[![NPM](https://nodei.co/npm/uri-parse-lib.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/uri-parse-lib/)

# Install

    npm install uri-parse-lib
    
# Usage   
    
    import * as parseURI from "uri-parse-lib" //uri-parse-lib/dist/uri-parse-lib.node.js for Node
    
    window.parseURI() // alternative
    
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
