favoritesService.$inject = ["$http"];

function favoritesService($http) {
  const service = this;

  service.getFavorites = function (userId) {
    return $http.get("/users/" + userId + "/favorites")
      .then(res => {
        return res.data;
      });
  };

  service.deleteFromFavorites = function (userId, favoriteArtistId) {
    return $http.delete("/users/" + userId + "/favorites/" + favoriteArtistId)
      .then(res => {
        return res;
      });
  };

  return service;
}

angular.module("DiscoverSound").service("favoritesService", favoritesService);