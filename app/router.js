'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/getRestaurant',app.controller.user.getRestaurant);
};
