/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var RelationService = (function () {
        function RelationService() {
        }
        return RelationService;
    })();
    angulartsApp.RelationService = RelationService;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').service('Relation', angulartsApp.RelationService);
//# sourceMappingURL=relation-service.js.map