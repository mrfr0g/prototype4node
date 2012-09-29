var assert = this['assert'] ? this['assert'] : require('assert');
var $A = this['$A'] ? this['$A'] : require('../lib/Array.js').$A;

describe('Array', function(){
	describe('$A', function () {
		it('should be defined as a function', function () {
			assert.equal(typeof $A, 'function')
		})
		it('should return an array when executed', function () {
			assert(Object.isArray($A()))	
		})
		it('should contain 5 nodes when passed "Hello"', function () {
			assert($A().length = 4)
		})
	})
	describe('uniq', function () {
		it('should return -> [1, 3, 2]', function () {
			assert($A([1, 3, 2, 1]).uniq().toString() == '1,3,2')
		})
		it('should return -> ["A", "a"]', function () {
			assert($A(["A","a"]).uniq().toString() == 'A,a')
		})
	})
})