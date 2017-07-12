const angular = require('angular');
require("angular-ui-router");
require("ng-token-auth");
require("angular-cookie");

angular
  .module("DiscoverSound", ["ui.router", "ipCookie", "ng-token-auth"])
  .config(router, auth);

auth.$inject = ["$authProvider"];
function auth($authProvider) {
  $authProvider.configure({
    apiUrl: '/',
    validateOnPageLoad: false
  });
}
router.$inject = ["$stateProvider", "$urlRouterProvider"];
function router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("signIn", {
      url: "/sign_in",
      template: "<sign-in></sign-in>"
    })
    .state("userRegistration", {
      url: "/user_registration",
      template: "<user-registration></user-registration>"
    })
    .state("home", {
      url: "/",
      template: "<discover-home></discover-home>",
       resolve: {
        auth: validateUser
      }
    })
    .state("artists", {
      url: "/users/:userId/artists",
      template: "<discover-artists></discover-artists>",
      resolve: {
        auth: validateUser
      }
    })
    .state("artist", {
      url: "/users/:userId/artists/:artistId",
      template: "<discover-artist></discover-artist>",
      params: { id: null, artist: null },
       resolve: {
        auth: validateUser
      }
    })
    .state("related", {
      url: "/users/:userId/artists/related",
      template: "<discover-related></discover-related>",
      params: { artist: null },
      resolve: {
        auth: validateUser
      }
    })
    .state("events", {
      url: "/users/:userId/events",
      template: "<discover-events></discover-events>",
      resolve: {
        auth: validateUser
      }
    })
    .state("favorites", {
      url: "/users/:userId/favorites",
      template: "<discover-favorites></discover-favorites>",
       resolve: {
        auth: validateUser
      }
    })

  $urlRouterProvider.otherwise("/");
}

validateUser.$inject = ["$auth"]
function validateUser($auth) {
  return $auth.validateUser();
}