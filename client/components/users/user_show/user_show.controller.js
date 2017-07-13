
User_ShowController.$inject = ['UsersService', '$state', '$stateParams'];
function User_ShowController(UsersService, $state, $stateParams){
  var vm = this;
  let userId = $stateParams.userId
  vm.user = null

  activate();

  function activate(){
    UsersService.getUser(userId)
    .then(response => {
      console.log(response)
      vm.user = response;
    })
    .catch(response => {
      console.log('error getting user');
      console.log(response);
    })
  }

  // vm.editUser = function() {
  //   UsersService.editUser(userId).then(
  //     function success(response) {
  //     $state.go("showUser");
  //     },
  //     function failure(response) {
  //       console.log('Failed to update');

  //     });
  // };

} //close


export default User_ShowController;
