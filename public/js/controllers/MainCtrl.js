angular.module("calApp")
    .controller('MainCtrl', function($scope, $location) {
    	$scope.navbarCollapsed = true;
		$scope.$path = $location.path.bind($location);        
    });



