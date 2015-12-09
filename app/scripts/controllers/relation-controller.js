/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var RelationCtrl = (function () {
        // @ngInject
        function RelationCtrl($state, RelationFactory, ParameterFactory) {
            var systemId = $state.params.systemId;
            console.debug('[RelationCtrl] systemId %s, parameterId %s', systemId, $state.params.relationId);
            this.relationService = RelationFactory(systemId);
            console.debug('[RelationCtrl] parameter %o', this.relationService);
            this.relation = this.relationService.read($state.params.relationId);
            console.debug('[RelationCtrl] data %o', this.relation);
            this.parameters = ParameterFactory(systemId).list();
        }
        return RelationCtrl;
    })();
    angulartsApp.RelationCtrl = RelationCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp')
    .controller('RelationCtrl', angulartsApp.RelationCtrl);
//# sourceMappingURL=relation-controller.js.map