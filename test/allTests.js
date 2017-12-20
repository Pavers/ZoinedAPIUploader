'use strict';
const chai = require('chai');

const supplierValidation = require('../lib/validation/supplier');

describe('All Tests', () => {
  describe('Validation Tests', () => {
    describe('Supplier Validation', () => {
      it('Error Reason should be Missing Required Property', (done) => {

        const allData = [];
        let data = {};
        data.supplier_name = 'TEST';
        data.supplier_email = 'TEST@TEST.COM';
        data.supplier_phone = '01234567890';
        data.supplier_city = 'TEST CITY';
        data.supplier_zipcode = 'AB01 3CD';
        data.supplier_address = 'TEST ADDRESS';
        data.supplier_country = 'UK';
        data.source_system = 'RMIS';
        allData.push(data);
        data = {};
        data.supplier_id = 'AB1';
        data.supplier_name = 'TEST';
        data.supplier_email = 'TEST@TEST.COM';
        data.supplier_phone = '01234567890';
        data.supplier_city = 'TEST CITY';
        data.supplier_zipcode = 'AB01 3CD';
        data.supplier_address = 'TEST ADDRESS';
        data.supplier_country = 'UK';
        data.source_system = 'RMIS';
        allData.push(data);


        supplierValidation.validateSupplier(JSON.stringify(allData))
          .then(() => {
            done();
          }).catch(err => {
            chai.assert(err.errorReason === 'Missing Required Property');
            done();
          });
      });
      it('should return an array', (done) => {
        const allData = [];
        let data = {};
        data.supplier_id = 'AB2';
        data.supplier_name = 'TEST';
        data.supplier_email = 'TEST@TEST.COM';
        data.supplier_phone = '01234567890';
        data.supplier_city = 'TEST CITY';
        data.supplier_zipcode = 'AB01 3CD';
        data.supplier_address = 'TEST ADDRESS';
        data.supplier_country = 'UK';
        data.source_system = 'RMIS';
        allData.push(data);
        data = {};
        data.supplier_id = 'AB1';
        data.supplier_name = 'TEST';
        data.supplier_email = 'TEST@TEST.COM';
        data.supplier_phone = '01234567890';
        data.supplier_city = 'TEST CITY';
        data.supplier_zipcode = 'AB01 3CD';
        data.supplier_address = 'TEST ADDRESS';
        data.supplier_country = 'UK';
        data.source_system = 'RMIS';
        allData.push(data);

        supplierValidation.validateSupplier(JSON.stringify(allData))
          .then((successData) => {
            console.log(successData);
            chai.expect(successData).to.be.a('array');
            done();
          });
      });
    });
  });
});
