/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateBudgets = async(data) => {

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
         * @param row.dimensions object
         * @param row.metrics object
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

      if (row.dimensions) {
        if (typeof row.dimensions !== 'object') {
          result.errorID = row.year + ' ' + row.month;
          result.errorField = 'dimensions';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.dimensions = {};
      }

      if (row.metrics) {
        if (typeof row.metrics !== 'object') {
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


  return await Promise.all(request);

}
;

module.exports = {
  validateBudgets
};

