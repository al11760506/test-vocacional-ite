angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})
.controller('PopupCtrl', function($scope, $ionicPopup){

  	$scope.showAlert = function(){
		var alertPoput = $ionicPopup.alert({
			title:'Enviar',
			template: 'Se enviara a evaluacion'
		});
		alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
	};
    $scope.LoginName = function(){
       $ionicPopup.prompt({
         title:'Autentificate',
         subTitle: 'Ingrese su Nombre'
       })
    };
});
