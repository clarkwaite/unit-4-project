const angular = require("angular");

eventsService.$inject = ["$http"];

function eventsService($http) {
  const service = this;


  service.searchEvent = function (eventSearched) {
    var encodedEvent = encodeURI(eventSearched)
    var urlString = "/events?artist=" + encodedEvent;
      return $http.get(urlString).then(response => {
        return response.data;
      });
    };
};

angular.module("DiscoverSound").service("eventsService", eventsService);
