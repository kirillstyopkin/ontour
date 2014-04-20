
require.config({

	baseUrl: '../',

	shim: {
		jquery: {
			exports: '$',
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		marionette: {
			deps: [
				'jquery',
				'underscore',
				'backbone'
			],
			exports: 'Marionette'
		},
		menu: {
			deps: ['jquery']
		}
	},

	paths: {
		jquery: 'http://code.jquery.com/jquery-latest.min',

		mapbox: 'https://api.tiles.mapbox.com/mapbox.js/v1.6.2/mapbox',

		text: 'lib/text',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
		marionette: 'lib/backbone.marionette',

		channel: 'frontend/channel',

		menu: 'frontend/menu',
		getEvents: 'frontend/getEvents'
	}
});

require(['jquery', 'menu', 'getEvents'], function() {


});