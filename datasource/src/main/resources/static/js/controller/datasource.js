'use strict';

var dataSourceMod = angular.module('dataSourceMod');

/** angular controller layer */
dataSourceMod.controller('DataSourceController', function($scope, $rootScope, TestService) {
    var self = this;
//    $scope.threadCount = $rootScope.threadCount;
    $scope.threads = "bla bla";
    $scope.startThreads = function(){
        console.log($scope.threadCount);
        TestService.startThreads($scope.threadCount)
            .then(
            function(d) {
                self.threads = d;
            },
            function(errResponse){
                console.error('Error while starting Threads');
            }
        );
    };

    //self.createUser = function(user){
    //    UserService.createUser(user)
    //        .then(
    //        self.fetchAllUsers,
    //        function(errResponse){
    //            console.error('Error while creating User.');
    //        }
    //    );
    //};
    //
    //self.updateUser = function(user, id){
    //    UserService.updateUser(user, id)
    //        .then(
    //        self.fetchAllUsers,
    //        function(errResponse){
    //            console.error('Error while updating User.');
    //        }
    //    );
    //};
    //
    //self.deleteUser = function(id){
    //    UserService.deleteUser(id)
    //        .then(
    //        self.fetchAllUsers,
    //        function(errResponse){
    //            console.error('Error while deleting User.');
    //        }
    //    );
    //};
    //
    //self.fetchAllUsers();
    //
    //self.submit = function() {
    //    if(self.user.id===null){
    //        console.log('Saving New User', self.user);
    //        self.createUser(self.user);
    //    }else{
    //        self.updateUser(self.user, self.user.id);
    //        console.log('User updated with id ', self.user.id);
    //    }
    //    self.reset();
    //};
    //
    //self.edit = function(id){
    //    console.log('id to be edited', id);
    //    for(var i = 0; i < self.users.length; i++){
    //        if(self.users[i].id === id) {
    //            self.user = angular.copy(self.users[i]);
    //            break;
    //        }
    //    }
    //};
    //
    //self.remove = function(id){
    //    console.log('id to be deleted', id);
    //    if(self.user.id === id) {//clean form if the user to be deleted is shown there.
    //        self.reset();
    //    }
    //    self.deleteUser(id);
    //};
    //
    //
    //self.reset = function(){
    //    self.user={id:null,username:'',address:'',email:''};
    //    $scope.myForm.$setPristine(); //reset Form
    //};
    //
});


dataSourceMod.controller('test1', function($scope, $rootScope) {

    $scope.users = [];
//    $rootScope.text = "";
//    $rootScope.threadCount = 7;
    $scope.threads = "bla bla";
//    $rootScope.baseurl = App.baseurl;
    $scope.date = new Date().toDateString();
//    $rootScope.name = 'test1';

    $scope.startThreads = function(){
        TestService.startThreads()
            .then(
            function(d) {
                self.threads = d;
            },
            function(errResponse){
                console.error('Error while starting Threads');
            }
        );
    };


});

