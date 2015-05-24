angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [ 
      {
       id: 0,
       name: 'Bautista Baltazar',
       lastText: 'API - Data Base - Programmer - Documenting',
       face: 'img/1.jpg'
      }, 
      {
       id: 1,
       name: 'Martinez Ivan',
       lastText: 'Designer - Programmer',
       face: 'img/2.jpg'
      },
      {
       id: 2,
       name: 'Rochin Javier',
       lastText: 'Documenting',
       face: 'img/3.png'
      },
      {
       id: 3,
       name: 'Santiago Enrique',
       lastText: 'API - Data Base - Programmer',
       face: 'img/4.jpg'
      }
];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
