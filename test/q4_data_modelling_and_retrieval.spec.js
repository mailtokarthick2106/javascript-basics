const chai = require('chai');
const expect = chai.expect;
const formatFruit = require('../solutions/q4_data_modelling_and_retrieval.js');

describe('Testing - data_modelling_and_retrieval', () => {
	it('module return type test case', (done) => {
		expect(typeof formatFruit).to.deep.equal('function');
		done();
	});
	it('positive test case', (done) => {
		expect(formatFruit('Apple'))
		.to.deep.equal('Red');
		done();
	});
	it('negative test case', (done) => {
		expect(formatFruit(100)).to.deep.equal(null);
		done();
	});
});