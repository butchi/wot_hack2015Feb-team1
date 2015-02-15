window.licker = window.licker || {};
window.licker.page = window.licker.page || {};
(function(ns, app) {
  'use strict';

  var $page;
  var $user;
  var $user1;
  var $user2;

  function init() {
    $page = ns.util.getClass('page-top');

    $user = ns.util.findClass($page, 'user');
    $user1 = ns.util.findClass($page, 'user-1');

    $user.on('click', function(evt) {
      var id = $(evt.target).attr('data-id');
      ns.page.daily.update(id);
    });
  }

  /*
   */
  function update() {
    console.log(ns.userList);
    var userId = ns.module.detectUser.analyze();
    console.log(userId);
  }

  app.top = {
    init: init,
    update: update
  }
}(window.licker, window.licker.page));
