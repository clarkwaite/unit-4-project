FavoritesController.$inject = ['favoritesService', '$auth', '$state', '$stateParams'];
function FavoritesController(favoritesService, $auth, $state, $stateParams){
  var vm = this;
  vm.currentUserId = $stateParams.userId;
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

vm.deleteFromFavorites = function (favoriteArtistId) {
    favoritesService.deleteFromFavorites(vm.currentUserId, favoriteArtistId)
      .then(res => {
        console.log(res.data.message);
        activate()
      })
      .catch(res => {
        console.log('error deleting favorite');
      })
  }

}//controller close
export default FavoritesController;