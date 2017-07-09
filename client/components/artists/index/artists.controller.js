ArtistsController.$inject = ["artistsService"];

function ArtistsController(artistsService) {
  const vm = this;

  activate();

  function activate() {
  }

  vm.searchArtist = function () {

        // the new User object will be created by binding to the form inputs
        const artistSearched = { artist: vm.artist };
        //add a new user
        artistsService.searchArtist(artistSearched)
  }
}

export default ArtistsController;