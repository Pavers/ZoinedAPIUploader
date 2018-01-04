/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateInventorySnapshots = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];

  let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  let timeRegex = /^\d{2}:\d{2}:\d{2}$/;


  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
       * @param row object
       * @param row.organisation_id string required
       * @param row.snapshot_date string required (yyyy-mm-dd)
       * @param row.snapshot_time string  (hh:mm:ss)
       * @param row.product_id string  required
       * @param row.quantity number  required
       * @param row.unit_purchase_price number
       * @param row.unit_purchase_price_wo_vat number
       * @param row.currency string
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


      if (!row.snapshot_date) {
        result.errorID = row.organisation_id;
        result.errorField = 'snapshot_date';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {
        if (typeof row.snapshot_date !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'snapshot_date';
          result.errorReason = 'Not a String';
          reject(result);
        } else if (!row.snapshot_date.match(dateRegex)) {
          result.errorID = row.organisation_id;
          result.errorField = 'snapshot_date';
          result.errorReason = 'Not in correct format of yyyy-mm-dd';
          reject(result);
        }
      }

      if (row.snapshot_time) {
        if (!row.snapshot_time.match(timeRegex)) {
          result.errorID = row.organisation_id;
          result.errorField = 'snapshot_time';
          result.errorReason = 'Not in correct format of HH:mm:ss';
          reject(result);
        }
      }

      else {
        result.errorID = row.organisation_id;
        result.errorField = 'snapshot_time';
        result.errorReason = 'Requires a Time';
        reject(result);
      }

      if (!row.product_id) {
        result.errorID = row.organisation_id;
        result.errorField = 'product_id';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.product_id !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'product_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }

      if (!row.quantity && row.quantity !== 0) {
        result.errorID = row.organisation_id;
        result.errorField = 'quantity';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (isNaN(row.quantity)) {
          result.errorID = row.organisation_id;
          result.errorField = 'quantity';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      }


      if (row.unit_purchase_price) {
        if (isNaN(row.unit_purchase_price)) {
          result.errorID = row.organisation_id;
          result.errorField = 'unit_purchase_price';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.unit_purchase_price = 0;
      }

      if (row.unit_purchase_price_wo_vat) {
        if (isNaN(row.unit_purchase_price_wo_vat)) {
          result.errorID = row.organisation_id;
          result.errorField = 'unit_purchase_price_wo_vat';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.unit_purchase_price_wo_vat = 0;
      }

      if (row.currency) {
        if (typeof row.currency !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'currency';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.currency = '';
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
  validateInventorySnapshots
};

