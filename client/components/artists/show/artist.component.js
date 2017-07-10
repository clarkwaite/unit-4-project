import ArtistController from "./artist.controller";
import ArtistTemplate from "./artist.html";

  const artistComponent = {
  	controller: ArtistController,
  	template: ArtistTemplate
  };

  angular.module("DiscoverSound").component("discoverArtist", artistComponent);