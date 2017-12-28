'use strict';
const URL = 'https://api.zoined.com/';
const rp = require('request-promise');
const constants = require('./constants');


const postData = async(zoinedKey, dataType, dataValue) => {


  let uri = URL;

  switch (dataType) {
  case constants.SUPPLIERS:
    uri += 'suppliers?dryRun=false';
    break;
  case constants.SALES:
    uri += 'sales?dryRun=false';
    break;
  case constants.CAMPAIGN:
    uri += 'campaigns?dryRun=false';
    break;
  case constants.CAMPAIGNPRODUCTS:
    uri += 'campaignProducts?dryRun=false';
    break;
  case constants.DEPARTMENTS:
    uri += 'departments?dryRun=false';
    break;
  case constants.BUDGETS:
    uri += 'budgets?dryRun=false';
    break;
  case constants.PRODUCTS:
    uri += 'products?dryRun=false';
    break;
  case constants.CUSTOMERS:
    uri += 'customers?dryRun=false';
    break;
  case constants.ORGANISATIONS:
    uri += 'organisations?dryRun=false';
    break;
  case constants.SALESPERSON:
    uri += 'salespersons?dryRun=false';
    break;
  case constants.CURRENCYRATES:
    uri += 'currencyRates?dryRun=false';
    break;
  case constants.INVENTORYSNAPSHOTS:
    uri += 'inventorySnapshots?dryRun=false';
    break;
  case constants.INVENTORYTRANSACTIONS:
    uri += 'inventoryTransactions?dryRun=false';
    break;
  case constants.FLATHIERACHIES:
    uri += 'flatHierarchies?dryRun=false';
    break;
  case constants.PRODUCTHIERACHIES:
    uri += 'productHierarchies?dryRun=false';
    break;
  case constants.REBATECODES:
    uri += 'rebateCodes?dryRun=false';
    break;
  case constants.SALESSUMMARY:
    uri += 'salesSummaries?dryRun=false';
    break;
  case constants.VISITORS:
    uri += 'visitors?dryRun=false';
    break;
  case constants.VISTORDEMOGRAPHICS:
    uri += 'visitorDemographics?dryRun=false';
    break;
  case constants.IDMAPPING:
    uri += 'idMapping?dryRun=false';
    break;
  }

  let postOptions = {
    method: 'POST',
    uri: uri,
    body: JSON.stringify(dataValue),
    auth: {
      'bearer': zoinedKey
    }
  };
  return await rp(postOptions);
};


module.exports = { postData };
