angular.module("calApp")
    .controller('EventsCtrl', function($scope, EventService) {
        
        EventService.allEvents().success(function(res) {
            $scope.events = res;
        });

        $scope.removeEvent = function(index, eventId) {
            EventService.deleteEvent(eventId).success(function(res) {
                $scope.events.splice(index, 1);
            });
        }
    });
