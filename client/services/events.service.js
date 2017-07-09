const angular = require("angular");

eventsService.$inject = ["$http"];

function eventsService($http) {
  const service = this;

  service.searchEvent = function (eventSearched) {
    console.log('service', eventSearched)
//   var bandsintown = require('bandsintown')(discoversound);
//   bandsintown
//   .getArtistEventList(eventSearched)
//   .then(function(events) {
//     // return array of events 
//       console.log(events);
//   });
  }
};

// 	service.getAllEvents = function () {
// 		return $http.get("/events").then(response => response.data);
// 	};

angular.module("DiscoverSound").service("eventsService", eventsService);
