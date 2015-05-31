  var sistemas=0;
  var industrial=0;
  var administracion=0;
  var electromecanica=0;
  var electronica=0;
  var gestion=0;
  var mecatronica=0;
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
          templateUrl: "templates/nav-stack.html",
          controller:'nav'
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

 }
)


.controller('nav', function($scope) {
  console.log('nav');

if($scope.id==5)
  showme=true;
else
  showme=false;


 $scope.seleccion=function seleccion(carrera){



if(carrera==1)
sistemas++;

if(carrera=2)
industrial++;

if(carrera=3)
administracion++;

if(carrera=4)
electromecanica++;

if(carrera=5)
 electronica++;
 
 if(carrera=6)
 gestion++; 

if(carrera=7)
  mecatronica++;

console.log(sistemas);
}




$scope.preguntas=[

 {
       id: 1,
       pregun: 'Diseñar algoritmos e implementarlas como código de programación.',
       id_carrera:1
      },
      {
       id: 2,
       pregun: 'Diagnosticar e Innovar sistemas electromecánicos en forma eficiente',
       id_carrera:2
      },
      {
       id: 3,
       pregun: 'Realizar entrevistas para la sección de personal',
       id_carrera:3
      },
      {
       id: 4,
       pregun: 'Conocer la resistencia de los materiales aislantes de electricidad',
       id_carrera: 4
      },
      {
       id: 5,
       pregun: 'Conocer los componentes de un aparato electrónico',
       id_carrera: 5
      },
      {
       id: 6,
       pregun: 'Diseñar sistemas estratégicos de negocios',
       id_carrera: 6
      },
      {
       id: 7,
       pregun: 'Analizar, interpretar, evaluar, diseñar y crear sistemas mecatrónicas',
       id_carrera: 7
      },
      {
       id: 8,
       pregun: 'Desarrollar aplicaciones para dispositivos móviles',
       id_carrera: 1
      },
      {
       id: 9,
       pregun: 'Idear aparatos para ser implementadas en empresas.',
       id_carrera: 2
      },
      {
       id: 10,
       pregun: 'Adquirir la capacidad de enfrentar los retos del entorno empresarial',
       id_carrera: 3
      },
      {
       id: 11,
       pregun: 'Conocer la resistencia de los materiales aislantes de electricidad',
       id_carrera: 4
      },
      {
       id: 12,
       pregun: 'Diseñar sistemas de telecomunicación digital',
       id_carrera: 5
      },
      {
       id: 13,
       pregun: 'Diseñar y dirigir programas de capacitación para los empleados de una empresa',
       id_carrera: 6
      },
      {
       id: 14,
       pregun: 'Instalar, construir, optimizar, operar y controlar sistemas mecatrónicas',
       id_carrera: 7
      },
      {
       id: 15,
       pregun: 'Desarrollar y diseñar sistemas computacionales',
       id_carrera: 1
      },
      {
       id: 16,
       pregun: 'Desarrollar modelos matemáticos, estadísticos y de simulación',
       id_carrera: 2
      },
      {
       id: 17,
       pregun: 'Analizar e interpretar información administrativa, económica, financiera, legal y social',
       id_carrera: 3
      },
      {
       id: 18,
       pregun: 'Diseñar y operar sistemas de control eléctrico',
       id_carrera: 4
      },
      {
       id: 19,
       pregun: 'Diseñar circuitos electrónicos con microcontroladores',
       id_carrera: 5
      },
      {
       id: 20,
       pregun: 'Gestionar modelos, procesos y sistemas empresariales',
       id_carrera: 6
      },
      {
       id: 21,
       pregun: 'Utilizar tecnologías eléctricas, electrónicas y herramientas computacionales',
       id_carrera: 7
      },
      {
       id: 22,
       pregun: 'Instalar y configurar diversos dispositivos de una red de cómputo',
       id_carrera: 1
      },
      {
       id: 23,
       pregun: 'Utilizar tecnología innovadora en empresas públicas o privadas',
       id_carrera: 2
      },
      {
       id: 24,
       pregun: 'Realizar compras, ventas y negocios a nivel internacional',
       id_carrera: 3
      },
      {
       id: 25,
       pregun: 'Diseñar y operar sistemas de control eléctrico',
       id_carrera: 4
      },
       {id: 26,
       pregun: 'Integrar sistemas electrónicos en dispositivos',
       id_carrera: 5
      },
      {
       id: 27,
       pregun: 'Organizar proyectos de crecimiento empresarial',
       id_carrera: 6
      },
       {id: 28,
       pregun: 'Aplicar la robótica a la producción de bienes',
       id_carrera: 7
      },
      {
       id: 29,
       pregun: 'Desarrollar una página web con diferentes herramientas de programación',
       id_carrera: 1
      },
       {id: 30,
       pregun: 'Conocer los procesos y tecnologías usados en la elaboración de alimentos',
       id_carrera: 2
      },
      {
       id: 31,
       pregun: 'Analizar, diseñar, innovar, implementar y evaluar sistemas y modelos administrativos',
       id_carrera: 3
      },
      { id: 32,
       pregun: 'Desarrollar modelos de redes eléctricas eficientes y económicas',
       id_carrera: 4
      },
      {
       id: 33,
       pregun: 'Diagnosticar integralmente la situación electrónica de una empresa',
       id_carrera: 5
      },
       {id: 34,
       pregun: 'Gestionar la creación de negocios innovadores',
       id_carrera: 6
      },
      {
       id: 35,
       pregun: 'Interpretar información técnica de ingeniería mecánica y electrónica',
       id_carrera: 7
      },
       {id: 36,
       pregun: 'Solucionar problemas informáticos de software',
       id_carrera: 1
      },
      {
       id: 37,
       pregun: 'Realizar proyectos de procesos productivos',
       id_carrera: 2
      },
       {id: 38,
       pregun: 'Evaluar operaciones empresariales como ventas, compras, costos, ganancias, etc',
       id_carrera: 3
      },
      {
       id: 39,
       pregun: 'Desempeñarme en empresas de aire acondicionado y refrigeración',
       id_carrera: 4
      },
      { id: 40,
       pregun: 'Diseñar y desarrollar proyectos electrónicos',
       id_carrera: 5
      },
      {
       id: 41,
       pregun: 'Tener habilidad para la creación e innovación de una empresa',
       id_carrera: 6
      },
      { id: 42,
       pregun: 'Identificar las vibraciones mecánicas y electromagnéticas',
       id_carrera: 7
      },
      {
       id: 43,
       pregun: 'Desarrollar, diseñar y crear animaciones para juegos',
       id_carrera: 1
      },
      { id: 44,
       pregun: 'Conocer y dirigir el proceso de elaboración de productos',
       id_carrera: 2
      },
      {
       id: 45,
       pregun: 'Conocer las leyes aplicables en impuestos a las empresas',
       id_carrera: 3
      },
      { id: 46,
       pregun: 'Cómo generar energía eléctrica a bajo costo',
       id_carrera: 4
      },
      {
       id: 47,
       pregun: 'Desempeñarme en empresas de aire acondicionado y refrigeración',
       id_carrera: 5
      },
       {id: 48,
       pregun: 'Formular estrategias para disminuir costos en los precios de productos internacionales',
       id_carrera: 6
      },
      {
       id: 49,
       pregun: 'Implementar proyectos mecánicos y electrónicos',
       id_carrera: 7
      }



];

 


});

function MyCtrl($scope, $ionicSlideBoxDelegate) {
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();

  }
}

