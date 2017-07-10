ArtistsController.$inject = ["artistsService"];

function ArtistsController(artistsService) {
  const vm = this;
  vm.data = null;

  activate();

  function activate() {
  }

 vm.searchArtist = function () {

        // the new User object will be created by binding to the form inputs
        const artistSearched = { artist: vm.artist };
        //add a new user
        artistsService.searchArtist(artistSearched).then(function(res){
          console.log(".then resp from artists controller is " , res);
          vm.data = res;
        })
  }
}

export default ArtistsController;