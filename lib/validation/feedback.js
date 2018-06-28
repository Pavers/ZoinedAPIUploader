/* eslint-disable valid-jsdoc */
'use strict';

/**
 * @author Dave Grix
 * @param data string
 * @return array
 */
const validateFeedback = async(data) => {

  const feedbackData = JSON.parse(data);
  let result = {};
  let finalObject = [];


  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const timeRegex = /^\d{2}:\d{2}:\d{2}$/;


  let request = feedbackData.map((row) => {
    return new Promise((resolve, reject) => {

      /**
       * @param row objects
       * @param row.feedback_id string required
       * @param row.organisation_id string required
       * @param row.department_id string
       * @param row.feedback_date string (yyyy-mm-dd) required
       * @param row.feedback_time string (hh:mm:ss)
       * @param row.feedback_type string
       * @param row.grade number
       * @param row.comments string
       * @param row.source_system string
       */


      if (!row.feedback_id) {
        result.errorID = '';
        result.errorField = 'feedback_id';
        result.errorReason = 'Missing Required Property';
        reject(result);
      } else {
        row.feedback_id = row.feedback_id.toString();
      }



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

      if (row.department_id) {
        if (typeof row.department_id !== 'string') {
          result.errorID = row.feedback_id;
          result.errorField = 'department_id';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.department_id = '';
      }

      if (row.feedback_date) {
        if (!row.feedback_date.match(dateRegex)) {
          result.errorID = row.feedback_id;
          result.errorField = 'feedback_date';
          result.errorReason = 'Not in correct format of YYYY-mm-dd';
          reject(result);
        }
      } else {
        result.errorID = row.feedback_id;
        result.errorField = 'feedback_date';
        result.errorReason = 'Requires a Date';
        reject(result);
      }


      if (row.feedback_time) {
        if (!row.feedback_time.match(timeRegex)) {
          result.errorID = row.feedback_id;
          result.errorField = 'feedback_time';
          result.errorReason = 'Not in correct format of mm:hh:ss';
          reject(result);
        }
      } else {
        row.feedback_time = null;
      }

      if (row.feedback_type) {
        if (typeof row.feedback_type !== 'string') {
          result.errorID = row.feedback_id;
          result.errorField = 'feedback_type';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.feedback_type = '';
      }


      if (row.grade) {
        if (isNaN(row.grade)) {
          result.errorID = row.feedback_id;
          result.errorField = 'grade';
          result.errorReason = 'Not a Number!';
          reject(result);
        }
      } else {
        row.grade = 0;
      }


      if (row.comments) {
        if (typeof row.comments !== 'string') {
          result.errorID = row.feedback_id;
          result.errorField = 'comments';
          result.errorReason = 'Not a String';
          reject(result);
        }
      } else {
        row.comments = '';
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
  validateFeedback
};

