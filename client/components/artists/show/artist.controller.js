ArtistController.$inject = ["artistsService", '$auth', '$state', "$stateParams", "$http"];

function ArtistController(artistsService, $auth, $state, $stateParams, $http) {
  const vm = this;
  vm.artist = {
    artist: $stateParams.artist
  };

  activate(); //run when the page loads

  function activate() {

  } //close Activate function

  vm.saveToFavorites = function () {
    console.log('button pressed')
    let userId = $stateParams.userId;
    let artistId = $stateParams.artistId;
    artistsService.saveToFavorites(artistId, userId)
      .then(res => {
        vm.favorite = res.data;
      })
      .catch(res => {
        console.log(res);
      });
  }

  vm.deleteFromFavorites = function () {
    artistsService.deleteFromFavorites(vm.favorite.id)
      .then(res => {
        console.log(res.data.message);
      })
      .catch(res => {
        console.log('error deleting favorite');
        console.log(res.data.error);
      })
  }


} //close Controller function


export default ArtistController;