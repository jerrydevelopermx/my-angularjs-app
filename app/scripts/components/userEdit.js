'use strict';
angular.module('myAngAppApp')

.component('userEdit', {
    templateUrl: 'views/userEdit.html',
    controller: function($http, APP, $stateParams, $state){
      let vm = this;
      vm.user = {};
      vm.$onInit = function(){
        getData();
      }

      function getData(){
        $http.get(APP.API_URL + '/users/' + $stateParams.id).then(function(response){
          vm.user = response.data;
        })
      }

      vm.save = function(){
        $http.put(APP.API_URL + '/users/' + $stateParams.id, vm.user).then(function(response){
          if(response.status == 200) {
            $state.go('home')
          }
        })
      };

    }
  })
