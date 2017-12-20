/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateProductHierachies = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];

  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

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

  return await Promise.all(request);
};

module.exports = {
  validateProductHierachies
};

