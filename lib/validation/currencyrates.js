/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const currencyValidation = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];


  const dateRegex = '/^\d{4}-\d{2}-\d{2}$/';

  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
       * @param row object
       * @param row.source_currency string required
       * @param row.target_currency string required
       * @param row.valid_from string required
       * @param row.valid_to string required
       * @param row.rate number required
       * @param row.source_system string
       */


      if (!row.source_currency) {
        result.errorID = row.source_currency;
        result.errorField = 'source_currency';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.source_currency !== 'string') {
          result.errorID = row.source_currency;
          result.errorField = 'source_currency';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }

      if (!row.target_currency) {
        result.errorID = row.source_currency;
        result.errorField = 'target_currency';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.target_currency !== 'string') {
          result.errorID = row.source_currency;
          result.errorField = 'target_currency';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }

      if (!row.valid_from) {
        result.errorID = row.source_currency;
        result.errorField = 'valid_from';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {
        if (typeof row.valid_from !== 'string') {
          result.errorID = row.source_currency;
          result.errorField = 'valid_from';
          result.errorReason = 'Not a String';
          reject(result);
        } else if (!row.valid_from.match(dateRegex)) {
          result.errorID = row.source_currency;
          result.errorField = 'valid_from';
          result.errorReason = 'Not in correct format of YYYY-mm-dd';
          reject(result);
        }
      }


      if (!row.valid_to) {
        result.errorID = row.source_currency;
        result.errorField = 'valid_to';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {
        if (typeof row.valid_to !== 'string') {
          result.errorID = row.source_currency;
          result.errorField = 'valid_to';
          result.errorReason = 'Not a String';
          reject(result);
        } else if (!row.valid_to.match(dateRegex)) {
          result.errorID = row.source_currency;
          result.errorField = 'valid_to';
          result.errorReason = 'Not in correct format of YYYY-mm-dd';
          reject(result);
        }
      }


      if (!row.rate) {
        result.errorID = row.source_currency;
        result.errorField = 'rate';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (!isNaN(row.rate)) {
          result.errorID = row.source_currency;
          result.errorField = 'rate';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      }


      if (row.source_system) {
        if (typeof row.source_system !== 'string') {
          result.errorID = row.source_currency;
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

  return await Promise.all(request);
};

module.exports = {
  currencyValidation
};
