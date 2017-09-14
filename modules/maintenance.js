angular.module('maintenance', [])
  .controller('leadersCtrl', LeadersCtrl)
  .controller('statsCtrl', StatsCtrl)
  .controller('teamsCtrl', TeamsCtrl)
    .controller('liveCtrl', LiveCtrl)
  .controller('injuriesCtrl', InjuriesCtrl)
  ;

function LeadersCtrl($scope,$interval, $route ,$window, $http){//(currentSpot, $http, $scope) {

    liveDataUpdate($scope, $http);


 //   $http.get('json/leaders.json').success(function(data) {
 //       $scope.pool = data;
 //   });

    $scope.chartVisible = true;

    $scope.toggleChart = function() {
        $scope.chartVisible = !$scope.chartVisible;
        return $scope.chartVisible;
    }

    //Put in interval, first trigger after 10 seconds
    $interval(function(){
        //$window.location.href("http://lapresse.ca");
        //$route.reload();
        liveDataUpdate($scope, $http);
        refreshGraph();
    }.bind(this), 60000);

}

function TeamsCtrl($scope,$interval, $route ,$window, $http) {

    liveDataUpdate($scope, $http);

    //Put in interval, first trigger after 10 seconds
    $interval(function(){
        //$window.location.href("http://lapresse.ca");
        //$route.reload();
        liveDataUpdate($scope, $http);
        refreshGraph();
    }.bind(this), 60000);

}

function StatsCtrl(currentSpot, $http, $scope) {
    $http.get('json/best.defenses.json').success(function (data) {
        $scope.bestDefenses = data;
    });
    $http.get('json/best.forwards.json').success(function (data) {
        $scope.bestForwards = data;
    });
    $http.get('json/best.goalies.json').success(function (data) {
        $scope.bestGoalies = data;
    });
    $scope.getNumber = function(num) {
        return new Array(num);
    }

}

function InjuriesCtrl(currentSpot, $http, $scope) {
    $http.get('json/injuries.json').success(function(data) {
        $scope.injuries = data;
    });
}

function LiveCtrl($scope,$interval, $route ,$window, $http){

    liveDataUpdate($scope, $http);

    $scope.chartVisible = true;

    $scope.toggleChart = function() {
        $scope.chartVisible = !$scope.chartVisible;
        return $scope.chartVisible;
    }

    //Put in interval, first trigger after 10 seconds
    $interval(function(){
        //$window.location.href("http://lapresse.ca");
        //$route.reload();
        liveDataUpdate($scope, $http);
        refreshGraph();
    }.bind(this), 60000);

}

function liveDataUpdate($scope, $http) {
    $http.get('json/live.poolers.json').success(function (data) {
        $scope.liveTeams = data;
    });

    $http.get('json/teams.json').success(function(data) {
        $scope.teams = data;
    });


    $http.get('json/live.skaters.json').success(function (data) {
        $scope.liveSkaters = data;
    });

    $http.get('json/live.goalies.json').success(function (data) {
        $scope.liveGoalies = data;
    });

    $http.get('json/live.games.json').success(function (data) {
        $scope.liveGames = data;
    });

    $http.get('json/leaders.json').success(function(data) {
        $scope.pool = data;
    });
}




