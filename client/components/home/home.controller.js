HomeController.$inject = ["homeService", "$auth"];

function HomeController(homeService, $auth) {
  const vm = this;
  vm.user = $auth.user;

}

export default HomeController;