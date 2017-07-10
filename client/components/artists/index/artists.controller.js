ArtistsController.$inject = ["artistsService", "$stateParams", "$state"];

function ArtistsController(artistsService, $stateParams, $state) {
  const vm = this;
  vm.data = null;
  vm.artist=null;

  activate();

  function activate() {
  }

 vm.searchArtist = function () {

        // the new User object will be created by binding to the form inputs
        const artistSearched = { artist: vm.artist };
        //add a new user
        artistsService.searchArtist(artistSearched).then(function(res){
          vm.data = res;
        })
  }

  vm.goToShow = function(artist) {
    $state.go('artist', {name: artist.name, artist: artist})
    console.log(artist)
  }

}

export default ArtistsController;