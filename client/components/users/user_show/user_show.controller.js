
User_ShowController.$inject = ['UsersService', '$auth', '$state', '$stateParams'];
function User_ShowController(UsersService, $auth, $state, $stateParams){
  var vm = this;
  let userId = $stateParams.userId
  vm.currentUser = $auth.user;

  activate();

  function activate(){
    UsersService.getUser(userId)
    .then(response => {
      vm.user = response;
    })
    .catch(response => {
      console.log('error getting user');
      console.log(response);
    })
  }
}
export default User_ShowController;
