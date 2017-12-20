/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var validateOrganisations = function () {
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
                 * @param row.organisation_id string required
                 * @param row.organisation_name string required
                 * @param row.street_address string
                 * @param row.city string
                 * @param row.post_code string
                 * @param row.state string
                 * @param row.country string
                 * @param row.area string
                 * @param row.latitude number
                 * @param row.longitude number
                 * @param row.channel number
                 * @param row.organisation_type number
                 * @param row.custom_dimension_1 string
                 * @param row.custom_dimension_2 string
                 * @param row.custom_dimension_3 string
                 * @param row.custom_dimension_4 string
                 * @param row.custom_dimension_5 string
                 * @param row.source_system string
                 */

                if (!row.organisation_id) {
                  result.errorID = row.organisation_id;
                  result.errorField = 'organisation_id';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (typeof row.organisation_id !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'organisation_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                }

                if (!row.organisation_name) {
                  result.errorID = row.organisation_id;
                  result.errorField = 'organisation_name';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (typeof row.organisation_name !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'organisation_name';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                }

                if (row.street_address) {
                  if (typeof row.street_address !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'street_address';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.street_address = '';
                }

                if (row.city) {
                  if (typeof row.city !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'city';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.city = '';
                }

                if (row.post_code) {
                  if (typeof row.post_code !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'post_code';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.post_code = '';
                }

                if (row.state) {
                  if (typeof row.state !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'state';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.state = '';
                }

                if (row.country) {
                  if (typeof row.country !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'country';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.country = '';
                }

                if (row.area) {
                  if (typeof row.area !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'area';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.area = '';
                }

                if (row.latitude) {
                  if (!isNaN(row.latitude)) {
                    result.errorID = row.organisation_id;
                    result.errorField = 'latitude';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                } else {
                  row.latitude = 0;
                }

                if (row.longitude) {
                  if (!isNaN(row.longitude)) {
                    result.errorID = row.organisation_id;
                    result.errorField = 'longitude';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                } else {
                  row.longitude = 0;
                }

                if (row.channel) {
                  if (typeof row.channel !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'channel';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.channel = '';
                }

                if (row.organisation_type) {
                  if (typeof row.organisation_type !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'organisation_type';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.organisation_type = '';
                }

                if (row.custom_dimension_1) {
                  if (typeof row.custom_dimension_1 !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'custom_dimension_1';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_dimension_1 = '';
                }

                if (row.custom_dimension_2) {
                  if (typeof row.custom_dimension_2 !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'custom_dimension_2';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_dimension_2 = '';
                }

                if (row.custom_dimension_3) {
                  if (typeof row.custom_dimension_3 !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'custom_dimension_3';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_dimension_3 = '';
                }

                if (row.custom_dimension_4) {
                  if (typeof row.custom_dimension_4 !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'custom_dimension_4';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_dimension_4 = '';
                }

                if (row.custom_dimension_5) {
                  if (typeof row.custom_dimension_5 !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'custom_dimension_5';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_dimension_5 = '';
                }

                if (row.source_system) {
                  if (typeof row.source_system !== 'string') {
                    result.errorID = row.organisation_id;
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

  return function validateOrganisations(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  validateOrganisations: validateOrganisations
};
//# sourceMappingURL=organisations.js.map