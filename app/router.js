'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/getRestaurant',app.controller.user.getRestaurant);
  app.get('/getOthers',app.controller.user.getOthers);
};
