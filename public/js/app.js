'use strict';

angular
  .module('calApp', ['mwl.calendar', 'ui.bootstrap', 'ngRoute', 'angular.filter'])
  .config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "views/home.html",
        controller: "HomeCtrl"
    })
    .when("/events", {
        templateUrl: "views/events.html",
        controller: "EventsCtrl"
    })
    .when("/events/create", {
        templateUrl: "views/add-edit-event.html",
        controller: "AddEditEventCtrl"
    })
    .when("/events/:eventId/edit", {
        templateUrl: "views/add-edit-event.html",
        controller: "AddEditEventCtrl"
    })
    .when("/group-events", {
        templateUrl: "views/group-events.html",
        controller: "GroupEventsCtrl"
    })
    .otherwise("/");
  });
