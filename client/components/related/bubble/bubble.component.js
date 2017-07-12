import BubbleController from "./bubble.controller";
import BubbleTemplate from "./bubble.html";

  const bubbleComponent = {
  	controller: BubbleController,
  	template: BubbleTemplate
  };

  angular.module("DiscoverSound").component("discoverBubble", bubbleComponent);