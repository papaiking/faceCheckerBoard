'use strict';
/**
 * @name controller: deviceCtrl
 * @description: controller for managing devices
 * @author Thuc-Vu Xuan Thuc [thuc@labsofthings.com]
 * @date: Jun 10, 2017
 */

 angular.module('faceCheckerApp' )
    .controller('deviceCtrl', ['$scope', '$http', '$compile', 'AppConfig', 
		function($scope, $http, $compile, AppConfig, $position ) {

		var device_list_url = AppConfig.device_list_url + "/0";
        $http.get(device_list_url).
            success(function(data) {
                console.log (data);
                $scope.devices = data;
            });
		
    }]);