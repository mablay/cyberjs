/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var InstanceCtrl = (function () {
        // @ngInject
        function InstanceCtrl(InstanceFactory, $state) {
            if ($state.params.instanceId) {
                this.instance = InstanceFactory($state.params.instanceId);
                console.debug('[InstanceCtrl] constructor for %o', this.instance);
            }
        }
        return InstanceCtrl;
    })();
    angulartsApp.InstanceCtrl = InstanceCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('InstanceCtrl', angulartsApp.InstanceCtrl);
//# sourceMappingURL=instance-controller.js.map