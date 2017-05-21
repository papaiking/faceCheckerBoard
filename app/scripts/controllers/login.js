/**
 * @author Thuc-Vu Xuan Thuc [thuc@labsofthings.com]
 * @date May 17, 2017 - 10:27:55 AM
 * @purpose	login page
 * 
 */

angular.module('faceCheckerApp')
.controller('LoginController', function($scope) {
		
	  $scope.checkLogin = function () {
		  console.log('Email: ' + $scope.email);
		  console.log('Password: ' + $scope.password);

		  oauth2.user.login($scope.email, $scope.password, function (error) {
			  if (!error)
				window.location = 'index.html'
			  else {
				console.log(error)
			  }
		  })

	};
});

	  
