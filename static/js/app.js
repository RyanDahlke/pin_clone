var app = angular.module("app", []);

app.controller("AppCtrl", function () {
    var app = this;

<div ng-repeat="pin in app.pins">
    {{pin.title}}
})