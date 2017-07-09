const angular = require('angular');
require("angular-ui-router");

angular.module('DiscoverSound', ["ui.router"]).config(router);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("home", {
			url: "/",
			template: "<discover-artists></discover-artists>"
		})
		.state("artists", {
			url: "/artists",
			template: "<discover-artists></discover-artists>"
		})

	$urlRouterProvider.otherwise("/");
}