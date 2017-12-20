/* eslint-disable consistent-return */
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var zKey = '';

var constants = require('./constants');
var supplierValidation = require('./validation/supplier');
var salesValidation = require('./validation/salestransactions');
var campaignValidation = require('./validation/campaigns');
var departmentValidation = require('./validation/departments');
var campaignProductValidation = require('./validation/campaignproducts');
var budgetValidation = require('./validation/budgets');
var productValidation = require('./validation/products');
var customerValidation = require('./validation/customer');
var organisationValidation = require('./validation/organisations');
var salesPersonsValidation = require('./validation/salesperson');
var currencyRateValidation = require('./validation/currencyrates');
var inventorySnapshotsValidation = require('./validation/inventorysnapshots');
var inventoryTransactionsValidation = require('./validation/inventorytransactions');
var flatHierachiesValidation = require('./validation/flathierarchies');
var productHierachiesValidation = require('./validation/producthierachies');
var rebateCodesValidation = require('./validation/rebatecodes');
var salesOrdersValidation = require('./validation/salesorders');
var salesSummaryValidation = require('./validation/salessummary');
var visitorValidation = require('./validation/visitors');
var zoinedPost = require('./doPost');

exports.init = function (apiKey) {
  zKey = apiKey;
};

var sendData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dataType, dataValue) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return zoinedPost.postData(zKey, dataType, dataValue);

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function sendData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.dataPost = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(postData, postType) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = postType;
            _context2.next = _context2.t0 === constants.SUPPLIERS ? 3 : _context2.t0 === constants.SALES ? 6 : _context2.t0 === constants.CAMPAIGN ? 9 : _context2.t0 === constants.CAMPAIGNPRODUCTS ? 12 : _context2.t0 === constants.DEPARTMENTS ? 15 : _context2.t0 === constants.BUDGETS ? 18 : _context2.t0 === constants.PRODUCTS ? 21 : _context2.t0 === constants.CUSTOMERS ? 24 : _context2.t0 === constants.ORGANISATIONS ? 27 : _context2.t0 === constants.SALESPERSON ? 30 : _context2.t0 === constants.CURRENCYRATES ? 33 : _context2.t0 === constants.INVENTORYSNAPSHOTS ? 36 : _context2.t0 === constants.INVENTORYTRANSACTIONS ? 39 : _context2.t0 === constants.FLATHIERACHIES ? 42 : _context2.t0 === constants.PRODUCTHIERACHIES ? 45 : _context2.t0 === constants.REBATECODES ? 48 : _context2.t0 === constants.SALESORDERS ? 51 : _context2.t0 === constants.SALESSUMMARY ? 54 : _context2.t0 === constants.VISITORS ? 57 : 60;
            break;

          case 3:
            _context2.next = 5;
            return supplierValidation.validateSupplier(postData).then(function (returnData) {
              return sendData(constants.SUPPLIERS, returnData);
            }).catch(function (errorData) {
              return errorData;
            });

          case 5:
            return _context2.abrupt('return', _context2.sent);

          case 6:
            _context2.next = 8;
            return salesValidation.validateSalesTransactions(postData).then(function (returnData) {
              return sendData(constants.SALES, returnData);
            });

          case 8:
            return _context2.abrupt('return', _context2.sent);

          case 9:
            _context2.next = 11;
            return campaignValidation.validateCampaign(postData).then(function (returnData) {
              return sendData(constants.CAMPAIGN, returnData);
            });

          case 11:
            return _context2.abrupt('return', _context2.sent);

          case 12:
            _context2.next = 14;
            return campaignProductValidation.validateCampaignProducts(postData).then(function (returnData) {
              return sendData(constants.CAMPAIGNPRODUCTS, returnData);
            });

          case 14:
            return _context2.abrupt('return', _context2.sent);

          case 15:
            _context2.next = 17;
            return departmentValidation.validateDepartment(postData).then(function (returnData) {
              return sendData(constants.DEPARTMENTS, returnData);
            });

          case 17:
            return _context2.abrupt('return', _context2.sent);

          case 18:
            _context2.next = 20;
            return budgetValidation.validateBudgets(postData).then(function (returnData) {
              return sendData(constants.BUDGETS, returnData);
            });

          case 20:
            return _context2.abrupt('return', _context2.sent);

          case 21:
            _context2.next = 23;
            return productValidation.validateProducts(postData).then(function (returnData) {
              return sendData(constants.PRODUCTS, returnData);
            });

          case 23:
            return _context2.abrupt('return', _context2.sent);

          case 24:
            _context2.next = 26;
            return customerValidation.validateCustomers(postData).then(function (returnData) {
              return sendData(constants.CUSTOMERS, returnData);
            });

          case 26:
            return _context2.abrupt('return', _context2.sent);

          case 27:
            _context2.next = 29;
            return organisationValidation.validateOrganisations(postData).then(function (returnData) {
              return sendData(constants.ORGANISATIONS, returnData);
            });

          case 29:
            return _context2.abrupt('return', _context2.sent);

          case 30:
            _context2.next = 32;
            return salesPersonsValidation.validateSalesPerson(postData).then(function (returnData) {
              return sendData(constants.SALESPERSON, returnData);
            });

          case 32:
            return _context2.abrupt('return', _context2.sent);

          case 33:
            _context2.next = 35;
            return currencyRateValidation.currencyValidation(postData).then(function (returnData) {
              return sendData(constants.CURRENCYRATES, returnData);
            });

          case 35:
            return _context2.abrupt('return', _context2.sent);

          case 36:
            _context2.next = 38;
            return inventorySnapshotsValidation.validateInventorySnapshots(postData).then(function (returnData) {
              return sendData(constants.INVENTORYSNAPSHOTS, returnData);
            });

          case 38:
            return _context2.abrupt('return', _context2.sent);

          case 39:
            _context2.next = 41;
            return inventoryTransactionsValidation.validateInventoryTransactions(postData).then(function (returnData) {
              return sendData(constants.INVENTORYTRANSACTIONS, returnData);
            });

          case 41:
            return _context2.abrupt('return', _context2.sent);

          case 42:
            _context2.next = 44;
            return flatHierachiesValidation.validateFlatHierarchies(postData).then(function (returnData) {
              return sendData(constants.FLATHIERACHIES, returnData);
            });

          case 44:
            return _context2.abrupt('return', _context2.sent);

          case 45:
            _context2.next = 47;
            return productHierachiesValidation.validateProductHierachies(postData).then(function (returnData) {
              return sendData(constants.PRODUCTHIERACHIES, returnData);
            });

          case 47:
            return _context2.abrupt('return', _context2.sent);

          case 48:
            _context2.next = 50;
            return rebateCodesValidation.validateRebateCodes(postData).then(function (returnData) {
              return sendData(constants.REBATECODES, returnData);
            });

          case 50:
            return _context2.abrupt('return', _context2.sent);

          case 51:
            _context2.next = 53;
            return salesOrdersValidation.validateSalesOrders(postData).then(function (returnData) {
              return sendData(constants.SALESORDERS, returnData);
            });

          case 53:
            return _context2.abrupt('return', _context2.sent);

          case 54:
            _context2.next = 56;
            return salesSummaryValidation.validateSalesSummary(postData).then(function (returnData) {
              return sendData(constants.SALESSUMMARY, returnData);
            });

          case 56:
            return _context2.abrupt('return', _context2.sent);

          case 57:
            _context2.next = 59;
            return visitorValidation.validateVisitors(postData).then(function (returnData) {
              return sendData(constants.VISITORS, returnData);
            });

          case 59:
            return _context2.abrupt('return', _context2.sent);

          case 60:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
//# sourceMappingURL=zoined.js.map