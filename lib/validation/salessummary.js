/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */

const validateSalesSummary = async(data) => {

  const salesData = JSON.parse(data);
  let result = {};
  let finalObject = [];


  const dateRegex = '/^\d{4}-\d{2}-\d{2}$/';
  const timeRegex = '/^\d{2}:\d{2}:\d{2}$/';

  let request = salesData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
       * @param row object
       * @param row.sales_date string required (yyyy-mm-dd)
       * @param row.sales_time string (hh:mm:ss)
       * @param row.organisation_id string required
       * @param row.department_id string
       * @param row.salesperson_id string
       * @param row.sales_value number
       * @param row.sales_value_wo_vat number
       * @param row.sales_currency string
       * @param row.rebate number
       * @param row.rebate_wo_vat number
       * @param row.purchase_price number
       * @param row.purchase_price_wo_vat number
       * @param row.purchase_currency string
       * @param row.product_quantity number
       * @param row.number_of_transactions number
       * @param row.product_id string
       * @param row.customer_id string
       * @param row.supplier_id string
       * @param row.custom_field_1 string
       * @param row.custom_field_2 string
       * @param row.custom_field_3 string
       * @param row.custom_field_4 string
       * @param row.custom_field_5 string
       * @param row.source_system string
       */


      if (row.sales_date) {
        if (!row.sales_date.match(dateRegex)) {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'sales_date';
          result.errorReason = 'Not in correct format of YYYY-mm-dd';
          reject(result);
        } else {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'sales_date';
          result.errorReason = 'Requires a Date';
          reject(result);
        }
      }


      if (row.sales_time) {
        if (!row.sales_time.match(timeRegex)) {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'sales_time';
          result.errorReason = 'Not in correct format of hh:mm:ss';
          reject(result);
        }
      }

      if (!row.organisation_id) {
        result.errorID = row.sales_date + ' ' + row.sales_time;
        result.errorField = 'organisation_id';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.organisation_id !== 'string') {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'organisation_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }


      if (row.department_id) {
        if (typeof row.department_id !== 'string') {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'department_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.department_id = '';
      }

      if (row.salesperson_id) {
        if (typeof row.salesperson_id !== 'string') {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'salesperson_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.salesperson_id = '';
      }

      if (row.sales_value) {
        if (isNaN(row.sales_value)) {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'sales_value';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.sales_value = 0;
      }

      if (row.sales_value_wo_vat) {
        if (isNaN(row.sales_value_wo_vat)) {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'sales_value_wo_vat';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.sales_value_wo_vat = 0;
      }


      if (row.sales_currency) {
        if (typeof row.sales_currency !== 'string') {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'sales_currency';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.sales_currency = '';
      }

      if (row.rebate) {
        if (isNaN(row.rebate)) {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'rebate';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.rebate = 0;
      }


      if (row.rebate_wo_vat) {
        if (isNaN(row.rebate_wo_vat)) {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'rebate_wo_vat';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.rebate_wo_vat = 0;
      }

      if (row.purchase_price) {
        if (isNaN(row.purchase_price)) {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'purchase_price';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.purchase_price = 0;
      }

      if (row.purchase_price_wo_vat) {
        if (isNaN(row.purchase_price_wo_vat)) {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'purchase_price_wo_vat';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.purchase_price_wo_vat = 0;
      }

      if (row.purchase_currency) {
        if (typeof row.purchase_currency !== 'string') {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'purchase_currency';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.purchase_currency = '';
      }

      if (row.product_quantity) {
        if (isNaN(row.product_quantity)) {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'product_quantity';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.product_quantity = 0;
      }


      if (row.number_of_transactions) {
        if (isNaN(row.number_of_transactions)) {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'number_of_transactions';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.number_of_transactions = 0;
      }


      if (row.product_id) {
        if (typeof row.product_id !== 'string') {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'product_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.product_id = '';
      }

      if (row.customer_id) {
        if (typeof row.customer_id !== 'string') {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'customer_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.customer_id = '';
      }

      if (row.supplier_id) {
        if (typeof row.supplier_id !== 'string') {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'supplier_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.supplier_id = '';
      }


      if (row.custom_field_1) {
        if (typeof row.custom_field_1 !== 'string') {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'custom_field_1';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_1 = '';
      }

      if (row.custom_field_2) {
        if (typeof row.custom_field_2 !== 'string') {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'custom_field_2';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_2 = '';
      }
      if (row.custom_field_3) {
        if (typeof row.custom_field_3 !== 'string') {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'custom_field_3';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_3 = '';
      }
      if (row.custom_field_4) {
        if (typeof row.custom_field_4 !== 'string') {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'custom_field_4';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_4 = '';
      }
      if (row.custom_field_5) {
        if (typeof row.custom_field_5 !== 'string') {
          result.errorID = row.sales_date + ' ' + row.sales_time;
          result.errorField = 'custom_field_1';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_5 = '';
      }

      if (row.source_system) {
        if (typeof row.source_system !== 'string') {
          result.errorID = row.sales_date + ' ' + row.sales_time;
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
  validateSalesSummary
};

