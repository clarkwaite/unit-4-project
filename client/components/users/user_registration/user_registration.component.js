import UserRegistrationController from "./user_registration.controller";
import UserRegistrationTemplate from './user_registration.html';

const UserRegistrationComponent = {
  controller: UserRegistrationController,
  template: UserRegistrationTemplate
};

angular.module("DiscoverSound").component("userRegistration", UserRegistrationComponent);