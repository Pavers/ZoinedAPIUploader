<!--@shields.plastic('npm')-->
[![npm version](https://img.shields.io/npm/v/zoined_api.svg?style=plastic)](https://www.npmjs.com/package/zoined_api)
<!--/@-->

<!--@h1([pkg.name])-->
# zoined_api
<!--/@-->

## Description

Allows easy validation and posting to the [Zoined](https://www.zoined.com/) api. Each line is validated against the api 
docs and returns an error with the cause and position if fails. If a null value is sent for a non required field then a 
default is used.

<!--@installation()-->
## Installation

```sh
npm install --save zoined_api
```
<!--/@-->

## Usage

```sh
const zoinedAPI = require(zoined_api)
zoinedAPI.init('myzoinedapikey')
....

zoinedAPI.dataPost(JSON.stringify(myData), 'dataType')
    .then(response => {
    ..
    })
    .catch(error => {
    ...
    });
```

## Available dataTypes

- sales 
- suppliers
- campaigns
- campaignproducts
- departments
- budgets
- products
- customers
- organisations
- salesperson
- currencyrates
- inventorysnapshots
- inventorytransactions
- flathierarchies
- producthierachies
- rebatecodes
- salesorders
- salessummary
- visitors
- visitordemographics
- idmapping

## Example Success Response

```sh
{
  "status": "OK",
  "msg": "1 entity added"
}
```

## Example Error Response

```sh
{
    "errorSupplierID":"",
    "errorField":"supplier_id",
    "errorReason":"Missing Required Property"
}
```

<!--@dependencies({shield:false})-->
## <a name="dependencies">Dependencies</a>

- [request](https://github.com/request/request): Simplified HTTP request client.
- [request-promise](https://github.com/request/request-promise): The simplified HTTP request client 'request' with Promise support. Powered by Bluebird.

<!--/@-->

<!--@devDependencies({shield:false})-->
## <a name="dev-dependencies">Dev Dependencies</a>

- [babel-preset-env](https://github.com/babel/babel-preset-env): A Babel preset for each environment.
- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [mos](https://github.com/mosjs/mos): A pluggable module that injects content into your markdown files via hidden JavaScript snippets
- [nyc](https://github.com/istanbuljs/nyc): the Istanbul command line interface

<!--/@-->

<!--@license()-->
## License

[MIT](./LICENSE) © Dave Grix - Pavers LTD
<!--/@-->
