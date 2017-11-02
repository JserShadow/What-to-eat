'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      this.ctx.redirect('/public/index.html');
    }
  }
  return HomeController;
};
