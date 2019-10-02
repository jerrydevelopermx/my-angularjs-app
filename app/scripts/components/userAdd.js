'use strict';
angular.module('myAppApp')

.component('userAdd', {
    templateUrl: 'views/userAdd.html',
    controller: function($http, APP, $state){
      let vm = this;
      vm.user = {};
      vm.$onInit = function(){ }

      vm.save = function(){
        $http.post(APP.API_URL + '/users/', vm.user).then(function(response){
          if(response.status == 201) {
            $state.go('home')
          }
        })
      }
    }
  })
