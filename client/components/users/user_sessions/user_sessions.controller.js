UserSessionsController.$inject = ['$auth', '$state'];

function UserSessionsController($auth, $state) {
  var vm = this;
  activate();

  function activate() {
  }

  vm.userLogin = function (loginForm) {
    $auth.submitLogin(loginForm)
      .then(function (response) {
        // handle success response
        vm.current_user_id = response.id;
        console.log('successful login');
        $state.go('home', { userId: vm.current_user_id });
      })
      .catch(function (response) {
        // handle error response
        console.log('error logging in: ');
        vm.loginErrorMessage = "Email/Password combination not found. Try again.";
      });
  };

}
export default UserSessionsController;

