RelatedController.$inject = ['relatedService', '$auth', '$state', '$stateParams'];
function RelatedController(relatedService, $auth, $state, $stateParams){
  var vm = this;
  vm.currentUser = $auth.user;
  vm.relatedArtistId = $stateParams.artist.id;
  vm.userId = $stateParams.userId;
  vm.artistId = $stateParams.artistId;
  //run when the page loads
  activate();

  function activate(){
    console.log(vm.relatedArtistId)
  }

}//controller close
export default RelatedController;