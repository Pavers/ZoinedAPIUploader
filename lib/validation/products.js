/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateProducts = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];

  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
       * @param row object
       * @param row.product_id string required
       * @param row.product_name string required
       * @param row.product_description string
       * @param row.category_id string
       * @param row.purchase_price number
       * @param row.vat_rate number
       * @param row.unit_of_measure string
       * @param row.product_size string
       * @param row.product_color string
       * @param row.product_type string
       * @param row.product_brand string
       * @param row.product_season string
       * @param row.model string
       * @param row.model_number string
       * @param row.country_of_origin string
       * @param row.freight number
       * @param row.duty number
       * @param row.supplier_id string
       * @param row.fabric string
       * @param row.buyer string
       * @param row.ean string
       * @param row.custom_field_1 string
       * @param row.custom_field_2 string
       * @param row.custom_field_3 string
       * @param row.custom_field_4 string
       * @param row.custom_field_5 string
       * @param row.custom_field_6 string
       * @param row.custom_field_7 string
       * @param row.custom_field_8 string
       * @param row.custom_field_9 string
       * @param row.custom_field_10 string
       */


      if (!row.product_id) {
        result.errorID = '';
        result.errorField = 'product_id';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.product_id !== 'string') {
          result.errorID = '';
          result.errorField = 'product_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }

      if (!row.product_name) {
        result.errorID = row.product_id;
        result.errorField = 'product_name';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.product_name !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'product_name';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }


      if (row.product_description) {
        if (typeof row.product_description !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'product_description';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.product_description = '';
      }

      if (row.category_id) {
        if (typeof row.category_id !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'category_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.category_id = '';
      }


      if (row.purchase_price) {
        if (isNaN(row.purchase_price)) {
          result.errorID = row.product_id;
          result.errorField = 'purchase_price';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.purchase_price = 0;
      }

      if (row.vat_rate) {
        if (isNaN(row.vat_rate)) {
          result.errorID = row.product_id;
          result.errorField = 'vat_rate';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.vat_rate = 0;
      }


      if (row.unit_of_measure) {
        if (typeof row.unit_of_measure !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'unit_of_measure';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.unit_of_measure = '';
      }

      if (row.product_size) {
        if (typeof row.product_size !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'product_size';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.product_size = '';
      }

      if (row.product_color) {
        if (typeof row.product_color !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'product_color';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.product_color = '';
      }

      if (row.product_type) {
        if (typeof row.product_type !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'product_type';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.product_type = '';
      }

      if (row.product_brand) {
        if (typeof row.product_brand !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'product_brand';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.product_brand = '';
      }

      if (row.product_season) {
        if (typeof row.product_season !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'product_season';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.product_season = '';
      }


      if (row.model) {
        if (typeof row.model !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'model';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.model = '';
      }

      if (row.model_number) {
        if (typeof row.model_number !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'model_number';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.model_number = '';
      }

      if (row.country_of_origin) {
        if (typeof row.country_of_origin !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'country_of_origin';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.country_of_origin = '';
      }


      if (row.freight) {
        if (isNaN(row.freight)) {
          result.errorID = row.product_id;
          result.errorField = 'freight';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.freight = 0;
      }


      if (row.duty) {
        if (isNaN(row.duty)) {
          result.errorID = row.product_id;
          result.errorField = 'duty';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.duty = 0;
      }

      if (row.supplier_id) {
        if (typeof row.supplier_id !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'supplier_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.supplier_id = '';
      }

      if (row.fabric) {
        if (typeof row.fabric !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'fabric';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.fabric = '';
      }

      if (row.buyer) {
        if (typeof row.buyer !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'buyer';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.buyer = '';
      }

      if (row.ean) {
        if (typeof row.ean !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'ean';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.ean = '';
      }

      if (row.custom_field_1) {
        if (typeof row.custom_field_1 !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'custom_field_1';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_1 = '';
      }

      if (row.custom_field_2) {
        if (typeof row.custom_field_2 !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'custom_field_2';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_2 = '';
      }
      if (row.custom_field_3) {
        if (typeof row.custom_field_3 !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'custom_field_3';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_3 = '';
      }
      if (row.custom_field_4) {
        if (typeof row.custom_field_4 !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'custom_field_4';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_4 = '';
      }
      if (row.custom_field_5) {
        if (typeof row.custom_field_5 !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'custom_field_5';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_5 = '';
      }
      if (row.custom_field_6) {
        if (typeof row.custom_field_6 !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'custom_field_6';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_6 = '';
      }
      if (row.custom_field_7) {
        if (typeof row.custom_field_7 !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'custom_field_7';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_7 = '';
      }
      if (row.custom_field_8) {
        if (typeof row.custom_field_8 !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'custom_field_8';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_8 = '';
      }
      if (row.custom_field_9) {
        if (typeof row.custom_field_9 !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'custom_field_9';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_9 = '';
      }
      if (row.custom_field_10) {
        if (typeof row.custom_field_10 !== 'string') {
          result.errorID = row.product_id;
          result.errorField = 'custom_field_10';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.custom_field_10 = '';
      }

      if (row.source_system) {
        if (typeof row.source_system !== 'string') {
          result.errorID = row.transaction_id;
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
  validateProducts
};
