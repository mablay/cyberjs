/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var ParameterCtrl = (function () {
        // @ngInject
        function ParameterCtrl() {
        }
        return ParameterCtrl;
    })();
    angulartsApp.ParameterCtrl = ParameterCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('ParameterCtrl', angulartsApp.ParameterCtrl);
//# sourceMappingURL=parameter.js.map