const angular = require("angular");

artistsService.$inject = ["$http"];

function artistsService($http) {
  const service = this;


  service.searchArtist = function (artistSearched) {
    var searchUrl = "http://localhost:5000/artists?artist=" + artistSearched.artist;
      return $http.get(searchUrl).then(response => {
        console.log("response is : " , response.data);
        return response.data;
      });
    };

	service.showArtist = function (artistShown) {
		var showUrl = "http://localhost:5000/artists?artist=" + artistShown.artist;
		console.log("artistShown is : ", artistShown.artist); 
			return $http.get(showUrl).then(res => {
				console.log("response is : " , res.data);
				return res.data;
				});
			};

};

angular.module("DiscoverSound").service("artistsService", artistsService);
