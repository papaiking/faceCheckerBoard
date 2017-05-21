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

    $urlRouterProvider.otherwise('/dashboard/home');

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
		var socket = io.connect('http://118.70.151.36:9100', {reconnect: true});

		// Whenever the server emits 'login', log the login message
		// socket.on('login', function (data) {
			// connected = true;
			// // Display the welcome message
			// //var message = "Welcome to Socket.IO – ";
			// console.log("Connected to server: " + data);
		// });
		
		return { 
			event_service_url: "http://118.70.151.36:9100/event/list/" + event_rows_limit,
			socket: socket
		};
	});
    
