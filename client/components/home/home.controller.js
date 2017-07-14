HomeController.$inject = ["homeService", "favoritesService", "$auth", '$stateParams', '$state', '$http'];

function HomeController(homeService, favoritesService, $auth, $stateParams, $state, $http) {
  const vm = this;
  vm.user = $auth.user.id;

  activate();

  function activate() {
     return $http.get("/users/" + vm.user + "/favorites")
      .then(res => {
        console.log(res.data)
        return res.data;
      });
  }


}//close


export default HomeController;