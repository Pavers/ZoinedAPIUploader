/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateVisitorDemographics = async(data) => {

  const supplierData = JSON.parse(data);
  let result = {};
  let finalObject = [];

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const timeRegex = /^\d{2}:\d{2}:\d{2}$/;

  let request = supplierData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
       * @param row object
       * @param row.organisation_id string required
       * @param row.department_id string
       * @param row.counter_id string
       * @param row.visitor_id string
       * @param row.date string required (yyyy-mm-dd)
       * @param row.time string required (hh:mm:ss)
       * @param row.gender string
       * @param row.age number
       * @param row.visitors number required
       * @param row.source_system string
       */

      if (!row.organisation_id) {
        result.errorID = '';
        result.errorField = 'organisation_id';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {

        if (typeof row.organisation_id !== 'string') {
          result.errorID = '';
          result.errorField = 'organisation_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      }


      if (row.counter_id) {
        if (typeof row.source_system !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'counter_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.counter_id = '';
      }

      if (row.visitor_id) {
        if (typeof row.source_system !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'visitor_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.visitor_id = '';
      }

      if (!row.date) {
        result.errorID = row.organisation_id;
        result.errorField = 'date';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {
        if (typeof row.date !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'date';
          result.errorReason = 'Not a String';
          reject(result);
        } else if (!row.date.match(dateRegex)) {
          result.errorID = row.organisation_id;
          result.errorField = 'start_date';
          result.errorReason = 'Not in correct format of YYYY-mm-dd';
          reject(result);
        }
      }

      if (!row.time) {
        result.errorID = row.organisation_id;
        result.errorField = 'time';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {
        if (typeof row.time !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'time';
          result.errorReason = 'Not a String';
          reject(result);
        } else if (!row.time.match(timeRegex)) {
          result.errorID = row.organisation_id;
          result.errorField = 'time';
          result.errorReason = 'Not in correct format of hh:mm:ss';
          result.givenValue = row.time;
          reject(result);
        }
      }

      if (row.gender) {
        if (typeof row.gender !== 'string') {
          result.errorID = row.organisation_id;
          result.errorField = 'gender';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.gender = '';
      }


      if (row.age) {
        if (isNaN(row.product_quantity)) {
          result.errorID = row.organisation_id;
          result.errorField = 'age';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.age = 0;
      }

      if (!row.visitors && row.visitors !== 0) {
        result.errorID = row.organisation_id;
        result.errorField = 'visitors';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {
        if (isNaN(row.visitors)) {
          result.errorID = row.organisation_id;
          result.errorField = 'visitors';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
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
  validateVisitorDemographics
};

