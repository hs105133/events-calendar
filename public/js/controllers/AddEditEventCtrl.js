angular.module("calApp")
    .controller("AddEditEventCtrl", function($scope, $routeParams, $location, EventService) {
        var eventId = $routeParams.eventId;
        $scope.event = {};
        $scope.event.startsAt = null;
        $scope.event.endsAt = null;
        $scope.startTime = null;
        $scope.endTime = null;


        if (eventId) {
            EventService.getEvent(eventId).success(function(res) {
                $scope.event = res;
                $scope.startTime = new Date(res.startsAt);
                $scope.endTime = new Date(res.endsAt);
            });
        }

        $scope.toggle = function($event, open) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope[open] = !$scope[open];
        };


        $scope.addEditEvent = function(event) {
            var startsdatetime = new Date($scope.event.startsAt.getFullYear(), $scope.event.startsAt.getMonth(), $scope.event.startsAt.getDate(), $scope.startTime.getHours(), $scope.startTime.getMinutes());
            var endsdatetime = new Date($scope.event.endsAt.getFullYear(), $scope.event.endsAt.getMonth(), $scope.event.endsAt.getDate(), $scope.endTime.getHours(), $scope.endTime.getMinutes());

            var data = {
                title: $scope.event.title,
                type: $scope.event.type,
                startsAt: startsdatetime,
                endsAt: endsdatetime
            };

            if (eventId) {
                EventService.updateEvent(eventId, data).success(function(res) {
                    $location.path("/events");
                });
            } else {
                EventService.addEvent(data).success(function(res) {
                    $location.path("/events");
                });
            }



        };
    });
