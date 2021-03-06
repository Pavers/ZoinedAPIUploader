/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateOrganisations = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];

  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
       * @param row object
       * @param row.organisation_id string required
       * @param row.organisation_name string required
       * @param row.street_address string
       * @param row.city string
       * @param row.post_code string
       * @param row.state string
       * @param row.country string
       * @param row.area string
       * @param row.latitude number
       * @param row.longitude number
       * @param row.channel number
       * @param row.organisation_type number
       * @param row.custom_dimension1 string
       * @param row.custom_dimension2 string
       * @param row.custom_dimension3 string
       * @param row.custom_dimension4 string
       * @param row.custom_dimension5 string
       * @param row.source_system string
       */


      if (!row.organisation_id) {
        result.errorID = row.organisation_id;
        result.errorField = 'organisation_id';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.organisation_id !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'organisation_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }


      if (!row.organisation_name) {
        result.errorID = row.organisation_id;
        result.errorField = 'organisation_name';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.organisation_name !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'organisation_name';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }


      if (row.street_address) {
        if (typeof row.street_address !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'street_address';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.street_address = '';
      }

      if (row.city) {
        if (typeof row.city !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'city';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.city = '';
      }

      if (row.post_code) {
        if (typeof row.post_code !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'post_code';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.post_code = '';
      }

      if (row.state) {
        if (typeof row.state !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'state';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.state = '';
      }

      if (row.country) {
        if (typeof row.country !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'country';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.country = '';
      }

      if (row.area) {
        if (typeof row.area !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'area';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.area = '';
      }


      if (row.latitude) {
        if (isNaN(row.latitude)) {
          result.errorID = row.organisation_id;
          result.errorField = 'latitude';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.latitude = 0;
      }

      if (row.longitude) {
        if (isNaN(row.longitude)) {
          result.errorID = row.organisation_id;
          result.errorField = 'longitude';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.longitude = 0;
      }

      if (row.channel) {
        if (typeof row.channel !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'channel';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.channel = '';
      }


      if (row.organisation_type) {
        if (typeof row.organisation_type !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'organisation_type';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.organisation_type = '';
      }


      if (row.custom_dimension1) {
        if (typeof row.custom_dimension1 !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'custom_dimension1';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_dimension1 = '';
      }

      if (row.custom_dimension2) {
        if (typeof row.custom_dimension2 !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'custom_dimension2';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_dimension2 = '';
      }

      if (row.custom_dimension3) {
        if (typeof row.custom_dimension3 !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'custom_dimension3';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_dimension3 = '';
      }


      if (row.custom_dimension4) {
        if (typeof row.custom_dimension4 !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'custom_dimension4';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_dimension4 = '';
      }

      if (row.custom_dimension5) {
        if (typeof row.custom_dimension5 !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'custom_dimension5';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_dimension5 = '';
      }

      if (row.source_system) {
        if (typeof row.source_system !== 'string') {
          result.errorID = row.organisation_id;
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
  validateOrganisations
};
