/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateIDMapping = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];

  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
       * @param row object
       * @param row.source_system_id string
       * @param row.master_id string
       * @param row.entity_type string required
       * @param row.context string required
       * @param row.source_system string
       */


      if (row.source_system_id) {
        if (typeof row.source_system !== 'string') {
          result.errorID = row.source_system_id;
          result.errorField = 'source_system_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.source_system_id = '';
      }

      if (row.master_id) {
        if (typeof row.source_system !== 'string') {
          result.errorID = row.source_system_id;
          result.errorField = 'master_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.master_id = '';
      }


      if (!row.entity_id) {
        result.errorID = row.source_system_id;
        result.errorField = 'entity_id';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.entity_id !== 'string') {
          result.errorID = row.source_system_id;
          result.errorField = 'entity_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }


      if (!row.context) {
        result.errorID = row.source_system_id;
        result.errorField = 'context';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.context !== 'string') {
          result.errorID = row.source_system_id;
          result.errorField = 'context';
          result.errorReason = 'Not a String';
          reject(result);
        }
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
  validateIDMapping
};

