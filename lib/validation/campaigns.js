/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateCampaign = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];

  const dateRegex = '/^\d{4}-\d{2}-\d{2}$/';

  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
       * @param row object
       * @param row.campaign_id string required
       * @param row.campaign_name string required
       * @param row.start_date string required (yyyy-mm-dd)
       * @param row.end_date string required (yyyy-mm-dd)
       * @param row.organisation_id string
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


      if (!row.campaign_name) {
        result.errorID = row.campaign_id;
        result.errorField = 'campaign_name';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.campaign_name !== 'string') {
          result.errorID = row.campaign_id;
          result.errorField = 'campaign_name';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }


      if (!row.start_date) {
        result.errorID = row.campaign_id;
        result.errorField = 'start_date';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {
        if (typeof row.start_date !== 'string') {
          result.errorID = row.campaign_id;
          result.errorField = 'start_date';
          result.errorReason = 'Not a String';
          reject(result);
        } else if (!row.start_date.match(dateRegex)) {
          result.errorID = row.campaign_id;
          result.errorField = 'start_date';
          result.errorReason = 'Not in correct format of YYYY-mm-dd';
          reject(result);
        }
      }


      if (!row.end_date) {
        result.errorID = row.campaign_id;
        result.errorField = 'end_date';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {
        if (typeof row.end_date !== 'string') {
          result.errorID = row.campaign_id;
          result.errorField = 'end_date';
          result.errorReason = 'Not a String';
          reject(result);
        } else if (!row.end_date.match(dateRegex)) {
          result.errorID = row.campaign_id;
          result.errorField = 'end_date';
          result.errorReason = 'Not in correct format of YYYY-mm-dd';
          reject(result);
        }
      }


      if (row.organisation_id) {
        if (typeof row.organisation_id !== 'string') {
          result.errorID = row.campaign_id;
          result.errorField = 'organisation_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.organisation_id = '';
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
  validateCampaign
};

