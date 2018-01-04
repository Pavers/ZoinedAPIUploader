/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var validateFlatHierarchies = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var supplierData, result, finalObject, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            supplierData = JSON.parse(data);
            result = {};
            finalObject = [];

            // Required key
            // product
            // organisation
            // customer
            // channel
            // area


            request = supplierData.map(function (row) {
              return new Promise(function (resolve, reject) {

                /**
                 * @param row object
                 * @param row.hierarchy_key string required (see required key)
                 * @param row.entity_id string required
                 * @param row.level1 string required
                 * @param row.level2 string
                 * @param row.level3 string
                 * @param row.level4 string
                 * @param row.level5 string
                 * @param row.source_system string
                 */

                if (!row.hierarchy_key) {
                  result.errorID = row.entity_id;
                  result.errorField = 'hierarchy_key';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (row.hierarchy_key !== 'product' && row.hierarchy_key !== 'organisation' && row.hierarchy_key !== 'customer' && row.hierarchy_key !== 'channel' && row.hierarchy_key !== 'area') {
                    result.errorID = row.entity_id;
                  }
                  result.errorField = 'hierarchy_key';
                  result.errorReason = 'Hierarchy key must be one of product, organisation, customer, channel or area';
                  reject(result);
                }

                if (!row.level1) {
                  result.errorID = row.entity_id;
                  result.errorField = 'level1';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (typeof row.level1 !== 'string') {
                    result.errorID = row.entity_id;
                    result.errorField = 'level1';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                }

                if (row.level2) {
                  if (typeof row.level2 !== 'string') {
                    result.errorID = row.entity_id;
                    result.errorField = 'level2';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.level2 = '';
                }

                if (row.level3) {
                  if (typeof row.level3 !== 'string') {
                    result.errorID = row.entity_id;
                    result.errorField = 'level3';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.level3 = '';
                }

                if (row.level4) {
                  if (typeof row.level4 !== 'string') {
                    result.errorID = row.entity_id;
                    result.errorField = 'level4';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.level4 = '';
                }

                if (row.level5) {
                  if (typeof row.level5 !== 'string') {
                    result.errorID = row.entity_id;
                    result.errorField = 'level5';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.level5 = '';
                }

                if (row.source_system) {
                  if (typeof row.level5 !== 'string') {
                    result.errorID = row.entity_id;
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

  return function validateFlatHierarchies(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  validateFlatHierarchies: validateFlatHierarchies
};
//# sourceMappingURL=flathierarchies.js.map