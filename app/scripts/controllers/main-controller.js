/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var MainCtrl = (function () {
        // @ngInject
        function MainCtrl(System) {
            this.systems = System;
        }
        return MainCtrl;
    })();
    angulartsApp.MainCtrl = MainCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('MainCtrl', angulartsApp.MainCtrl);
//# sourceMappingURL=main-controller.js.map