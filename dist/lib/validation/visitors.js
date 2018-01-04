/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var validateVisitors = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var supplierData, result, finalObject, dateRegex, timeRegex, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            supplierData = JSON.parse(data);
            result = {};
            finalObject = [];
            dateRegex = '/^\d{4}-\d{2}-\d{2}$/';
            timeRegex = '/^\d{2}:\d{2}:\d{2}$/';
            request = supplierData.map(function (row) {
              return new Promise(function (resolve, reject) {

                /**
                 * @param row object
                 * @param row.organisation_id string required
                 * @param row.department_id string
                 * @param row.counter_id string
                 * @param row.visitor_id string
                 * @param row.date string required (yyyy-mm-dd)
                 * @param row.time string required (hh:mm:ss)
                 * @param row.visit_type string
                 * @param row.vehicle_type string
                 * @param row.visitors number required
                 * @param row.source_system string
                 */

                if (!row.organisation_id) {
                  result.errorID = '';
                  result.errorField = 'organisation_id';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (typeof row.organisation_id !== 'string') {
                    result.errorID = '';
                    result.errorField = 'organisation_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                }

                if (row.counter_id) {
                  if (typeof row.source_system !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'counter_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.counter_id = '';
                }

                if (row.visitor_id) {
                  if (typeof row.source_system !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'visitor_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.visitor_id = '';
                }

                if (!row.date) {
                  result.errorID = row.organisation_id;
                  result.errorField = 'date';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {
                  if (typeof row.date !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'date';
                    result.errorReason = 'Not a String';
                    reject(result);
                  } else if (!row.date.match(dateRegex)) {
                    result.errorID = row.organisation_id;
                    result.errorField = 'start_date';
                    result.errorReason = 'Not in correct format of YYYY-mm-dd';
                    reject(result);
                  }
                }

                if (!row.time) {
                  result.errorID = row.organisation_id;
                  result.errorField = 'time';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {
                  if (typeof row.time !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'time';
                    result.errorReason = 'Not a String';
                    reject(result);
                  } else if (!row.time.match(timeRegex)) {
                    result.errorID = row.organisation_id;
                    result.errorField = 'time';
                    result.errorReason = 'Not in correct format of hh:mm:ss';
                    result.givenValue = row.time;
                    reject(result);
                  }
                }

                if (row.visit_type) {
                  if (typeof row.visit_type !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'visit_type';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.visit_type = '';
                }

                if (row.vehicle_type) {
                  if (typeof row.vehicle_type !== 'string') {
                    result.errorID = row.organisation_id;
                    result.errorField = 'vehicle_type';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.vehicle_type = '';
                }

                if (!row.visitors) {
                  result.errorID = row.organisation_id;
                  result.errorField = 'visitors';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (isNaN(row.visitors)) {
                    result.errorID = row.organisation_id;
                    result.errorField = 'visitors';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
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
            _context.next = 8;
            return Promise.all(request);

          case 8:
            return _context.abrupt('return', _context.sent);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function validateVisitors(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  validateVisitors: validateVisitors
};
//# sourceMappingURL=visitors.js.map