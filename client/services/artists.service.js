const angular = require("angular");

artistsService.$inject = ["$http"];

function artistsService($http) {
	const service = this;

	service.searchArtist = function (artistSearched) {
		var searchUrl = "http://localhost:5000/artists?artist=" + artistSearched.artist;
		return $http.get(searchUrl).then(response => {
			console.log("response is : ", response.data);
			return response.data;
		});
	};

	service.showArtist = function (artistShown) {
		var showUrl = "http://localhost:5000/artists?artist=" + artistShown.artist;
		console.log("artistShown is : ", artistShown.artist);
		return $http.get(showUrl).then(res => {
			console.log("response is : ", res.data);
			return res.data;
		});
	};

	service.saveArtist = function (artist) {
		return $http.post("/artists", artist).then(response => {
			console.log("Coming from post", response.data)
			return response.data;
		});
	};

	service.saveToFavorites = function (artistId, userId) {
		return $http.post('/favorites', { "favorite": { "artist_id": artistId, "user_id": userId } })
			.then(res => {
				return res;
			});
	}

	service.deleteFromFavorites = function (favoriteId) {
		return $http.delete('/favorites/' + favoriteId)
			.then(res => {
				return res;
			});
	}
}; //close Service

angular.module("DiscoverSound").service("artistsService", artistsService);
