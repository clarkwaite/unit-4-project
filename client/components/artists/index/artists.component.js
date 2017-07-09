import ArtistsController from "./artists.controller";
import ArtistsTemplate from "./artists.html";

  const artistsComponent = {
  	controller: ArtistsController,
  	template: ArtistsTemplate
  };

  angular.module("DiscoverSound").component("discoverArtists", artistsComponent);