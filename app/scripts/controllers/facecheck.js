'use strict';
/**
 * @name controller: FaceCheck
 * @description: make controller for face checking in/out service
 * @author Thuc-Vu Xuan Thuc [thuc@labsofthings.com]
 * @date: May 17, 2017
 */

 angular.module('faceCheckerApp' )
    .controller('facecheck', ['$scope', '$http', '$compile', 'AppConfig', 
		function($scope, $http, $compile, AppConfig, $position ) {
    
        //console.log("Running in facecheck controller");

        $http.get(AppConfig.event_service_url).
            success(function(data) {
                //console.log (data);
                $scope.events = data;
            });
		
		var socket = AppConfig.socket;
		socket.on('New_Message', function (data) {
			//console.log("Message content: " + JSON.stringify(data));
			$scope.$apply(function () {
				$scope.events.splice(0, 0, data);				
			});
	 
/* 			var controllerElement = document.getElementById('FaceCheckList');
			var $scope = angular.element(controllerElement).scope();
			$scope.$apply(function() {
				$scope.facechecks.rows.push({"format":face.format, "faceid":face.faceid, "condifence":face.condifence, "isinsider":face.isInsider, "timestamp":face.timeStamp, "endpointid":face.endpointId});
				//console.log($scope.facechecks.rows);
			});
 */		});
		
    }]);