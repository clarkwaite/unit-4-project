import favoritesController from "./favorites.controller";
import favoritesTemplate from './favorites.html';

const favoritesComponent = {
  controller: favoritesController,
  template: favoritesTemplate
};

angular.module("DiscoverSound").component("discoverFavorites", favoritesComponent);