
import User_ShowController from "./user_show.controller";
import User_ShowTemplate from './user_show.html';

const User_ShowComponent = {
  controller: User_ShowController,
  template: User_ShowTemplate
};

angular.module("DiscoverSound").component("userShow", User_ShowComponent);