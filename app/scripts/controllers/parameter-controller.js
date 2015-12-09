/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var ParameterCtrl = (function () {
        // @ngInject
        function ParameterCtrl($state, ParameterFactory) {
            console.debug('[ParameterCtrl] systemId %s, parameterId %s', $state.params.systemId, $state.params.parameterId);
            this.parameterService = ParameterFactory($state.params.systemId);
            console.debug('[ParameterCtrl] parameter %o', this.parameterService);
            this.parameter = this.parameterService.read($state.params.parameterId);
            console.debug('[ParameterCtrl] data %o', this.parameter);
        }
        return ParameterCtrl;
    })();
    angulartsApp.ParameterCtrl = ParameterCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('ParameterCtrl', angulartsApp.ParameterCtrl);
//# sourceMappingURL=parameter-controller.js.map