relatedService.$inject = ["$http", "$auth", '$stateParams'];

function relatedService($http, $auth, $stateParams) {
  const service = this;
  let userId = $stateParams.userId

  service.getRelatedArtists = function (artistId) {
    return $http.get("/users/" + userId + "/artists/" + artistId + "/related_artists")
      .then(res => {
        return res.data;
      });
  };

  return service;
}

angular.module("DiscoverSound").service("relatedService", relatedService);