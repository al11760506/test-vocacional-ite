angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/facts.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })

     .state('tabs.facts3', {
      url: "/facts3",
      views: {
        'home-tab': {
          templateUrl: "templates/facts3.html"
        }
      }
    })
      .state('tabs.facts4', {
      url: "/facts4",
      views: {
        'home-tab': {
          templateUrl: "templates/facts4.html"
        }
      }
    })
       .state('tabs.facts5', {
      url: "/facts5",
      views: {
        'home-tab': {
          templateUrl: "templates/facts5.html"
        }
      }
    })
        .state('tabs.facts6', {
      url: "/facts6",
      views: {
        'home-tab': {
          templateUrl: "templates/facts6.html"
        }
      }
    })
         .state('tabs.facts7', {
      url: "/facts7",
      views: {
        'home-tab': {
          templateUrl: "templates/facts7.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});

function MyCtrl($scope, $ionicSlideBoxDelegate) {
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();

  }
}

