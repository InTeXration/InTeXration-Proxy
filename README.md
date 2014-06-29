InTeXration-Proxy
=================

The InTeXration Proxy Server using [node-http-proxy](https://github.com/nodejitsu/node-http-proxy). 

## Status

[![Dependencies](https://david-dm.org/InTeXration/InTeXration-Proxy.svg)](https://david-dm.org/InTeXration/InTeXration-Proxy)
[![Build](https://travis-ci.org/InTeXration/InTeXration-Proxy.svg)](https://travis-ci.org/InTeXration/InTeXration-Proxy)

## Hosts
Proxy servers are associated with hosts as shown in the example below. 
```js
"intexration.com": {
    server: httpProxy.createProxyServer(), 
    options: {target: 'http://localhost:3030'}
}
```
