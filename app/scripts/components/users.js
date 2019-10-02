'use strict';
angular.module('myAppApp')

.component('appUsers', {
    templateUrl: 'views/users.html',
    controller: function($http, APP, $state){
      let vm = this;
      vm.users = [];
      vm.$onInit = function(){
        getData();
      }

      function getData(){
        $http.get(APP.API_URL + '/users').then(function(response){
          vm.users = response.data;
        })
      }

      vm.addUser = function(){
        $state.go('userAdd');
      }

      vm.editUser = function(id){
        $state.go('userEdit', {id: id});
      }

      vm.deleteUser = function(id){
        $http.delete(APP.API_URL + '/users/' + id).then(function(response){
          if(response.status == 200){
            getData();
          }
        })
      }

    }
  })
