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

    setInterval(function() {
      $.get('http://team-one.azurewebsites.net/api/current', function(json) {
        var userId = ns.module.detectUser.analyze(json);
        console.log(json);
        console.log(userId);

        if(userId) {
          $user1.text(ns.userList[userId - 1].name);
        } else {
          $user1.text('運転手なし');
        }
      });
    }, 2000);
  }

  /*
   */
  function update() {
  }

  app.top = {
    init: init,
    update: update
  }
}(window.licker, window.licker.page));
