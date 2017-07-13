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
      console.log(".then resp from controller is ", res);
      vm.data = res;
    })
  }
  vm.showEvent = function (event) {
    if (event.show) {
      event.show = false;
    } else {
      event.show = true;
      console.log(event);
    }
  }


}

export default EventsController;

//ilsdgfkjdsgfdsh


vm.saveEvents = function (artistId) {
  // let artistId = $stateParams.artistId;
  let eventToSave = {
    
    date: '',
    lineup: '',
    ticket_url: '',
    venue_name: '',
    city: '',
    country: '',
    region: ''
  };

  artistsService.saveArtist(artistToSave)
    .then(res => {
      let artistId = res.id;
      artistsService.saveToFavorites(artistId, userId)
        .then(res => {
          // vm.favorite = res.data;
          console.log(res);
        })
        .catch(res => {
          console.log(res);
        });
    });
}

vm.goToRelated = function (artist) {
  $state.go('related', { userId: $auth.user.id, artistId: $stateParams.artistId, artist: artist })
}

} //close Controller function

export default ArtistController;