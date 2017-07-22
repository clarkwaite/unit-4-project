HeaderController.$inject = ['$auth', '$state'];
function HeaderController($auth, $state) {
  var vm = this;
  vm.currentUser = $auth.user;
  activate();

  function activate() {

    
  //   if (vm.currentUser.id === undefined) {
  //     $state.go('signIn')
  //   } else {
  //     $state.go('home')
  // }
}

vm.signOut = function () {
  $auth.signOut()
    .then(function (response) {
      console.log('successful sign out');
      console.log(response.status);
      $state.go('signIn');
    })
    .catch(function (response) {
      console.log('error signing out');
      console.log(response);
    })
}
}
export default HeaderController;