var assert = this['assert'] ? this['assert'] : require('assert');
var $H = this['$H'] ? this['$H'] : require('../lib/Hash').$H;
var Hash = this['Hash'] ? this['Hash'] : require('../lib/Hash').Hash;
var Class = this['Class'] ? this['Class'] : require('../lib/Class');

describe('Hash', function () {
	describe('$H', function () {
		it('should be a type of function', function () {
			assert(typeof $H == 'function')
		})
		it('should return an object when executed', function () {
			assert(typeof $H({}) == 'object')
		})
		it('should be a subclass of klass', function () {
			assert(Hash.toString().indexOf('klass') != -1)
		})
		it('should generate a key=value query string with & separators, [toQueryString]', function () {
			var order = $H({action: 'ship',
				order_id: 123,
				fees: ['f1', 'f2']
			});
			assert(order.toQueryString() == 'action=ship&order_id=123&fees=f1&fees=f2');
		})
		it('should be able to merge other objects, [merge]', function () {
			var h = $H({one: "uno", two: "due"});
			var h2 = h.merge({three: "tre"});

			assert(h.keys().toString() == 'one,two') // -> ["one", "two"] (unchanged)
			assert(h2.keys().toString() == 'one,two,three') // -> ["one", "two", "three"] (has merged contents)			
		})
		it('should return the first key whose value matches a value, [index]', function () {
			var h = $H({one: "uno", two: "due"});
			assert(h.index('uno') == 'one')
			assert(!h.index('tre'))
		})
	});
	describe('Hash', function () {		
		it('should be able to set values ->set("foo", "bar")', function() {
			var testee = new Hash(); 
			assert(testee.set('foo', 'bar') == 'bar');
		})
		it('should be able to get values ->get("foo") = "bar"', function () {
			var testee = new Hash(); 
			testee.set('foo', 'bar');
			assert(testee.get('foo') == 'bar');
		})
		it('should be extendable', function () {
			var Subclass = Class.create(Hash, {});
			var testee = new Subclass({
				foo: 'bar'
			});
			assert(testee.get('foo') == 'bar');
		})
	})
})