UserRegistrationController.$inject = ['$auth', '$state'];

function UserRegistrationController($auth, $state){
  var vm = this;
  activate();

  function activate(){
  }

  vm.registrationSubmitted = function(registrationForm) {
    $auth.submitRegistration(registrationForm)
      .then(function(response) {
        // handle success response
        console.log('successful registration: ');
        $state.go('home', { userId: response.data.id });
      })
      .catch(function(response) {
        // handle error response
        console.log('error with registration: ');
        if(response.data.errors.full_messages) {
          vm.registrationErrorMessage = response.data.errors.full_messages[0];
        }
      });
    };


}
export default UserRegistrationController;
