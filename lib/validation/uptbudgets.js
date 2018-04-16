/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateUPTBudgets = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];

  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
         * @param row object
         * @param row.year number required
         * @param row.month number required
         * @param row.day number
         * @param row.hour number
         * @param row.organisation_id string required
         * @param row.basket_size_with_returns number required
         */

      if (!row.year) {
        result.errorID = '';
        result.errorField = 'year';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {
        if (isNaN(row.year)) {
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
        if (isNaN(row.month)) {
          result.errorID = '';
          result.errorField = 'month';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      }


      if (row.day) {
        if (isNaN(row.day)) {
          result.errorID = row.year + ' ' + row.month;
          result.errorField = 'day';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.day = 0;
      }


      if (row.hour) {
        if (isNaN(row.hour)) {
          result.errorID = row.year + ' ' + row.month;
          result.errorField = 'hour';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.hour = 0;
      }

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
        } else {
          row.dimensions = { 'store': row.organisation_id };
        }
      }

      if (!row.basket_size_with_returns && row.basket_size_with_returns !== 0) {
        result.errorID = '';
        result.errorField = 'basket_size';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {
        if (isNaN(row.basket_size_with_returns)) {
          result.errorID = '';
          result.errorField = 'basket size';
          result.errorReason = 'Not a Number!';
          reject(result);
        } else {
          row.metrics = { 'basket_size_with_returns': row.basket_size_with_returns };
        }
      }

      finalObject.push(row);
      resolve(row);
    });
  });


  return await Promise.all(request);

}
;

module.exports = {
  validateUPTBudgets
};

