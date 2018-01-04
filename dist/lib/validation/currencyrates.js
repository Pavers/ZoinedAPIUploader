/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var currencyValidation = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var supplierData, result, finalObject, dateRegex, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            supplierData = JSON.parse(data);
            result = {};
            finalObject = [];
            dateRegex = '/^\d{4}-\d{2}-\d{2}$/';
            request = supplierData.map(function (row) {
              return new Promise(function (resolve, reject) {

                /**
                 * @param row object
                 * @param row.source_currency string required
                 * @param row.target_currency string required
                 * @param row.valid_from string required
                 * @param row.valid_to string required
                 * @param row.rate number required
                 * @param row.source_system string
                 */

                if (!row.source_currency) {
                  result.errorID = row.source_currency;
                  result.errorField = 'source_currency';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (typeof row.source_currency !== 'string') {
                    result.errorID = row.source_currency;
                    result.errorField = 'source_currency';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                }

                if (!row.target_currency) {
                  result.errorID = row.source_currency;
                  result.errorField = 'target_currency';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (typeof row.target_currency !== 'string') {
                    result.errorID = row.source_currency;
                    result.errorField = 'target_currency';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                }

                if (!row.valid_from) {
                  result.errorID = row.source_currency;
                  result.errorField = 'valid_from';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {
                  if (typeof row.valid_from !== 'string') {
                    result.errorID = row.source_currency;
                    result.errorField = 'valid_from';
                    result.errorReason = 'Not a String';
                    reject(result);
                  } else if (!row.valid_from.match(dateRegex)) {
                    result.errorID = row.source_currency;
                    result.errorField = 'valid_from';
                    result.errorReason = 'Not in correct format of YYYY-mm-dd';
                    reject(result);
                  }
                }

                if (!row.valid_to) {
                  result.errorID = row.source_currency;
                  result.errorField = 'valid_to';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {
                  if (typeof row.valid_to !== 'string') {
                    result.errorID = row.source_currency;
                    result.errorField = 'valid_to';
                    result.errorReason = 'Not a String';
                    reject(result);
                  } else if (!row.valid_to.match(dateRegex)) {
                    result.errorID = row.source_currency;
                    result.errorField = 'valid_to';
                    result.errorReason = 'Not in correct format of YYYY-mm-dd';
                    reject(result);
                  }
                }

                if (!row.rate) {
                  result.errorID = row.source_currency;
                  result.errorField = 'rate';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (isNaN(row.rate)) {
                    result.errorID = row.source_currency;
                    result.errorField = 'rate';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                }

                if (row.source_system) {
                  if (typeof row.source_system !== 'string') {
                    result.errorID = row.source_currency;
                    result.errorField = 'source_system';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.source_system = '';
                }

                finalObject.push(row);
                resolve(row);
              });
            });
            _context.next = 7;
            return Promise.all(request);

          case 7:
            return _context.abrupt('return', _context.sent);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function currencyValidation(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  currencyValidation: currencyValidation
};
//# sourceMappingURL=currencyrates.js.map