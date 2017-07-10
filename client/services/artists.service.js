const angular = require("angular");

artistsService.$inject = ["$http"];

function artistsService($http) {
  const service = this;


  service.searchArtist = function (artistSearched) {
    var urlString = "http://localhost:5000/artists?artist=" + artistSearched.artist;
    console.log("artistSearch is : ", artistSearched); 
      return $http.get(urlString).then(response => {
        console.log("response is : " , response.data);
        return response.data;
      });
    };
};

angular.module("DiscoverSound").service("artistsService", artistsService);
