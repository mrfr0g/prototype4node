var assert = this['assert'] ? this['assert'] : require('assert');
var Template = this['Template'] ? this['Template'] : require('../lib/Template');

describe('Template', function() {
	describe('Template (instance)', function() {
		it('new Template', function() {
			// the template (our formatting expression)
			var myTemplate = new Template('The TV show #{title} was created by #{author}.');
			// our data to be formatted by the template
			var show = {
				title: 'The Simpsons',
				author: 'Matt Groening',
				network: 'FOX'
			};

			// let's format our data
			// -> "The TV show The Simpsons was created by Matt Groening."
			assert(myTemplate.evaluate(show) == "The TV show The Simpsons was created by Matt Groening.")

		})
	})
})