/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var validateCustomers = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var salesData, result, finalObject, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            salesData = JSON.parse(data);
            result = {};
            finalObject = [];
            request = salesData.map(function (row) {
              return new Promise(function (resolve, reject) {
                /**
                 * @param row object
                 * @param row.customer_id string required
                 * @param row.customer_name string
                 * @param row.customer_company string
                 * @param row.customer_email string
                 * @param row.customer_phone string
                 * @param row.customer_address string
                 * @param row.customer_zipcode string
                 * @param row.customer_city string
                 * @param row.customer_country string
                 * @param row.customer_group_id string
                 * @param row.customer_group_name string
                 * @param row.hierarchy_level_1 string
                 * @param row.hierarchy_level_2 string
                 * @param row.hierarchy_level_3 string
                 * @param row.hierarchy_level_4 string
                 * @param row.hierarchy_level_5 string
                 * @param row.custom_dimension_1 string
                 * @param row.custom_dimension_2 string
                 * @param row.custom_dimension_3 string
                 * @param row.custom_dimension_4 string
                 * @param row.custom_dimension_5 string
                 * @param row.account_number string
                 * @param row.source_system string
                 */

                if (!row.customer_id) {
                  result.errorID = row.customer_id;
                  result.errorField = 'customer_id';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (typeof row.customer_id !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'customer_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                }

                if (row.customer_name) {
                  if (typeof row.customer_name !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'customer_name';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.customer_name = '';
                }

                if (row.customer_company) {
                  if (typeof row.customer_company !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'customer_company';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.customer_company = '';
                }

                if (row.customer_email) {
                  if (typeof row.customer_email !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'customer_email';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.customer_email = '';
                }

                if (row.customer_address) {
                  if (typeof row.customer_address !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'customer_address';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.customer_address = '';
                }

                if (row.customer_zipcode) {
                  if (typeof row.customer_zipcode !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'customer_zipcode';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.customer_zipcode = '';
                }

                if (row.customer_city) {
                  if (typeof row.customer_city !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'customer_city';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.customer_city = '';
                }

                if (row.customer_country) {
                  if (typeof row.customer_country !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'customer_country';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.customer_country = '';
                }

                if (row.customer_group_id) {
                  if (typeof row.customer_group_id !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'customer_group_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.customer_group_id = '';
                }

                if (row.customer_group_name) {
                  if (typeof row.customer_group_name !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'customer_group_name';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.customer_group_name = '';
                }

                if (row.hierarchy_level_1) {
                  if (typeof row.hierarchy_level_1 !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'hierarchy_level_1';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.hierarchy_level_1 = '';
                }

                if (row.hierarchy_level_2) {
                  if (typeof row.hierarchy_level_2 !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'hierarchy_level_2';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.hierarchy_level_2 = '';
                }

                if (row.hierarchy_level_3) {
                  if (typeof row.hierarchy_level_3 !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'hierarchy_level_3';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.hierarchy_level_3 = '';
                }

                if (row.hierarchy_level_4) {
                  if (typeof row.hierarchy_level_4 !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'hierarchy_level_4';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.hierarchy_level_4 = '';
                }

                if (row.hierarchy_level_5) {
                  if (typeof row.hierarchy_level_5 !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'hierarchy_level_5';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.hierarchy_level_5 = '';
                }

                if (row.custom_dimension_1) {
                  if (typeof row.custom_dimension_1 !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'custom_dimension_1';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_dimension_1 = '';
                }

                if (row.custom_dimension_2) {
                  if (typeof row.custom_dimension_2 !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'custom_dimension_2';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_dimension_2 = '';
                }

                if (row.custom_dimension_3) {
                  if (typeof row.custom_dimension_3 !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'custom_dimension_3';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_dimension_3 = '';
                }

                if (row.custom_dimension_4) {
                  if (typeof row.custom_dimension_4 !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'custom_dimension_4';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_dimension_4 = '';
                }

                if (row.custom_dimension_5) {
                  if (typeof row.custom_dimension_5 !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'custom_dimension_5';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_dimension_5 = '';
                }

                if (row.account_number) {
                  if (typeof row.account_number !== 'string') {
                    result.errorID = row.customer_id;
                    result.errorField = 'account_number';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.account_number = '';
                }

                if (row.source_system) {
                  if (typeof row.source_system !== 'string') {
                    result.errorID = row.customer_id;
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

  return function validateCustomers(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  validateCustomers: validateCustomers
};
//# sourceMappingURL=customer.js.map