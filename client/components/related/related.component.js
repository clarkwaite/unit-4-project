import RelatedController from "./related.controller";
import RelatedTemplate from "./related.html";

  const relatedComponent = {
  	controller: RelatedController,
  	template: RelatedTemplate
  };

  angular.module("DiscoverSound").component("discoverRelated", relatedComponent);