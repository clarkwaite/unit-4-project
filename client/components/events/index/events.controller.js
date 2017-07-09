EventsController.$inject = ["eventsService"];

function EventsController(eventsService) {
  const vm = this;

  activate();

  function activate() {
  }

  vm.searchEvent = function () {

        // the new User object will be created by binding to the form inputs
        const eventSearched = { event: vm.event };
        //add a new user
        eventsService.searchEvent(eventSearched)
  }
}

export default EventsController;