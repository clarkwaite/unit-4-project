const angular = require("angular");

artistsService.$inject = ["$http"];

function artistsService($http) {
	const service = this;

	service.getAllArtists = function () {
		return $http.get("/artists").then(response => response.data);
	};
}