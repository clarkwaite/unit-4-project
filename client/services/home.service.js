const angular = require("angular");

homeService.$inject = ["$http"];

function homeService($http) {
	const service = this;
}

angular.module("DiscoverSound").service("homeService", homeService);