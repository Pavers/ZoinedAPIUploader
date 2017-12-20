/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var validateCampaign = function () {
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
                 * @param row.campaign_id string required
                 * @param row.campaign_name string required
                 * @param row.start_date string required (yyyy-mm-dd)
                 * @param row.end_date string required (yyyy-mm-dd)
                 * @param row.organisation_id string
                 * @param row.source_system string
                 */

                if (!row.campaign_id) {
                  result.errorID = '';
                  result.errorField = 'campaign_id';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (typeof row.campaign_id !== 'string') {
                    result.errorID = '';
                    result.errorField = 'campaign_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                }

                if (!row.campaign_name) {
                  result.errorID = row.campaign_id;
                  result.errorField = 'campaign_name';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (typeof row.campaign_name !== 'string') {
                    result.errorID = row.campaign_id;
                    result.errorField = 'campaign_name';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                }

                if (!row.start_date) {
                  result.errorID = row.campaign_id;
                  result.errorField = 'start_date';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {
                  if (typeof row.start_date !== 'string') {
                    result.errorID = row.campaign_id;
                    result.errorField = 'start_date';
                    result.errorReason = 'Not a String';
                    reject(result);
                  } else if (!row.start_date.match(dateRegex)) {
                    result.errorID = row.campaign_id;
                    result.errorField = 'start_date';
                    result.errorReason = 'Not in correct format of YYYY-mm-dd';
                    reject(result);
                  }
                }

                if (!row.end_date) {
                  result.errorID = row.campaign_id;
                  result.errorField = 'end_date';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {
                  if (typeof row.end_date !== 'string') {
                    result.errorID = row.campaign_id;
                    result.errorField = 'end_date';
                    result.errorReason = 'Not a String';
                    reject(result);
                  } else if (!row.end_date.match(dateRegex)) {
                    result.errorID = row.campaign_id;
                    result.errorField = 'end_date';
                    result.errorReason = 'Not in correct format of YYYY-mm-dd';
                    reject(result);
                  }
                }

                if (row.organisation_id) {
                  if (typeof row.organisation_id !== 'string') {
                    result.errorID = row.campaign_id;
                    result.errorField = 'organisation_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.organisation_id = '';
                }

                if (row.source_system) {
                  if (typeof row.source_system !== 'string') {
                    result.errorID = row.supplier_id;
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

  return function validateCampaign(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  validateCampaign: validateCampaign
};
//# sourceMappingURL=campaigns.js.map