ArtistsController.$inject = ["artistsService"];

function ArtistsController(artistsService) {
  const vm = this;

  activate();

  function activate() {
    artistsService.getAllArtists().then(response => {
      vm.artists = response;
    });
  }
}

export default ArtistsController;