const angular = require("angular");

eventsService.$inject = ["$http"];

function eventsService($http) {
  const service = this;


  service.searchEvent = function (eventSearched) {
    var urlString = "http://localhost:5000/events?artist=" + eventSearched.event;
      return $http.get(urlString).then(response => {
        return response.data;
        // var urlString = "http:/" +  window.location.host + "/events?artist=" + eventSearched.event;
      });
    };
};

angular.module("DiscoverSound").service("eventsService", eventsService);
