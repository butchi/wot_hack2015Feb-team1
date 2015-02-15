window.licker = window.licker || {};
window.licker.page = window.licker.page || {};
(function(ns, app) {
  'use strict';

  var $page;
  var $listEvent;

  function init() {
    $page = ns.util.getClass('page-daily');
    $listEvent = ns.util.findClass($page, 'list-event');

    $listEvent.attr('data-display', 'all');
    ns.util.findClass($page, 'filter-action').on('change', function(evt) {
      $listEvent.attr('data-display', evt.target.value);
    });
    
    update();
  }

  /*
   *  userId: user ID
   */
  function update(userId) {
    var $tmpl = $(ns.util.findClass($page, 'template-item-event').text());

    $listEvent.html('');

    $.get('http://team-one.azurewebsites.net/api/sample', function(json) {
      json.content.forEach(function(elm) {
        var $tmpEvent = $tmpl.clone();

        var timeStart = elm.time_start;
        var place = elm.place;
        var action = elm.action;

        var $timeStart = ns.util.findClass($tmpEvent, 'time-start');
        var $place = ns.util.findClass($tmpEvent, 'place');
        var $action = ns.util.findClass($tmpEvent, 'action');

        $tmpEvent.attr('data-time-start', timeStart);
        $tmpEvent.attr('data-place', place);
        $tmpEvent.attr('data-action', action);

        $timeStart.text(timeStart);
        $place.text(place);
        $action.text(action);

        $listEvent.append($tmpEvent);
      });
    });
  }

  app.daily = {
    init: init,
    update: update
  }
}(window.licker, window.licker.page));
