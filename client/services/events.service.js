const angular = require("angular");

eventsService.$inject = ["$http"];

function eventsService($http) {
  const service = this;


  service.searchEvent = function (eventSearched) {
  $http.get('https://rest.bandsintown.com/artists/' + eventSearched + '/events?app_id=discoversound', {
    headers: {'Authorization': 'application/json',
    
  }})
    .then(function(response) {
            console.log(response);
    });
  }
};

// 	service.getAllEvents = function () {
// 		return $http.get("/events").then(response => response.data);
// 	};

angular.module("DiscoverSound").service("eventsService", eventsService);
