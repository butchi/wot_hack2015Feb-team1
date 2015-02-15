window.licker = window.licker || {};
window.licker.module = window.licker.module || {};
(function(ns, app) {
  'use strict';

  /*
   *  乗っているユーザーの取得
      return: ユーザーID
   */
  function analyze(data) {
    var userId = null;
	var nowId = 0;

    var i, j;
	nowId = data.length - 1;
	for(j=0;i<ns.userList.length;i++ ){
		if(ns.userList[j].size_top == data[nowId].size_top && ns.userList[j].size_bottom == data[nowId].size_bottom){
		    userId = ns.userList[j].id;
			break;
		}
	}
    return userId;
  }

  app.detectUser = {
    analyze: analyze
  }
}(window.licker, window.licker.module));
