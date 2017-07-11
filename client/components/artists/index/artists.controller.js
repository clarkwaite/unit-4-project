ArtistsController.$inject = ["artistsService", '$auth', "$stateParams", "$state"];

function ArtistsController(artistsService, $auth, $stateParams, $state) {
  const vm = this;
  vm.data = null;
  vm.artist= null;

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
    $state.go('artist', {userId: $auth.user.id, name: artist.name, artist: artist})
    vm.artist = {
    name: artist.name,
    nationality: artist.country_of_origin,
    years_active: artist.decade,
    genre: artist.main_genre,
    musicgraph_id: artist.id,
    spotify_id: artist.spotify_id
  };
    vm.saveArtist();
    console.log(artist)
  }
  vm.saveArtist = function () {
		artistsService.saveArtist(vm.artist).then((response) => {
			console.log(response);
		});
	};

}

export default ArtistsController;