const angular = require("angular");

artistsService.$inject = ["$http"];

function artistsService($http) {
	const service = this;

	service.searchArtist = function (artistSearched) {
		var searchUrl = "/artists?artist=" + artistSearched.artist;
		return $http.get(searchUrl).then(response => {
			return response.data;
		});
	};

	service.showArtist = function (artistShown) {
		var showUrl = "/artists?artist=" + artistShown.artist;
		return $http.get(showUrl).then(res => {
			return res.data;
		});
	};

	service.saveArtist = function (artist) {
		return $http.post("/artists", artist).then(response => {
			return response.data;
		});
	};

	service.saveToFavorites = function (artistId, userId) {
		return $http.post('/favorites', { "favorite": { "artist_id": artistId, "user_id": userId } })
			.then(res => {
				return res;
			});
	}
}; //close Service

angular.module("DiscoverSound").service("artistsService", artistsService);
