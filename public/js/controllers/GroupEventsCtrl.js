angular.module("calApp")
    .controller('GroupEventsCtrl', function($scope, EventService) {

        EventService.allEvents().success(function(res) {
            $scope.events = res;
            $scope.groupByModel = "title";
        });        

    });
