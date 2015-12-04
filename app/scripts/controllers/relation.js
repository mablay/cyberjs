/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var RelationCtrl = (function () {
        // @ngInject
        function RelationCtrl($scope) {
            this.$scope = $scope;
        }
        return RelationCtrl;
    })();
    angulartsApp.RelationCtrl = RelationCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp')
    .controller('RelationCtrl', angulartsApp.RelationCtrl);
//# sourceMappingURL=relation.js.map