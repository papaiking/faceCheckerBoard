'use strict';
/**
 * @name controller: deviceCtrl
 * @description: controller for managing devices
 * @author Thuc-Vu Xuan Thuc [thuc@labsofthings.com]
 * @date: Jun 10, 2017
 */

 angular.module('faceCheckerApp' )
    .controller('deviceCtrl', ['$scope', '$http', '$compile', '$modal', 'AppConfig', 
		function($scope, $http, $compile, $modal, AppConfig, $position ) {
        $scope.devices = {};
        $scope.device = {};
        $scope.data = {id: '', address: '', about: ''};
        $scope.process = '';
        $scope.title = '';
        $scope.button = '';

        //list devices
        $scope.loadDevices = function(){
            var device_list_url = AppConfig.device_list_url + "/0";
            $http.get(device_list_url).
            success(function(data) {
                //console.log (data);
                $scope.devices = data;
            });
        };
        $scope.loadDevices();

        $scope.openModalDevice = function(){
            $scope.modalInstance = $modal.open({
                templateUrl: 'deviceModal.tmpl.html',
                scope:$scope
            });
        }
        $scope.closeDevice = function(){
            $scope.modalInstance.dismiss();
            $scope.data = {id: '', address: '', about: ''};
            $scope.process = '';
            $scope.title = '';
            $scope.button = '';
        };
        $scope.openModalConfirm = function(){
            $scope.modalInstanceConfirm = $modal.open({
                templateUrl: 'confirmModal.tmpl.html',
                scope:$scope
            });
        }
        $scope.closeConfirm = function(){
            $scope.modalInstanceConfirm.dismiss();
            $scope.data = {id: '', address: '', about: ''};
        };
        //add device
        $scope.addDevice = function(){
            $scope.process = 'add';
            $scope.title = 'Add Device';
            $scope.button = 'Add';
            $scope.openModalDevice();
        };
        //update device
        $scope.updateDevice = function(device){
            $scope.process = 'update';
            $scope.title = 'Update Device';
            $scope.button = 'Update';
            $scope.data.id = device.id;
            $scope.data.address = device.address;
            $scope.data.about = device.about;
            $scope.openModalDevice();
        };
        
		//process device
        $scope.processDevice = function(){
            //console.log('device', $scope.data);
            //console.log('process', $scope.process);
            if($scope.data.address == '' || $scope.data.about == ''){
                alert("Address or About not blank!");
                return false;
            }
            //console.log('param', $scope.data);
            //add
            if($scope.process === 'add'){
                $http({
                    method: 'POST',
                    url: AppConfig.device_add_url,
                    data: JSON.stringify($scope.data),
                    headers: { 'Content-Type': 'application/json'},
                    transformRequest: angular.identity
                }).
                success(function(data, status, headers, config) {
                    //console.log(data);
                    $scope.closeDevice();
                    $scope.loadDevices();
                }).
                error(function(data, status, headers, config) {
                    console.log('add error', data);
                });
            }
            //update
            else if($scope.process === 'update'){
                $http({
                    method: 'POST',
                    url: AppConfig.device_update_url,
                    data: JSON.stringify($scope.data),
                    headers: { 'Content-Type': 'application/json'},
                    transformRequest: angular.identity
                }).
                success(function(data, status, headers, config) {
                    //console.log(data);
                    $scope.closeDevice();
                    $scope.loadDevices();
                }).
                error(function(data, status, headers, config) {
                    console.log('add error', data);
                });
            }
        };

        //view device
        $scope.viewDevice = function(device){
            $scope.device = device;
            $scope.modalInstanceView = $modal.open({
                templateUrl: 'viewModal.tmpl.html',
                scope:$scope,
                size: 'lg'
            });
        }
        $scope.closeView = function(){
            $scope.modalInstanceView.dismiss();
            $scope.device = {};
        }
        //delete device
        $scope.confirmDelete = function(device){
            $scope.data.id = device.id;
            $scope.openModalConfirm();
        }
        $scope.delete = function(){
            $http.get(AppConfig.device_delete_url + $scope.data.id).
            success(function(data) {
                //console.log (data);
                $scope.closeConfirm();
                $scope.loadDevices();
            });
        }
    }]);