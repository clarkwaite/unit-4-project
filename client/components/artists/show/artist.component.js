import ArtistController from "./artist.controller";
import ArtistTemplate from "./artist.html";

  const artistComponent = {
  	controller: ArtistController,
    template: ArtistTemplate,
    bindings: {
      artist: '<'
    }
  };

  angular.module("DiscoverSound").component("discoverArtist", artistComponent);