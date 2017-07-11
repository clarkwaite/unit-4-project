FavoritesController.$inject = ['FavoritesService', '$auth', '$state', '$stateParams'];
function FavoritesController(FavoritesService, $auth, $state, $stateParams){
  vm.currentUser = $auth.user;
  var vm = this;
  vm.favorites = [];
  //run when the page loads
  activate();
  function activate(){
    let userId = $stateParams.userId;
    FavoritesService.getFavorites(userId)
    .then(response => {
      vm.favorites = response;
    })
    .catch(response => {
      console.log('error getting favorites');
      console.log(response);
    })
  }

}//controller close
export default FavoritesController;