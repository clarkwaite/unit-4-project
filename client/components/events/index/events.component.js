import EventsController from "./events.controller";
import EventsTemplate from "./events.html";

  const eventsComponent = {
  	controller: EventsController,
  	template: EventsTemplate
  };

  angular.module("DiscoverSound").component("discoverEvents", eventsComponent);