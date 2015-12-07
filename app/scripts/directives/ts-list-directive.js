/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    /**
     * The TsList ist an editable Bootstrap 3 list written in TypeScript.
     * Entries can be added and removed
     */
    var TsList = (function () {
        function TsList() {
            this.templateUrl = 'views/ts-list-directive.html';
            this.restrict = 'A';
            this.scope = {
                service: '=tsList'
            };
        }
        TsList.prototype.controller = function ($scope) {
            console.log('[TS-List] directive controller, entries %o', $scope.list);
            $scope.addEntry = function (name) {
                console.debug('[TsList] uiAddEntry %s', name);
                $scope.service.create(name);
                $scope.newEntryName = "";
            };
            $scope.selectEntry = function (index) {
                //var id = $scope.service.list();
                console.debug('[TsList] selectEntry %o', index);
            };
            $scope.removeEntry = function (id) {
                console.debug('[TsList] removeEntry %s', id);
                $scope.service.remove(id);
            };
        };
        return TsList;
    })();
    angulartsApp.TsList = TsList;
    function tsListFactory() {
        return new angulartsApp.TsList();
    }
    angulartsApp.tsListFactory = tsListFactory;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').directive('tsList', angulartsApp.tsListFactory);
//# sourceMappingURL=ts-list-directive.js.map