/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var validateBudgets = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var supplierData, result, finalObject, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            supplierData = JSON.parse(data);
            result = {};
            finalObject = [];
            request = supplierData.map(function (row) {
              return new Promise(function (resolve, reject) {

                /**
                   * @param row object
                   * @param row.year number required
                   * @param row.month number required
                   * @param row.day number
                   * @param row.hour number
                   * @param row.dimensions object
                   * @param row.metrics object
                   */

                if (!row.year) {
                  result.errorID = '';
                  result.errorField = 'year';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {
                  if (!isNaN(row.year)) {
                    result.errorID = '';
                    result.errorField = 'year';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                }

                if (!row.month) {
                  result.errorID = '';
                  result.errorField = 'month';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {
                  if (!isNaN(row.month)) {
                    result.errorID = '';
                    result.errorField = 'month';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                }

                if (row.day) {
                  if (!isNaN(row.day)) {
                    result.errorID = row.year + ' ' + row.month;
                    result.errorField = 'day';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                } else {
                  row.day = 0;
                }

                if (row.hour) {
                  if (!isNaN(row.hour)) {
                    result.errorID = row.year + ' ' + row.month;
                    result.errorField = 'hour';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                } else {
                  row.hour = 0;
                }

                if (row.dimensions) {
                  if (_typeof(row.dimensions) !== 'object') {
                    result.errorID = row.year + ' ' + row.month;
                    result.errorField = 'dimensions';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.dimensions = {};
                }

                if (row.metrics) {
                  if (_typeof(row.metrics) !== 'object') {
                    result.errorID = row.year + ' ' + row.month;
                    result.errorField = 'metrics';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.metrics = {};
                }

                finalObject.push(row);
                resolve(row);
              });
            });
            _context.next = 6;
            return Promise.all(request);

          case 6:
            return _context.abrupt('return', _context.sent);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function validateBudgets(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  validateBudgets: validateBudgets
};
//# sourceMappingURL=budgets.js.map