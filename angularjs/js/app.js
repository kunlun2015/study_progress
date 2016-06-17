/**
 * angularjs
 * @authors Amos
 * @date    2016-06-02 16:19:28
 * @copyright www.weipaidang.net
 */

var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
    $routeProvider
    .when('/', {template: 'myApp首页'})
    .when('/test1', {
        templateUrl: 'test1.html',
        controller: 'test1'
    })
    .when('/test2', {
        templateUrl: 'test2.html',
        controller: 'test2'
    })
    .when('/drag', {
        templateUrl: 'drag.html',
        controller: 'drag'
    })
    .otherwise({redirectTo:'/'});
})
myApp.controller('test1', function($scope, $http){
    $scope.message = 'test1页面';            
    $scope.$root.title = 'myAppTitle';
    $scope.items = [
        {name: 'Amos'},
        {name: 'Amos'},
        {name: 'Amos'},
        {name: 'Amos'}
    ];
    $scope.getData = function(){
        if($scope.curPage >= $scope.totalPage){
            return false;
        }        
        $http({
            method: 'post',
            url : 'test.php',
            data: {name: 'Amos', sex: '男', page: $scope.curPage+1}
        }).success(function(data){
            $scope.weeks = data;
            $scope.totalPage = 2;
            $scope.curPage = Number($scope.curPage ? $scope.curPage : 0) + 1;
        })
    }
    $scope.option = function($event){
        $event.target.getAttribute("week") = 'ok';
        console.log($event.target.getAttribute("week"));
    }
   
})
.controller('test2', function($scope){
    $scope.message = 'test2页面';            
    $scope.$root.title = 'myAppTitle2';
})
.controller('drag', function($scope){        
    $scope.$root.title = '拖拽测试';
}).
directive('draggable', function($document) {
    var startX=0, startY=0, x = 0, y = 0;
    return function(scope, element, attr) {
        element.css({
            position: 'relative',
            border: '1px solid red',
            backgroundColor: 'lightgrey',
            cursor: 'pointer'
        });
        element.bind('mousedown', function(event) {
            startX = event.screenX - x;
            startY = event.screenY - y;
            $document.bind('mousemove', mousemove);
            $document.bind('mouseup', mouseup);
        });

        function mousemove(event) {
            y = event.screenY - startY;
            x = event.screenX - startX;
            element.css({
                top: y + 'px',
                left:  x + 'px'
            });
        }

        function mouseup() {
            $document.unbind('mousemove', mousemove);
            $document.unbind('mouseup', mouseup);
        }
    }
 });