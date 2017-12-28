/* eslint-disable valid-jsdoc,no-else-return */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var validateSupplier = function () {
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
                 * @param row.supplier_id string required
                 * @param row.supplier_name string required
                 * @param row.supplier_email string
                 * @param row.supplier_phone string
                 * @param row.supplier_address string
                 * @param row.supplier_city string
                 * @param row.supplier_zipcode string
                 * @param row.supplier_country string
                 * @param row.source_system string
                 */

                if (!row.supplier_id) {
                  result.errorID = '';
                  result.errorField = 'supplier_id';
                  result.errorReason = 'Missing Required Property';
                  return reject(result);
                } else {

                  if (typeof row.supplier_id !== 'string') {
                    result.errorID = '';
                    result.errorField = 'supplier_id';
                    result.errorReason = 'Not a String';
                    return reject(result);
                  }
                }

                if (!row.supplier_name) {
                  result.errorID = row.supplier_id;
                  result.errorField = 'supplier_name';
                  result.errorReason = 'Missing Required Property';
                  return reject(result);
                } else {

                  if (typeof row.supplier_name !== 'string') {
                    result.errorID = row.supplier_id;
                    result.errorField = 'supplier_name';
                    result.errorReason = 'Not a String';
                    return reject(result);
                  }
                }

                if (row.supplier_email) {
                  if (typeof row.supplier_email !== 'string') {
                    result.errorID = row.supplier_id;
                    result.errorField = 'supplier_email';
                    result.errorReason = 'Not a String';
                    return reject(result);
                  }
                } else {
                  row.supplier_email = '';
                }

                if (row.supplier_phone) {
                  if (typeof row.supplier_phone !== 'string') {
                    result.errorID = row.supplier_id;
                    result.errorField = 'supplier_phone';
                    result.errorReason = 'Not a String';
                    return reject(result);
                  }
                } else {
                  row.supplier_phone = '';
                }

                if (row.supplier_address) {
                  if (typeof row.supplier_address !== 'string') {
                    result.errorID = row.supplier_id;
                    result.errorField = 'supplier_address';
                    result.errorReason = 'Not a String';
                    return reject(result);
                  }
                } else {
                  row.supplier_address = '';
                }

                if (row.supplier_city) {
                  if (typeof row.supplier_city !== 'string') {
                    result.errorID = row.supplier_id;
                    result.errorField = 'supplier_city';
                    result.errorReason = 'Not a String';
                    return reject(result);
                  }
                } else {
                  row.supplier_city = '';
                }

                if (row.supplier_zipcode) {
                  if (typeof row.supplier_zipcode !== 'string') {
                    result.errorID = row.supplier_id;
                    result.errorField = 'supplier_zipcode';
                    result.errorReason = 'Not a String';
                    return reject(result);
                  }
                } else {
                  row.supplier_zipcode = '';
                }

                if (row.supplier_country) {
                  if (typeof row.supplier_country !== 'string') {
                    result.errorID = row.supplier_id;
                    result.errorField = 'supplier_country';
                    result.errorReason = 'Not a String';
                    return reject(result);
                  }
                } else {
                  row.supplier_country = '';
                }

                if (row.source_system) {
                  if (typeof row.source_system !== 'string') {
                    result.errorID = row.supplier_id;
                    result.errorField = 'source_system';
                    result.errorReason = 'Not a String';
                    return reject(result);
                  }
                } else {
                  row.source_system = '';
                }

                finalObject.push(row);
                return resolve(row);
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

  return function validateSupplier(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  validateSupplier: validateSupplier
};
//# sourceMappingURL=supplier.js.map