/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateRebateCodes = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];

  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
       * @param row object
       * @param row.rebate_code_id string required
       * @param row.rebate_code_name string required
       * @param row.source_system string
       */


      if (!row.rebate_code_id) {
        result.errorID = row.rebate_code_id;
        result.errorField = 'rebate_code_id';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.rebate_code_id !== 'string') {
          result.errorID = row.rebate_code_id;
          result.errorField = 'rebate_code_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }


      if (!row.rebate_code_name) {
        result.errorID = row.rebate_code_id;
        result.errorField = 'rebate_code_name';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {
        if (typeof row.rebate_code_name !== 'string') {
          console.log(typeof row.rebate_code_name);
          result.errorID = row.rebate_code_id;
          result.errorField = 'rebate_code_name';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }
      if (row.source_system) {
        if (typeof row.source_system !== 'string') {
          result.errorID = row.rebate_code_name;
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
  validateRebateCodes
};

