window.licker = window.licker || {};
(function(ns) {
  'use strict';

  $(function() {
    init();

    ns.util.getClass('page-daily').hide();
    ns.util.getClass('goto-top').on('click', function() {
      ns.util.getClass('page-top').show();
      ns.util.getClass('page-daily').hide();
    });

    ns.util.getClass('goto-daily').on('click', function() {
      ns.util.getClass('page-top').hide();
      ns.util.getClass('page-daily').show();
    });

    $.getJSON('http://team-one.azurewebsites.net/api/users', function(json) {
      ns.userList = json;
      ns.page.top.update();
    });

  });

  function init() {
    ns.page.top.init();
    ns.page.daily.init();
  }
}(window.licker));
