angular.module("calApp")
    .controller('MainCtrl', function($scope, $location) {
		$scope.$path = $location.path.bind($location);        
    });



