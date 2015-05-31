  
//this variables global
  var sistemas=0;
  var industrial=0;
  var administracion=0;
  var electromecanica=0;
  var electronica=0;
  var gestion=0;
  var mecatronica=0;
  var muestra1=0;
  var muestra2=0;
  var muestra3=0;
  var muestra4=0;
  var muestra5=0;
  var muestra6=0;
  var muestra7=0;
  //module ionic general
angular.module('ionicApp',['ionic'])
//routes of the tabs
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

.state('tabs.final', {
      url: "/final",
      views: {
        'about-tab': {
          templateUrl: "templates/final.html",  
          controller: 'nav'  
              
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

//controller of tab home
.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');

 }
)

//controller of the tab nav responsible for making all the logic test
.controller('nav', function($scope) {
  console.log('nav');



//function for get persentage
$scope.porcentaje=function porcentaje(){

muestra1=(sistemas*100)/49;
muestra2=(industrial*100)/49;
muestra3=(administracion*100)/49;
muestra4=(electromecanica*100)/49;
muestra5=(electronica*100)/49;
muestra6=(gestion*100)/49;
muestra7=(mecatronica*100)/49;



//alert(sistemas);

// Triggered on a button click, or some other target
document.getElementById("showme1").innerHTML = 'Ingenieria en sistemas:';
document.getElementById("showme2").innerHTML = muestra1;
document.getElementById("showme3").innerHTML = '%';
document.getElementById("showme4").innerHTML = 'Ingenieria mecatronica:';
document.getElementById("showme5").innerHTML = muestra7;
document.getElementById("showme6").innerHTML = '%';
document.getElementById("showme7").innerHTML = 'Ingenieria en gestion:';
document.getElementById("showme8").innerHTML = muestra6;
document.getElementById("showme9").innerHTML = '%';
document.getElementById("showme10").innerHTML = 'Ingenieria industrial:';
document.getElementById("showme11").innerHTML = muestra2;
document.getElementById("showme12").innerHTML = '%';
document.getElementById("showme13").innerHTML = 'Lic.Administracion:';
document.getElementById("showme14").innerHTML = muestra3;
document.getElementById("showme15").innerHTML = '%';
document.getElementById("showme16").innerHTML = 'Ingenieria electronica:';
document.getElementById("showme17").innerHTML = muestra5;
document.getElementById("showme18").innerHTML = '%';
document.getElementById("showme19").innerHTML = 'Ingenieria electromecanica:';
document.getElementById("showme20").innerHTML = muestra4;
document.getElementById("showme21").innerHTML = '%';

//alert(sistemas);
// Triggered on a button click, or some other target

  


}
/*
$scope.limpiar=function limpiar()

{
   document.getElementById("content").innerHTML="<output id='showme1'></output><output id='showme2'></output><output id='showme3'></output>";

}
*/


// function to sum every race reagents
 $scope.seleccion=function seleccion(carrera){

switch(carrera){

case 1:
sistemas++;
break;
case 2:
industrial++;
break;
case 3:
administracion++;
break;
case 4:
electromecanica++;
break;
case 5:
electronica++;
 break;
case 6:
gestion++;
break;
case 7:
mecatronica++;
break;
}

}


//array, the question with his id
$scope.preguntas=[

 {
       id: 1,
       pregun: 'Diseñar algoritmos e implementarlas como código de programación.',
       id_carrera: 1,
       image:"img/1.jpg"
      },
      {
       id: 2,
       pregun: 'Diagnosticar e Innovar sistemas electromecánicos en forma eficiente.',
       id_carrera: 2,
       image:'../img/2.jpg'
      },
      {
       id: 3,
       pregun: 'Realizar entrevistas para la sección de personal.',
       id_carrera: 3,
       image:'../img/3.jpg'
      },
      {
       id: 4,
       pregun: 'Conocer la resistencia de los materiales aislantes de electricidad.',
       id_carrera: 4,
       image:'../img/4.jpg'
      },
      {
       id: 5,
       pregun: 'Conocer los componentes de un aparato electrónico.',
       id_carrera: 5,
       image:'../img/5.jpg'
      },
      {
       id: 6,
       pregun: 'Diseñar sistemas estratégicos de negocios.',
       id_carrera: 6,
       image:'../img/6.jpg'
      },
      {
       id: 7,
       pregun: 'Analizar, interpretar, evaluar, diseñar y crear sistemas mecatrónicas.',
       id_carrera: 7,
       image:'../img/7.jpg'
      },
      {
       id: 8,
       pregun: 'Desarrollar aplicaciones para dispositivos móviles.',
       id_carrera: 1,
       image:'../img/8.jpg'
      },
      {
       id: 9,
       pregun: 'Idear aparatos para ser implementadas en empresas.',
       id_carrera: 2,
       image:'../img/9.jpg'
      },
      {
       id: 10,
       pregun: 'Adquirir la capacidad de enfrentar los retos del entorno empresarial.',
       id_carrera: 3,
       image:'../img/10.jpg'
      },
      {
       id: 11,
       pregun: 'Diseñar e instrumentar modelos novedosos para la distribución de energía eléctrica.',
       id_carrera: 4,
       image:'../img/11.jpg'
      },
      {
       id: 12,
       pregun: 'Diseñar sistemas de telecomunicación digital.',
       id_carrera: 5,
       image:'../img/12.jpg'
      },
      {
       id: 13,
       pregun: 'Diseñar y dirigir programas de capacitación para los empleados de una empresa.',
       id_carrera: 6,
       image:'../img/13.jpg'
      },
      {
       id: 14,
       pregun: 'Instalar, construir, optimizar, operar y controlar sistemas mecatrónicas.',
       id_carrera: 7,
       image:'../img/14.jpg'
      },
      {
       id: 15,
       pregun: 'Desarrollar y diseñar sistemas computacionales.',
       id_carrera: 1,
       image:'../img/15.jpg'
      },
      {
       id: 16,
       pregun: 'Desarrollar modelos matemáticos, estadísticos y de simulación',
       id_carrera: 2,
       image:'../img/16.jpg'
      },
      {
       id: 17,
       pregun: 'Analizar e interpretar información administrativa, económica, financiera, legal y social.',
       id_carrera: 3,
       image:'../img/17.jpg'
      },
      {
       id: 18,
       pregun: 'Diseñar y operar sistemas de control eléctrico.',
       id_carrera: 4,
       image:'../img/18.jpg'
      },
      {
       id: 19,
       pregun: 'Diseñar circuitos electrónicos con microcontroladores.',
       id_carrera: 5,
       image:'../img/19.jpg'
      },
      {
       id: 20,
       pregun: 'Gestionar modelos, procesos y sistemas empresariales.',
       id_carrera: 6,
       image:'../img/20.jpg'
      },
      {
       id: 21,
       pregun: 'Utilizar tecnologías eléctricas, electrónicas y herramientas computacionales.',
       id_carrera: 7,
       image:'../img/21.jpg'
      },
      {
       id: 22,
       pregun: 'Instalar y configurar diversos dispositivos de una red de cómputo.',
       id_carrera: 1,
       image:'../img/22.jpg'
      },
      {
       id: 23,
       pregun: 'Utilizar tecnología innovadora en empresas públicas o privadas.',
       id_carrera: 2,
       image:'../img/23.jpg'
      },
      {
       id: 24,
       pregun: 'Realizar compras, ventas y negocios a nivel internacional.',
       id_carrera: 3,
       image:'../img/24.jpg'
      },
      {
       id: 25,
       pregun: 'Implementar sistemas de mantenimiento eléctrico.',
       id_carrera: 4,
       image:'../img/25.jpg'
      },
       {id: 26,
       pregun: 'Integrar sistemas electrónicos en dispositivos.',
       id_carrera: 5,
       image:'../img/26.jpg'
      },
      {
       id: 27,
       pregun: 'Organizar proyectos de crecimiento empresarial.',
       id_carrera: 6,
       image:'../img/27.jpg'
      },
      {
       id: 28,
       pregun: 'Aplicar la robótica a la producción de bienes.',
       id_carrera: 7,
       image:'../img/28.jpg'
      },
      {
       id: 29,
       pregun: 'Desarrollar una página web con diferentes herramientas de programación.',
       id_carrera: 1,
       image:'../img/29.jpg'
      },
      {
       id: 30,
       pregun: 'Conocer los procesos y tecnologías usados en la elaboración de alimentos.',
       id_carrera: 2,
       image:'../img/30.jpg'
      },
      {
       id: 31,
       pregun: 'Analizar, diseñar, innovar, implementar y evaluar sistemas y modelos administrativos.',
       id_carrera: 3,
       image:'../img/31.jpg'
      },
      { id: 32,
       pregun: 'Desarrollar modelos de redes eléctricas eficientes y económicas.',
       id_carrera: 4,
       image:'../img/32.jpg'
      },
      {
       id: 33,
       pregun: 'Diagnosticar integralmente la situación electrónica de una empresa.',
       id_carrera: 5,
       image:'../img/33.jpg'
      },
      {
       id: 34,
       pregun: 'Gestionar la creación de negocios innovadores.',
       id_carrera: 6,
       image:'../img/34.jpg'
      },
      {
       id: 35,
       pregun: 'Interpretar información técnica de ingeniería mecánica y electrónica.',
       id_carrera: 7,
       image:'../img/35.jpg'
      },
       {id: 36,
       pregun: 'Solucionar problemas informáticos de software.',
       id_carrera: 1,
       image:'../img/36.jpg'
      },
      {
       id: 37,
       pregun: 'Realizar proyectos de procesos productivos',
       id_carrera: 2,
       image:'../img/37.jpg'
      },
      {
       id: 38,
       pregun: 'Evaluar operaciones empresariales como ventas, compras, costos, ganancias, etc',
       id_carrera: 3,
       image:'../img/38.jpg'
      },
      {
       id: 39,
       pregun: 'Desempeñarme en el area de mantenimiento tecnico en empresas de aire acondicionado y refrigeración',
       id_carrera: 4,
       image:'../img/39.jpg'
      },
      { id: 40,
       pregun: 'Diseñar y desarrollar proyectos electrónicos',
       id_carrera: 5,
       image:'../img/40.jpg'
      },
      {
       id: 41,
       pregun: 'Tener habilidad para la creación e innovación de una empresa',
       id_carrera: 6,
       image:'../img/41.jpg'
      },
      { id: 42,
       pregun: 'Identificar las vibraciones mecánicas y electromagnéticas',
       id_carrera: 7,
       image:'../img/42.jpg'
      },
      {
       id: 43,
       pregun: 'Desarrollar, diseñar y crear animaciones para juegos',
       id_carrera: 1,
       image:'../img/43.jpg'
      },
      { id: 44,
       pregun: 'Conocer y dirigir el proceso de elaboración de todo tipo de productos',
       id_carrera: 2,
       image:'../img/44.jpg'
      },
      {
       id: 45,
       pregun: 'Conocer las leyes en impuestos aplicables a las empresas',
       id_carrera: 3,
       image:'../img/45.jpg'
      },
      { id: 46,
       pregun: 'Cómo generar energía eléctrica a bajo costo',
       id_carrera: 4,
       image:'../img/46.jpg'
      },
      {
       id: 47,
       pregun: 'Programación lógica de controladores',
       id_carrera: 5,
       image:'../img/47.jpg'
      },
      {
       id: 48,
       pregun: 'Formular estrategias para disminuir costos en los precios de productos internacionales',
       id_carrera: 6,
       image:'../img/48.jpg'
      },
      {
       id: 49,
       pregun: 'Implementar proyectos mecánicos y electrónicos',
       id_carrera: 7,
       image:'../img/49.jpg'
      }
];

 


});

