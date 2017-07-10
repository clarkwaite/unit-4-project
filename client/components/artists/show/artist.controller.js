ArtistController.$inject = ["artistsService", '$state', "$stateParams", "$http"];

function ArtistController(artistsService, $state, $stateParams, $http) {
  const vm = this;
  vm.artist = {
  artist: $stateParams.artist
  };
  
  activate(); //run when the page loads

  function activate() {
    // vm.searchArtist = function () {
    //   const artistShown = { artist: $state.params.name };
    //   console.log($state.params.name)
    //   //add a new user
    //   artistsService.showArtist(artistShown).then(function (res) {
    //     console.log(".then res from artists controller is ", res);
    //     vm.showArtist = res;
    //   })
    // }
    // vm.searchArtist()
  } //close Activate function


} //close Controller function


export default ArtistController;