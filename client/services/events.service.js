const angular = require("angular");

eventsService.$inject = ["$http"];

function eventsService($http) {
  const service = this;


  service.searchEvent = function (eventSearched) {
    var urlString = "http://localhost:5000/events?artist=" + eventSearched.event;
    console.log("eventSearch is : ", eventSearched); 
      return $http.get(urlString).then(response => {
        console.log("response is : " , response.data);
        return response.data;
        // var urlString = "http:/" +  window.location.host + "/events?artist=" + eventSearched.event;
      });
    };
};

// service.getAllEvents = function () {
//   return $http.get("/events").then(response => response.data);
// };

angular.module("DiscoverSound").service("eventsService", eventsService);
