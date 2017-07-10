import headerController from "./header.controller";
import headerTemplate from './header.html';

const headerComponent = {
  controller: headerController,
  template: headerTemplate
};

angular.module("DiscoverSound").component("discoverNav", headerComponent);