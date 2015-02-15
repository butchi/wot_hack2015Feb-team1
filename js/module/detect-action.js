window.licker = window.licker || {};
window.licker.module = window.licker.module || {};
(function(ns, app) {
  'use strict';


  /*
   *  アクティビティの取得
   */
  function analyze(data,usrId) {
    var actionArr;
	var size_top =0;
	var size_bottom =0;

	var rideOn = 100;
	var rideOff = -100;
	var breakOn = 200;

	for(var j=0;i<userList.length;i++ ){
		if(ns.userList[j].id == usrId){
			var size_top =ns.userList[j].size_top;
			var size_bottom =ns.userList[j].size_bottom;
			break;
		}
	}

	var beforeCondition = "";
	for(var i=0;data.lenght;i++){
		var sabun = data[nowId].size_top - size_top;
		var conditionStr = "";
		var itmArray = new array();
		switch(sabun)
		{
			case rideOn:
				conditionStr = "乗車しました。";
				break;
			case rideOff:
				conditionStr = "下車しました。";
				break;
			case breakOn:
				conditionStr = "急ブレーキをかけました。";
				break;

		}

		//前回状態で格納を判定
		if(conditionStr != beforeCondition){
			itmArray[0] = conditionStr;
			itmArray[1] = data[nowId].time;
			actionArr.push = itmArray;
		}
		beforeCondition = conditionStr;
	}
    return actionArr;
  }

  app.detectAction = {
    analyze: analyze
  }
}(window.licker, window.licker.module));
