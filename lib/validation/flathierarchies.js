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
       * @param row.level_1 string required
       * @param row.level_2 string
       * @param row.level_3 string
       * @param row.level_4 string
       * @param row.level_5 string
       * @param row.source_system string
       */


      if (!row.hierarchy_key) {
        result.errorID = row.entity_id;
        result.errorField = 'hierarchy_key';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (row.hierarchy_key !== 'product' ||
            row.hierarchy_key !== 'organisation' ||
            row.hierarchy_key !== 'customer' ||
            row.hierarchy_key !== 'channel' ||
            row.hierarchy_key !== 'area') {
          result.errorID = row.entity_id;
        }
        result.errorField = 'hierarchy_key';
        result.errorReason = 'Hierarchy key must be one of product, organisation, customer, channel or area';
        reject(result);
      }

      if (!row.level_1) {
        result.errorID = row.entity_id;
        result.errorField = 'level_1';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.level_1 !== 'string') {
          result.errorID = row.entity_id;
          result.errorField = 'level_1';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }


      if (row.level_2) {
        if (typeof row.level_2 !== 'string') {
          result.errorID = row.entity_id;
          result.errorField = 'level_2';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.level_2 = '';
      }

      if (row.level_3) {
        if (typeof row.level_3 !== 'string') {
          result.errorID = row.entity_id;
          result.errorField = 'level_3';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.level_3 = '';
      }


      if (row.level_4) {
        if (typeof row.level_4 !== 'string') {
          result.errorID = row.entity_id;
          result.errorField = 'level_4';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.level_4 = '';
      }


      if (row.level_5) {
        if (typeof row.level_5 !== 'string') {
          result.errorID = row.entity_id;
          result.errorField = 'level_5';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.level_5 = '';
      }


      if (row.source_system) {
        if (typeof row.level_5 !== 'string') {
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

