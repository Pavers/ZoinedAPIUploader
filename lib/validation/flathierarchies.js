/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateFlatHierarchies = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];

  // Required key
  // product
  // organisation
  // customer
  // channel
  // area


  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

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

        switch (row.hierarchy_key) {
        case 'product':
        case 'organisation':
        case 'customer':
        case 'channel':
        case 'area':
          break;
        default:
          result.errorField = 'hierarchy_key';
          result.errorReason = 'Hierarchy key must be one of product, organisation, customer, channel or area';
          reject(result);
          break;
        }

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

  return await Promise.all(request);
};

module.exports = {
  validateFlatHierarchies
};

