'use strict';
/**
 * @name Face Checker application
 * @description: Surveillance board of face checker application 
 * @author Thuc-Vu Xuan Thuc [thuc@labsofthings.com]
 * Main module of the application.
 */
angular
  .module('faceCheckerApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/facecheck');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){

//            	//Check login status
          	    if (!oauth2.user.is_logged_in()) {
          	    	window.location = '#/login'
          	    }
            	
                return $ocLazyLoad.load(
                {
                    name:'faceCheckerApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
/*    
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'faceCheckerApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
*/
      .state('dashboard.facecheck',{
        url:'/facecheck',
        controller: 'facecheck',
        templateUrl:'views/dashboard/facecheck.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'faceCheckerApp',
              files:[
                'js/date.format.js',
                'scripts/controllers/facecheck.js'
              ]
            })
          }
        }
      })

      .state('dashboard.device',{
        url:'/device',
        controller: 'deviceCtrl',
        templateUrl:'views/dashboard/device.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'faceCheckerApp',
              files:[
                'js/date.format.js',
                'scripts/controllers/device.js'
              ]
            })
          }
        }
      })
	  
      .state('dashboard.chart',{
        url:'/chart',
        controller: 'Charts',
        templateUrl:'views/dashboard/charts.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'faceCheckerApp',
              files:[
                'scripts/controllers/charts.js'
              ]
            })
          }
        }
      })
      
      .state('login',{
          url:'/login',
          controlller: 'LoginController',
          templateUrl:'views/pages/login.html',
        resolve: {
            loadMyFiles:function($ocLazyLoad) {
                return $ocLazyLoad.load({
                  name:'faceCheckerApp',
                  files:[
                         'scripts/controllers/login.js'
                  ]
                })
             }
        }
    })
    
  }])
  
	.factory('AppConfig', function(){
		var event_rows_limit = 20;
		var device_rows_limit = 20;		
		var server_url = 'http://118.70.151.36:9100';
		var socket = io.connect(server_url, {reconnect: true});

		return { 
			event_service_url: server_url + "/event/list/" + event_rows_limit,
			device_list_url: server_url + "/device/list/" + device_rows_limit,
      device_add_url: server_url + "/device/add",
      device_info_url: server_url + "/device/info/",
      device_delete_url: server_url + "/device/delete/",
      device_update_url: server_url + "/device/update",
			socket: socket
		};
	});
    
