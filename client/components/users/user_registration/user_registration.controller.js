UserRegistrationController.$inject = ['$auth', '$state'];

function UserRegistrationController($auth, $state){
  var vm = this;
  activate();

  function activate(){
  }

  vm.handleRegBtnClick = function(registrationForm) {
    $auth.submitRegistration(registrationForm)
      .then(function(response) {
        // handle success response
        console.log('successful registration: ');
        console.log(response);
        $state.go('home');
      })
      .catch(function(response) {
        // handle error response
        console.log('error with registration: ');
        console.log(response);
      });
    };


}
export default UserRegistrationController;