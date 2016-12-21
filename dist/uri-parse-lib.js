/**
 * uri-parse-lib - Small library for parsing URL.
 * @version v1.0.4
 * @link https://github.com/PxyUp/uri-parse-lib
 * @license MIT
 */
(function () {

    var root = this;

    parserURI = function (url) {
        var firstSplit, lastSplit, parsing, urlObject;
        urlObject = {
            host: "",
            port: "",
            query: {},
            pathname: "",
            protocol: "",
            user: "",
            password: "",
            full: url
        };
        firstSplit = function (str, splitter) {
            var array;
            if (str.indexOf(splitter) !== -1) {
                array = [str.substring(0, str.indexOf(splitter)), str.substring(str.indexOf(splitter) + splitter.length)];
                return array;
            }
            return ["", str];
        };
        lastSplit = function (str, splitter) {
            var array;
            if (str.lastIndexOf(splitter) !== -1) {
                array = [str.substring(0, str.lastIndexOf(splitter)), str.substring(str.lastIndexOf(splitter) + splitter.length)];
                return array;
            }
            return [str, ""];
        };
        parsing = function (uri, splitter, flag) {
            if (flag == null) {
                flag = false;
            }
            switch (splitter) {
                case "#":
                    urlObject.hash = lastSplit(uri, splitter)[1];
                    return parsing(lastSplit(uri, splitter)[0], "@");
                case "?":
                    if (urlObject.host === "") {
                        urlObject.host = firstSplit(uri, "/")[0];
                    } else {
                        urlObject.port = firstSplit(uri, "/")[0];
                    }
                    urlObject.query = {};
                    lastSplit(uri, splitter)[1].split("&").forEach(function (elem) {
                        var element;
                        element = elem.split("=");
                        if (element[0] !== "") {
                            return urlObject.query[element[0]] = element[1];
                        }
                    });
                    parsing(lastSplit(uri, splitter)[0], "/");
                    break;
                case "/":
                    urlObject.pathname = firstSplit(uri, splitter)[1];
                    break;
                case "://":
                    urlObject.protocol = firstSplit(uri, splitter)[0];
                    parsing(firstSplit(uri, splitter)[1], "#");
                    break;
                case "@":
                    if (lastSplit(uri, splitter)[1].length === 0) {
                        parsing(lastSplit(uri, splitter)[0], ":", true);
                        parsing(lastSplit(uri, splitter)[1], ":");
                    } else {
                        parsing(lastSplit(uri, splitter)[0], ":");
                        parsing(lastSplit(uri, splitter)[1], ":", true);
                    }
                    break;
                case ":":
                    if (flag) {
                        urlObject.host = firstSplit(uri, splitter)[0];
                        if (parseInt(firstSplit(uri, splitter)[1]).toString() === firstSplit(uri, splitter)[1]) {
                            urlObject.port = firstSplit(uri, splitter)[1];
                        } else {
                            parsing(firstSplit(uri, splitter)[1], "?");
                        }
                    } else {
                        urlObject.user = firstSplit(uri, splitter)[0];
                        urlObject.password = firstSplit(uri, splitter)[1];
                        if (urlObject.user === "") {
                            urlObject.user = firstSplit(uri, splitter)[1];
                            urlObject.password = "";
                        }
                    }
            }
        };
        parsing(url, "://");
        return urlObject;
    };

    if (typeof exports !== 'undefined') {
        //supports node
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = parserURI;
        }
        exports.parserURI = parserURI;
    } else {
        //supports globals
        root.parserURI = parserURI;
    }

    return parserURI;
}).call(this);