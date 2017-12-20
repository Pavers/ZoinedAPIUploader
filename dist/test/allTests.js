'use strict';

var chai = require('chai');

var supplierValidation = require('../lib/validation/supplier');

describe('All Tests', function () {
  describe('Validation Tests', function () {
    describe('Supplier Validation', function () {
      it('Error Reason should be Missing Required Property', function (done) {

        var allData = [];
        var data = {};
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

        supplierValidation.validateSupplier(JSON.stringify(allData)).then(function () {
          done();
        }).catch(function (err) {
          chai.assert(err.errorReason === 'Missing Required Property');
          done();
        });
      });
      it('should return an array', function (done) {
        var allData = [];
        var data = {};
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

        supplierValidation.validateSupplier(JSON.stringify(allData)).then(function (successData) {
          console.log(successData);
          chai.expect(successData).to.be.a('array');
          done();
        });
      });
    });
  });
});
//# sourceMappingURL=allTests.js.map