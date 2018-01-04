/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateSalesPerson = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];

  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
       * @param row object
       * @param row.salesperson_id string required
       * @param row.salesperson_name string required
       * @param row.salesperson_email string
       * @param row.salesperson_phone string
       * @param row.salesperson_employee_id
       * @param row.source_system string
       */

      if (!row.salesperson_id) {
        result.errorID = row.salesperson_id;
        result.errorField = 'salesperson_id';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.salesperson_id !== 'string') {
          result.errorID = row.salesperson_id;
          result.errorField = 'salesperson_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }

      if (!row.salesperson_name) {
        result.errorID = row.salesperson_id;
        result.errorField = 'salesperson_name';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.salesperson_name !== 'string') {
          result.errorID = row.salesperson_id;
          result.errorField = 'salesperson_name';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }


      if (row.salesperson_email) {
        if (typeof row.salesperson_email !== 'string') {
          result.errorID = row.salesperson_id;
          result.errorField = 'salesperson_email';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.salesperson_email = '';
      }

      if (row.salesperson_phone) {
        if (typeof row.salesperson_phone !== 'string') {
          result.errorID = row.salesperson_id;
          result.errorField = 'salesperson_phone';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.salesperson_phone = '';
      }

      if (row.employee_id) {
        if (typeof row.employee_id !== 'string') {
          result.errorID = row.salesperson_id;
          result.errorField = 'employee_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }

      if (row.source_system) {
        if (typeof row.source_system !== 'string') {
          result.errorID = row.salesperson_id;
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
  validateSalesPerson
};
