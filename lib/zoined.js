/* eslint-disable consistent-return */
'use strict';

let zKey = '';

const constants = require('./constants');
const supplierValidation = require('./validation/supplier');
const salesValidation = require('./validation/salestransactions');
const campaignValidation = require('./validation/campaigns');
const departmentValidation = require('./validation/departments');
const campaignProductValidation = require('./validation/campaignproducts');
const productValidation = require('./validation/products');
const customerValidation = require('./validation/customer');
const organisationValidation = require('./validation/organisations');
const salesPersonsValidation = require('./validation/salesperson');
const currencyRateValidation = require('./validation/currencyrates');
const inventorySnapshotsValidation = require('./validation/inventorysnapshots');
const inventoryTransactionsValidation = require('./validation/inventorytransactions');
const flatHierachiesValidation = require('./validation/flathierarchies');
const productHierachiesValidation = require('./validation/producthierachies');
const rebateCodesValidation = require('./validation/rebatecodes');
const salesOrdersValidation = require('./validation/salesorders');
const salesSummaryValidation = require('./validation/salessummary');
const visitorValidation = require('./validation/visitors');
const visitorDemographicValidation = require('./validation/visitordemographics');
const idMapping = require('./validation/idmapping');
const salesBudgets = require('./validation/salesbudgets');
const zoinedPost = require('./doPost');

exports.init = (apiKey) => {
  zKey = apiKey;
};


const sendData = async(dataType, dataValue) => {
  return await zoinedPost.postData(zKey, dataType, dataValue);
};


exports.dataPost = async(postData, postType) => {

  switch (postType) {
  case constants.SUPPLIERS:
    return await supplierValidation.validateSupplier(postData)
      .then(returnData => {
        return sendData(constants.SUPPLIERS, returnData);
      })
      .catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });
  case constants.SALES:
    return await salesValidation.validateSalesTransactions(postData)
      .then(returnData => {
        return sendData(constants.SALES, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });
  case constants.CAMPAIGN:
    return await campaignValidation.validateCampaign(postData)
      .then(returnData => {
        return sendData(constants.CAMPAIGN, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });
  case constants.CAMPAIGNPRODUCTS:
    return await campaignProductValidation.validateCampaignProducts(postData)
      .then(returnData => {
        return sendData(constants.CAMPAIGNPRODUCTS, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });
  case constants.DEPARTMENTS:
    return await departmentValidation.validateDepartment(postData)
      .then(returnData => {
        return sendData(constants.DEPARTMENTS, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });

  case constants.PRODUCTS:
    return await productValidation.validateProducts(postData)
      .then(returnData => {
        return sendData(constants.PRODUCTS, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });
  case constants.CUSTOMERS:
    return await customerValidation.validateCustomers(postData)
      .then(returnData => {
        return sendData(constants.CUSTOMERS, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });
  case constants.ORGANISATIONS:
    return await organisationValidation.validateOrganisations(postData)
      .then(returnData => {
        return sendData(constants.ORGANISATIONS, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });

  case constants.SALESPERSON:
    return await salesPersonsValidation.validateSalesPerson(postData)
      .then(returnData => {
        return sendData(constants.SALESPERSON, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });

  case constants.CURRENCYRATES:
    return await currencyRateValidation.currencyValidation(postData)
      .then(returnData => {
        return sendData(constants.CURRENCYRATES, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });

  case constants.INVENTORYSNAPSHOTS:
    return await inventorySnapshotsValidation.validateInventorySnapshots(postData)
      .then(returnData => {
        return sendData(constants.INVENTORYSNAPSHOTS, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });

  case constants.INVENTORYTRANSACTIONS:
    return await inventoryTransactionsValidation.validateInventoryTransactions(postData)
      .then(returnData => {
        return sendData(constants.INVENTORYTRANSACTIONS, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });

  case constants.FLATHIERACHIES:
    return await flatHierachiesValidation.validateFlatHierarchies(postData)
      .then(returnData => {
        return sendData(constants.FLATHIERACHIES, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });

  case constants.PRODUCTHIERACHIES:
    return await productHierachiesValidation.validateProductHierachies(postData)
      .then(returnData => {
        return sendData(constants.PRODUCTHIERACHIES, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });

  case constants.REBATECODES:
    return await rebateCodesValidation.validateRebateCodes(postData)
      .then(returnData => {
        return sendData(constants.REBATECODES, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });

  case constants.SALESORDERS:
    return await salesOrdersValidation.validateSalesOrders(postData)
      .then(returnData => {
        return sendData(constants.SALESORDERS, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });

  case constants.SALESSUMMARY:
    return await salesSummaryValidation.validateSalesSummary(postData)
      .then(returnData => {
        return sendData(constants.SALESSUMMARY, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });

  case constants.VISITORS:
    return await visitorValidation.validateVisitors(postData)
      .then(returnData => {
        return sendData(constants.VISITORS, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });

  case constants.VISTORDEMOGRAPHICS:
    return await visitorDemographicValidation.validateVisitorDemographics(postData)
      .then(returnData => {
        return sendData(constants.VISTORDEMOGRAPHICS, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });

  case constants.IDMAPPING:
    return await idMapping.validateIDMapping(postData)
      .then(returnData => {
        return sendData(constants.VISTORDEMOGRAPHICS, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });

  case constants.SALESBUDGETS:
    return await salesBudgets.validateSalesBudgets(postData)
      .then(returnData => {
        return sendData(constants.SALESBUDGETS, returnData);
      }).catch(errorData => {
        return new Promise((resolve, reject) => {
          reject(errorData);
        });
      });
  }
};

