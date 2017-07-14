EventsController.$inject = ["eventsService", '$auth', '$state', "$stateParams", "$http"];

function EventsController(eventsService, $auth, $state, $stateParams, $http) {
  const vm = this;
  vm.data = null;
  vm.artist = null;

  activate();

  function activate() {
    //activate
  }

  vm.searchEvent = function () {
    const eventSearched = vm.event;
    eventsService.searchEvent(eventSearched).then(function (res) {
      vm.data = res;
      console.log(res)
    })
  }
  vm.showEvent = function (event) {
    if (event.show) {
      event.show = false;
    } else {
      event.show = true;
    }
  }
}

export default EventsController;