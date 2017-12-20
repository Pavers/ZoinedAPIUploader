/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var validateProductHierachies = function () {
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
                 * @param row.category_id string required
                 * @param row.category_name string required
                 * @param row.parent_id string
                 * @param row.source_system string
                 */

                if (!row.category_id) {
                  result.errorID = row.category_id;
                  result.errorField = 'category_id';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (typeof row.category_id !== 'string') {
                    result.errorID = row.category_id;
                    result.errorField = 'category_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                }

                if (!row.category_name) {
                  result.errorID = row.category_id;
                  result.errorField = 'category_name';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (typeof row.category_name !== 'string') {
                    result.errorID = row.category_id;
                    result.errorField = 'category_name';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                }

                if (row.parent_id) {
                  if (typeof row.currency !== 'string') {
                    result.errorID = row.category_id;
                    result.errorField = 'parent_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.parent_id = '';
                }

                if (row.source_system) {
                  if (typeof row.source_system !== 'string') {
                    result.errorID = row.category_id;
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

  return function validateProductHierachies(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  validateProductHierachies: validateProductHierachies
};
//# sourceMappingURL=producthierachies.js.map