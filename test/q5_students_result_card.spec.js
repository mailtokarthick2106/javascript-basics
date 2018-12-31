const chai = require('chai');
const expect = chai.expect;
const resultcard = require('../solutions/q5_students_result_card.js');

describe('Testing - students_result_card', () => {
    it('module return type test case', (done) => {
        expect(typeof resultcard).to.deep.equal('function');
        done();
    });

});
