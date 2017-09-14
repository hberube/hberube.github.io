angular.module('main', ['ngRoute', 'core', 'maintenance'])
    .controller('adminCtrl', AdminCtrl)
    .controller('mainCtrl', MainCtrl)


  .config(function ($routeProvider) {
    $routeProvider.when('/leaders', {
      templateUrl: 'views/leaders.html',
      controller: 'leadersCtrl'
    });
    $routeProvider.when('/stats', {
      templateUrl: 'views/stats.html',
      controller: 'statsCtrl'
    });
    $routeProvider.when('/teams', {
      templateUrl: 'views/teams.html',
      controller: 'teamsCtrl'
    });
    $routeProvider.when('/injuries', {
            templateUrl: 'views/injuries.html',
            controller: 'injuriesCtrl'
        });
        $routeProvider.when('/live', {
            templateUrl: 'views/live.html',
            controller: 'liveCtrl'
        });
    $routeProvider.otherwise({
        templateUrl: 'views/leaders.html',
        controller: 'leadersCtrl'
    });
  });

function AdminCtrl($scope, currentSpot) {
  $scope.isActive = isActive;
  $scope.getTitle = getTitle;
  $scope.getActiveMenu = getActiveMenu;


  function isActive(menuId) {
    return currentSpot.getActiveMenu() == menuId;
  }

  function getTitle() {
    return currentSpot.getTitle();
  }

  function getActiveMenu() {
    return currentSpot.getActiveMenu();
  }

}

function MainCtrl(currentSpot) {
}



