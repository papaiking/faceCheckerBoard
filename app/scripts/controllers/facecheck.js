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
	 
		});
		
		$scope.openEvidence = function(id) {
			$scope.evidence = id;
		}
		
		$scope.openProfile = function(id) {
			var user_id = $scope.events[id].user_id;
			//console.log('User Id is: ' + user_id);

			$http.get(AppConfig.user_profile_url + user_id).
				success(function(data) {
					console.log (data);
					$scope.profile = data;
				});

		}
		
    }]);