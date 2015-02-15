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
//	var nowId = 0;

    if(data.size_top > 200) {
      return 1;
    }
    if(data.size_top > 100) {
      return 2;
    }
//    var i;
//	for(i=0;i<ns.userList.length;i++ ){
//		if(ns.userList[i].size_top == data.size_top && ns.userList[i].size_bottom == data.size_bottom){
//		    userId = ns.userList[i].id;
//			break;
//		}
//	}
    return userId;
  }

  app.detectUser = {
    analyze: analyze
  }
}(window.licker, window.licker.module));
