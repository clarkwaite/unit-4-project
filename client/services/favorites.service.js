FavoritesService.$inject = ["$http"];

function FavoritesService ($http) {
  const service = this;

  service.getFavorites = function (userId) {
    return $http.get("/users/"+userId+"/favorites")
    .then(res => {
      return res.data;
    });
  };
  
  return service;
}

angular.module("DiscoverSound").service("favoritesService", FavoritesService);