/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var InstanceCtrl = (function () {
        // @ngInject
        function InstanceCtrl(Instance, System, $state) {
            if ($state.params.instanceId) {
                this.instanceService = Instance;
                this.instance = this.instanceService.read($state.params.instanceId);
                console.debug('[InstanceCtrl] constructor for %o', this.instance);
                this.system = System.read(this.instance.systemId);
            }
        }
        // returns state index
        InstanceCtrl.prototype.currentState = function () {
            var index = "0";
            return index;
        };
        return InstanceCtrl;
    })();
    angulartsApp.InstanceCtrl = InstanceCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('InstanceCtrl', angulartsApp.InstanceCtrl);
//# sourceMappingURL=instance-controller.js.map