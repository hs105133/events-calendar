angular.module("calApp")
    .constant("BASE_URL", "https://hkapi.herokuapp.com/events/")
    .value("DateService", {
            currentYear: moment().year(),
            currentMonth: moment().month()
    })
    .service("EventService", function($http, BASE_URL) {

        this.allEvents = function(){
            return $http.get(BASE_URL);
        };

        this.getEvent = function(eventId){
            return $http.get(BASE_URL+ eventId);
        }

        this.addEvent = function(event){
            return $http.post(BASE_URL, event);
        };

        this.updateEvent = function(eventId, event){
            return $http.put(BASE_URL+eventId, event);
        };

        this.deleteEvent = function(eventId){
            return $http.delete(BASE_URL+eventId);
        };
    });
