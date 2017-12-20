'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var URL = 'https://api.zoined.com/';
var rp = require('request-promise');
var constants = require('./constants');

var postData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(zoinedKey, dataType, dataValue) {
    var uri, postOptions;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            uri = URL;
            _context.t0 = dataType;
            _context.next = _context.t0 === constants.SUPPLIERS ? 4 : _context.t0 === constants.SALES ? 6 : _context.t0 === constants.CAMPAIGN ? 8 : _context.t0 === constants.CAMPAIGNPRODUCTS ? 10 : _context.t0 === constants.DEPARTMENTS ? 12 : _context.t0 === constants.BUDGETS ? 14 : _context.t0 === constants.PRODUCTS ? 16 : _context.t0 === constants.CUSTOMERS ? 18 : _context.t0 === constants.ORGANISATIONS ? 20 : _context.t0 === constants.SALESPERSON ? 22 : _context.t0 === constants.CURRENCYRATES ? 24 : _context.t0 === constants.INVENTORYSNAPSHOTS ? 26 : _context.t0 === constants.INVENTORYTRANSACTIONS ? 28 : _context.t0 === constants.FLATHIERACHIES ? 30 : _context.t0 === constants.PRODUCTHIERACHIES ? 32 : _context.t0 === constants.REBATECODES ? 34 : _context.t0 === constants.SALESSUMMARY ? 36 : _context.t0 === constants.VISITORS ? 38 : 40;
            break;

          case 4:
            uri += 'suppliers?dryRun=false';
            return _context.abrupt('break', 40);

          case 6:
            uri += 'sales?dryRun=false';
            return _context.abrupt('break', 40);

          case 8:
            uri += 'campaigns?dryRun=false';
            return _context.abrupt('break', 40);

          case 10:
            uri += 'campaignProducts?dryRun=false';
            return _context.abrupt('break', 40);

          case 12:
            uri += 'departments?dryRun=false';
            return _context.abrupt('break', 40);

          case 14:
            uri += 'budgets?dryRun=false';
            return _context.abrupt('break', 40);

          case 16:
            uri += 'products?dryRun=false';
            return _context.abrupt('break', 40);

          case 18:
            uri += 'customers?dryRun=false';
            return _context.abrupt('break', 40);

          case 20:
            uri += 'organisations?dryRun=false';
            return _context.abrupt('break', 40);

          case 22:
            uri += 'salespersons?dryRun=false';
            return _context.abrupt('break', 40);

          case 24:
            uri += 'currencyRates?dryRun=false';
            return _context.abrupt('break', 40);

          case 26:
            uri += 'inventorySnapshots?dryRun=false';
            return _context.abrupt('break', 40);

          case 28:
            uri += 'inventoryTransactions?dryRun=false';
            return _context.abrupt('break', 40);

          case 30:
            uri += 'flatHierarchies?dryRun=false';
            return _context.abrupt('break', 40);

          case 32:
            uri += 'productHierarchies?dryRun=false';
            return _context.abrupt('break', 40);

          case 34:
            uri += 'rebateCodes?dryRun=false';
            return _context.abrupt('break', 40);

          case 36:
            uri += 'salesSummaries?dryRun=false';
            return _context.abrupt('break', 40);

          case 38:
            uri += 'visitors?dryRun=false';
            return _context.abrupt('break', 40);

          case 40:
            postOptions = {
              method: 'POST',
              uri: uri,
              body: JSON.stringify(dataValue),
              auth: {
                'bearer': zoinedKey
              }
            };
            _context.next = 43;
            return rp(postOptions);

          case 43:
            return _context.abrupt('return', _context.sent);

          case 44:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function postData(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = { postData: postData };
//# sourceMappingURL=doPost.js.map