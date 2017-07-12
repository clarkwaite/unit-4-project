const angular = require('angular');
require("angular-ui-router");
require("ng-token-auth");
require("angular-cookie");

angular.module("DiscoverSound", ["ui.router", "ipCookie", "ng-token-auth"])
  .config(router, function($authProvider) {
    $authProvider.configure({
      apiUrl: '/',
      validateOnPageLoad: false
    });
});

router.$inject = ["$stateProvider", "$urlRouterProvider"];
function router ($stateProvider, $urlRouterProvider) {
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
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
		})
		.state("artists", {
			url: "/users/:userId/artists",
			template: "<discover-artists></discover-artists>",
			resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
		})
		.state("artist", {
			url: "/users/:userId/artists/:artistId",
			template: "<discover-artist></discover-artist>",
			params: {id: null, artist: null},
			resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
		})
		.state("events", {
			url: "/users/:userId/events",
			template: "<discover-events></discover-events>",
			resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
		})
		.state("favorites", {
      url: "/users/:userId/favorites",
      template: "<discover-favorites></discover-favorites>",
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    })
		
	$urlRouterProvider.otherwise("/");
}