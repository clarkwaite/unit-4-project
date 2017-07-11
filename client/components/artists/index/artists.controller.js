ArtistsController.$inject = ["artistsService", '$auth', "$stateParams", "$state"];

function ArtistsController(artistsService, $auth, $stateParams, $state) {
  const vm = this;
  vm.data = null;
  vm.artist = null;

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
    vm.artist = {
      name: artist.name,
      nationality: artist.country_of_origin,
      years_active: artist.decade,
      genre: artist.main_genre,
      musicgraph_id: artist.id,
      spotify_id: artist.spotify_id
    };
    vm.saveArtist().then(savedArtist => {
      $state.go('artist', { userId: $auth.user.id, artistId: savedArtist.id, name: savedArtist.name, artist: savedArtist })
    });
  }
  vm.saveArtist = function () {
    return artistsService.saveArtist(vm.artist)
  };

}

export default ArtistsController;
