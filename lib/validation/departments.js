/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateDepartment = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];

  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
       * @param row object
       * @param row.department_id string required
       * @param row.name string required
       * @param row.floor_area number
       * @param row.source_system string
       */

      if (!row.department_id) {
        result.errorID = '';
        result.errorField = 'department_id';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.department_id !== 'string') {
          result.errorID = '';
          result.errorField = 'department_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }


      if (!row.name) {
        result.errorID = row.department_id;
        result.errorField = 'name';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.name !== 'string') {
          result.errorID = row.department_id;
          result.errorField = 'name';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }

      if (row.floor_area) {
        if (isNaN(row.floor_area)) {
          result.errorID = row.department_id;
          result.errorField = 'floor_area';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.floor_area = 0;
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

  return await Promise.all(request);

};

module.exports = {
  validateDepartment
};

