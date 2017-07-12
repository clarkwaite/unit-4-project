favoritesService.$inject = ["$http"];

function favoritesService ($http) {
  const service = this;

  service.getFavorites = function (userId) {
    return $http.get("/users/"+userId+"/favorites")
    .then(res => {
      return res.data;
    });
  };

  service.deleteFromFavorites = function (userId, favoriteArtistId) {
    console.log("userId", userId, 'artistId', favoriteArtistId)
    return $http.delete("/users/"+userId+"/favorites/"+favoriteArtistId)
    .then(res => {
      return res.status;
    });
  };
  
  return service;
}

angular.module("DiscoverSound").service("favoritesService", favoritesService);