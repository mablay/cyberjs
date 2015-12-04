/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var MainCtrl = (function () {
        // @ngInject
        function MainCtrl($localStorage) {
            this.systems = new angulartsApp.SystemData($localStorage);
        }
        return MainCtrl;
    })();
    angulartsApp.MainCtrl = MainCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('MainCtrl', angulartsApp.MainCtrl);
//# sourceMappingURL=main.js.map