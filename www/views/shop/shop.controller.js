(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'席鹏举',
        ab:'',
        name1:'席鹏举',
        phone:'15659795517',
        phone1:'15659795517',
        createTime:'2017-9-28 15:30:00',
        email:'1638973873@qq.com',
        hylx:'111'
      });
    });
  }])
})();
