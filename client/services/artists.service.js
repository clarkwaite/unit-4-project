const angular = require("angular");

artistsService.$inject = ["$http"];

function artistsService($http) {
	const service = this;

	service.searchArtist = function(artistSearched) {
    console.log('service',artistSearched)
  };

	// service.getAllArtists = function () {
	// 	return $http.get("/artists").then(response => response.data);
	// };
}

angular.module("DiscoverSound").service("artistsService", artistsService);