/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateCampaignProducts = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];

  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
       * @param row object
       * @param row.campaign_id string required
       * @param row.category_id string
       * @param row.product_id string required
       * @param row.source_system string
       */

      if (!row.campaign_id) {
        result.errorID = '';
        result.errorField = 'campaign_id';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.campaign_id !== 'string') {
          result.errorID = '';
          result.errorField = 'campaign_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }


      if (!row.product_id) {
        result.errorID = row.campaign_id;
        result.errorField = 'product_id';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.product_id !== 'string') {
          result.errorID = row.campaign_id;
          result.errorField = 'product_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }


      if (row.category_id) {
        if (typeof row.organisation_id !== 'string') {
          result.errorID = row.campaign_id;
          result.errorField = 'category_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.category_id = '';
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
  validateCampaignProducts
};

