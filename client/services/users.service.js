UsersService.$inject = ["$http", "$auth"];

function UsersService($http, $auth) {
  const service = this;

  service.getUser = function (userId) {
    return $http.get("/users/" + userId)
      .then(response => {
        return response.data;
      });
  };

  return service;
}

angular.module("DiscoverSound").service("UsersService", UsersService);