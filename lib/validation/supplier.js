/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateSupplier = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];


  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
       * @param row object
       * @param row.supplier_id string required
       * @param row.supplier_name string required
       * @param row.supplier_email string
       * @param row.supplier_phone string
       * @param row.supplier_address string
       * @param row.supplier_city string
       * @param row.supplier_zipcode string
       * @param row.supplier_country string
       * @param row.source_system string
       */

      if (!row.supplier_id) {
        result.errorID = '';
        result.errorField = 'supplier_id';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.supplier_id !== 'string') {
          result.errorID = '';
          result.errorField = 'supplier_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }

      if (!row.supplier_name) {
        result.errorID = row.supplier_id;
        result.errorField = 'supplier_name';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.supplier_name !== 'string') {
          result.errorID = row.supplier_id;
          result.errorField = 'supplier_name';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }


      if (row.supplier_email) {
        if (typeof row.supplier_email !== 'string') {
          result.errorID = row.supplier_id;
          result.errorField = 'supplier_email';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.supplier_email = '';
      }

      if (row.supplier_phone) {
        if (typeof row.supplier_phone !== 'string') {
          result.errorID = row.supplier_id;
          result.errorField = 'supplier_phone';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.supplier_phone = '';
      }

      if (row.supplier_address) {
        if (typeof row.supplier_address !== 'string') {
          result.errorID = row.supplier_id;
          result.errorField = 'supplier_address';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.supplier_address = '';
      }

      if (row.supplier_city) {
        if (typeof row.supplier_city !== 'string') {
          result.errorID = row.supplier_id;
          result.errorField = 'supplier_city';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.supplier_city = '';
      }

      if (row.supplier_zipcode) {
        if (typeof row.supplier_zipcode !== 'string') {
          result.errorID = row.supplier_id;
          result.errorField = 'supplier_zipcode';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.supplier_zipcode = '';
      }

      if (row.supplier_country) {
        if (typeof row.supplier_country !== 'string') {
          result.errorID = row.supplier_id;
          result.errorField = 'supplier_country';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.supplier_country = '';
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
  validateSupplier: validateSupplier
};
