/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var TodosCtrl = (function () {
        // @ngInject
        function TodosCtrl($scope) {
            this.$scope = $scope;
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
        return TodosCtrl;
    })();
    angulartsApp.TodosCtrl = TodosCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('TodosCtrl', angulartsApp.TodosCtrl);
//# sourceMappingURL=todos.js.map