FavoritesController.$inject = ['favoritesService', '$auth', '$state', '$stateParams'];
function FavoritesController(favoritesService, $auth, $state, $stateParams){
  var vm = this;
  vm.currentUser = $auth.user;
  vm.favorites = [];
  //run when the page loads
  activate();

  function activate(){
    let userId = $stateParams.userId;
    favoritesService.getFavorites(userId)
    .then(response => {
      vm.favorites = response;
    })
    .catch(response => {
      console.log('error getting favorites');
      console.log(response);
    })
  }

vm.deleteFromFavorites = function (currentUser, favoriteArtistId) {
    favoritesService.deleteFromFavorites(favoriteArtistId)
      .then(res => {
        console.log(res.data.message);
      })
      .catch(res => {
        console.log('error deleting favorite');
        console.log(res.data.error);
      })
  }

}//controller close
export default FavoritesController;