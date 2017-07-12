const angular = require("angular");

bubbleService.$inject = ["$http"];

function bubbleService($http) {
	const service = this;
}

angular
  .module("DiscoverSound")
  .service("bubbleService", bubbleService);