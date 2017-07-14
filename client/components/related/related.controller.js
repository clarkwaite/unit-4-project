RelatedController.$inject = ['relatedService', '$auth', '$state', '$stateParams'];
function RelatedController(relatedService, $auth, $state, $stateParams){
  const vm = this;
  vm.artistId = $stateParams.artist.id;
  vm.userId = $auth.user.id;
  console.log(vm.artistId)
  vm.related = null
  
  //run when the page loads
activate();

function activate() {

  relatedService.getRelatedArtists(vm.artistId)
    .then(response => {
      vm.related = response;
    })
    .catch(response => {
      console.log('error getting related artists');
      console.log(response);
    })

}

}//controller close

export default RelatedController;