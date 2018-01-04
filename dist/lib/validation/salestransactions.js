/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var validateSalesTransactions = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var salesData, result, finalObject, dateRegex, timeRegex, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            salesData = JSON.parse(data);
            result = {};
            finalObject = [];
            dateRegex = /^\d{4}-\d{2}-\d{2}$/;
            timeRegex = /^\d{2}:\d{2}:\d{2}$/;
            request = salesData.map(function (row) {
              return new Promise(function (resolve, reject) {

                /**
                 * @param row object
                 * @param row.transaction_id string required
                 * @param row.line_item_id string required
                 * @param row.customer_id string
                 * @param row.sales_date string required (yyyy-mm-dd)
                 * @param row.sales_time string required (HH:mm:ss)
                 * @param row.product_id string required
                 * @param row.product_quantity number required
                 * @param row.product_unit_price number required
                 * @param row.sales_value number required
                 * @param row.sales_value_wo_vat number
                 * @param row.rebate number
                 * @param row.rebate_wo_vat number
                 * @param row.sales_currency string
                 * @param row.payment_method string
                 * @param row.supplier_id string
                 * @param row.purchase_price number
                 * @param row.purchase_price_wo_vat number
                 * @param row.purchase_currency string
                 * @param row.piece_good boolean
                 * @param row.organisation_id string
                 * @param row.department_id string
                 * @param row.salesperson_id string
                 * @param row.campaign_id string
                 * @param row.cancel_id string
                 * @param row.delivery_date string (yyyy-mm-dd)
                 * @param row.delivery_time string (HH:mm:ss)
                 * @param row.order_date string (yyyy-mm-dd)
                 * @param row.order_time string (HH:mm:ss)
                 * @param row.invoice_date string (yyyy-mm-dd)
                 * @param row.invoice_time string (HH:mm:ss)
                 * @param row.register_id string
                 * @param row.rebate_code_id string
                 * @param row.custom_field_1 string
                 * @param row.custom_field_2 string
                 * @param row.custom_field_3 string
                 * @param row.custom_field_4 string
                 * @param row.custom_field_5 string
                 * @param row.delivery_customer_id string
                 * @param row.source_system string
                  */

                if (!row.transaction_id) {
                  result.errorID = row.transaction_id;
                  result.errorField = 'transaction_id';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (typeof row.transaction_id !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'transaction_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                }

                if (!row.line_item_id) {
                  result.errorID = '';
                  result.errorField = 'line_item_id';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (typeof row.line_item_id !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'line_item_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                }

                if (row.customer_id) {
                  if (typeof row.customer_id !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'customer_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.customer_id = '';
                }

                if (!row.sales_date) {
                  result.errorID = row.transaction_id;
                  result.errorField = 'sales_date';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {
                  if (typeof row.sales_date !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'sales_date';
                    result.errorReason = 'Not a String';
                    reject(result);
                  } else if (!row.sales_date.match(dateRegex)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'sales_date';
                    result.errorReason = 'Not in correct format of YYYY-mm-dd';
                    reject(result);
                  }
                }

                if (!row.sales_time) {
                  result.errorID = row.transaction_id;
                  result.errorField = 'sales_time';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {
                  if (typeof row.sales_time !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'sales_time';
                    result.errorReason = 'Not a String';
                    reject(result);
                  } else if (!row.sales_time.match(timeRegex)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'sales_time';
                    result.errorReason = 'Not in correct format of HH:mm:ss';
                    reject(result);
                  }
                }

                if (!row.product_id) {
                  result.errorID = row.transaction_id;
                  result.errorField = 'product_id';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (typeof row.product_id !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'product_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                }

                if (!row.product_quantity && row.product_quantity !== 0) {
                  result.errorID = row.transaction_id;
                  result.errorField = 'product_quantity';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (isNaN(row.product_quantity)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'product_id';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                }

                if (!row.product_unit_price && row.product_unit_price !== 0) {
                  result.errorID = row.transaction_id;
                  result.errorField = 'product_unit_price';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (isNaN(row.product_unit_price)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'product_unit_price';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                }

                if (!row.sales_value && row.sales_value !== 0) {
                  result.errorID = row.transaction_id;
                  result.errorField = 'sales_value';
                  result.errorReason = 'Missing Required Property';
                  reject(result);
                } else {

                  if (isNaN(row.sales_value)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'sales_value';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                }

                if (row.sales_value_wo_vat) {
                  if (isNaN(row.sales_value_wo_vat)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'sales_value_wo_vat';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                } else {
                  row.sales_value_wo_vat = 0;
                }

                if (row.rebate) {
                  if (isNaN(row.rebate)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'rebate';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                } else {
                  row.rebate = 0;
                }

                if (row.rebate_wo_vat) {
                  if (isNaN(row.rebate_wo_vat)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'rebate_wo_vat';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                } else {
                  row.rebate_wo_vat = 0;
                }

                if (row.sales_currency) {
                  if (typeof row.sales_currency !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'sales_currency';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.sales_currency = '';
                }

                if (row.payment_method) {
                  if (typeof row.payment_method !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'payment_method';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.payment_method = '';
                }

                if (row.supplier_id) {
                  if (typeof row.supplier_id !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'supplier_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.supplier_id = '';
                }

                if (row.purchase_price) {
                  if (isNaN(row.purchase_price)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'purchase_price';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                } else {
                  row.purchase_price = 0;
                }

                if (row.purchase_price_wo_vat) {
                  if (isNaN(row.purchase_price_wo_vat)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'purchase_price_wo_vat';
                    result.errorReason = 'Not a Number!';
                    reject(result);
                  }
                } else {
                  row.purchase_price_wo_vat = 0;
                }

                if (row.purchase_currency) {
                  if (typeof row.purchase_currency !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'purchase_currency';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.purchase_currency = '';
                }

                if (row.piece_good) {
                  if (typeof row.piece_good !== 'boolean') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'purchase_currency';
                    result.errorReason = 'Not a Boolean';
                    reject(result);
                  }
                } else {
                  row.purchase_currency = false;
                }

                if (row.organisation_id) {
                  if (typeof row.organisation_id !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'organisation_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.organisation_id = '';
                }

                if (row.department_id) {
                  if (typeof row.department_id !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'department_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.department_id = '';
                }

                if (row.salesperson_id) {
                  if (typeof row.salesperson_id !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'salesperson_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.salesperson_id = '';
                }

                if (row.campaign_id) {
                  if (typeof row.campaign_id !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'campaign_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.campaign_id = '';
                }

                if (row.cancel_id) {
                  if (typeof row.cancel_id !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'cancel_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.cancel_id = '';
                }

                if (row.delivery_date) {
                  if (!row.delivery_date.match(dateRegex)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'delivery_date';
                    result.errorReason = 'Not in correct format of YYYY-mm-dd';
                    reject(result);
                  }
                } else {
                  result.errorID = row.transaction_id;
                  result.errorField = 'delivery_date';
                  result.errorReason = 'Requires a Date';
                  reject(result);
                }

                if (row.delivery_time) {
                  if (!row.delivery_time.match(timeRegex)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'delivery_time';
                    result.errorReason = 'Not in correct format of HH:mm:ss';
                    reject(result);
                  }
                } else {
                  result.errorID = row.transaction_id;
                  result.errorField = 'delivery_time';
                  result.errorReason = 'Requires a Time';
                  reject(result);
                }

                if (row.order_date) {
                  if (!row.order_date.match(dateRegex)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'order_date';
                    result.errorReason = 'Not in correct format of YYYY-mm-dd';
                    reject(result);
                  }
                } else {
                  result.errorID = row.transaction_id;
                  result.errorField = 'order_date';
                  result.errorReason = 'Requires a Date';
                  reject(result);
                }

                if (row.order_time) {
                  if (!row.order_time.match(timeRegex)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'order_time';
                    result.errorReason = 'Not in correct format of HH:mm:ss';
                    reject(result);
                  }
                } else {
                  result.errorID = row.transaction_id;
                  result.errorField = 'order_time';
                  result.errorReason = 'Requires a Time';
                  reject(result);
                }

                if (row.invoice_date) {
                  if (!row.invoice_date.match(dateRegex)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'invoice_date';
                    result.errorReason = 'Not in correct format of YYYY-mm-dd';
                    reject(result);
                  }
                } else {
                  result.errorID = row.transaction_id;
                  result.errorField = 'invoice_date';
                  result.errorReason = 'Requires a Date';
                  reject(result);
                }

                if (row.invoice_time) {
                  if (!row.invoice_time.match(timeRegex)) {
                    result.errorID = row.transaction_id;
                    result.errorField = 'invoice_time';
                    result.errorReason = 'Not in correct format of HH:mm:ss';
                    reject(result);
                  }
                } else {
                  result.errorID = row.invoice_time;
                  result.errorField = 'order_time';
                  result.errorReason = 'Requires a Time';
                  reject(result);
                }

                if (row.register_id) {
                  if (typeof row.register_id !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'register_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.register_id = '';
                }

                if (row.rebate_code_id) {
                  if (typeof row.rebate_code_id !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'rebate_code_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.rebate_code_id = '';
                }

                if (row.custom_field_1) {
                  if (typeof row.custom_field_1 !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'custom_field_1';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_field_1 = '';
                }

                if (row.custom_field_2) {
                  if (typeof row.custom_field_2 !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'custom_field_2';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_field_2 = '';
                }
                if (row.custom_field_3) {
                  if (typeof row.custom_field_3 !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'custom_field_3';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_field_3 = '';
                }
                if (row.custom_field_4) {
                  if (typeof row.custom_field_4 !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'custom_field_4';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_field_4 = '';
                }
                if (row.custom_field_5) {
                  if (typeof row.custom_field_5 !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'custom_field_1';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.custom_field_5 = '';
                }

                if (row.delivery_customer_id) {
                  if (typeof row.delivery_customer_id !== 'string') {
                    result.errorID = row.transaction_id;
                    result.errorField = 'delivery_customer_id';
                    result.errorReason = 'Not a String';
                    reject(result);
                  }
                } else {
                  row.delivery_customer_id = '';
                }

                if (row.source_system) {
                  if (typeof row.source_system !== 'string') {
                    result.errorID = row.transaction_id;
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

  return function validateSalesTransactions(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  validateSalesTransactions: validateSalesTransactions
};
//# sourceMappingURL=salestransactions.js.map