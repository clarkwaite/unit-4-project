ArtistsController.$inject = ["artistsService", '$auth', "$stateParams", "$state"];

function ArtistsController(artistsService, $auth, $stateParams, $state) {
  const vm = this;
  vm.data = null;
  vm.artist = null;
  vm.userId = $auth.user.id;

  activate();

  function activate() {
  }

  vm.searchArtist = function () {

    // the new User object will be created by binding to the form inputs
    const artistSearched = { artist: vm.artist };
    //add a new user
    artistsService.searchArtist(artistSearched).then(function (res) {
      vm.data = res;
    })
  }

  vm.goToShow = function (artist) {
    if (artist.show) {
      artist.show = false;
    } else {
      artist.show = true;
      console.log(artist);
    }
  }
  vm.saveArtist = function () {
    //if searchdatabase for saved artist musicgraph_id == artist.musicgraph_id
      //return saved artist
    //else
    return artistsService.saveArtist(vm.artist)
  };

}

export default ArtistsController;
