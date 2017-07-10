EventsController.$inject = ["eventsService"];

function EventsController(eventsService) {
  const vm = this;
  vm.data = null;

  activate();

  function activate() {
  }

  vm.searchEvent = function () {

        // the new User object will be created by binding to the form inputs
        const eventSearched = { event: vm.event };
        //add a new user
        eventsService.searchEvent(eventSearched).then(function(res){
          console.log(".then resp from controller is " , res);
          vm.data = res;
        })
  }
}

export default EventsController;