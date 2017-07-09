import HomeController from "./home.controller";
import HomeTemplate from "./home.html";

  const homeComponent = {
  	controller: HomeController,
  	template: HomeTemplate
  };

  angular.module("DiscoverSound").component("discoverHome", homeComponent);