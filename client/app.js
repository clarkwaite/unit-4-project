const angular = require('angular');
require("angular-ui-router");

angular.module('DiscoverSound', ["ui.router"]).config(router);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("home", {
			url: "/",
			template: "<discover-home></discover-home>"
		})
		.state("artists", {
			url: "/artists",
			template: "<discover-artists></discover-artists>"
		})
		.state("artist", {
			url: "/artists/:name",
			template: "<discover-artist></discover-artist>",
			params: {name: null, artist: null}
		})
		.state("events", {
			url: "/events",
			template: "<discover-events></discover-events>"
		})

	$urlRouterProvider.otherwise("/");
}