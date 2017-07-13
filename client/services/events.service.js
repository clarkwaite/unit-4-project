const angular = require("angular");

eventsService.$inject = ["$http"];

function eventsService($http) {
  const service = this;


  service.searchEvent = function (eventSearched) {
    var encodedEvent = encodeURI(eventSearched)
    console.log(encodedEvent)
    var urlString = "/events?artist=" + encodedEvent;
      return $http.get(urlString).then(response => {
        return response.data;
          console.log(response.data)
        // var urlString = "http:/" +  window.location.host + "/events?artist=" + eventSearched.event;
      });
    };
};

angular.module("DiscoverSound").service("eventsService", eventsService);
