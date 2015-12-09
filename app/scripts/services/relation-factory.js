/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    function relationFactory($localStorage) {
        return function (systemId) {
            if (!$localStorage.systems[systemId]) {
                console.warn('[relationFactory] Invalid System ID!');
                return null;
            }
            return new RelationService(systemId, $localStorage);
        };
    }
    angulartsApp.relationFactory = relationFactory;
    var RelationService = (function () {
        // @ngInject
        function RelationService(systemId, storage) {
            this.systemId = systemId;
            this.storage = storage;
            this.storage.systems[this.systemId].relations = this.storage.systems[this.systemId].relations || {};
            console.log('[RelationFactory] Create RelationService for system %s', this.systemId);
        }
        RelationService.prototype.list = function () {
            console.debug('[RelationService] list %o', this.systemId);
            return this.storage.systems[this.systemId].relations;
        };
        RelationService.prototype.create = function (opt) {
            console.debug('[RelationService] create %o', opt);
            // Default data
            var relation = {
                id: angulartsApp.randomId(),
                name: 'New System',
                description: null,
                domain: null,
                coDomain: null,
                data: []
            };
            if (typeof opt === 'string') {
                relation.name = opt;
            }
            else {
                relation = _.defaults(opt, relation);
            }
            // save relation
            this.storage.systems[this.systemId].relations[relation.id] = relation;
            return relation;
        };
        RelationService.prototype.read = function (id) {
            return this.storage.systems[this.systemId].relations[id];
        };
        RelationService.prototype.remove = function (id) {
            delete this.storage.systems[this.systemId].relations[id];
        };
        return RelationService;
    })();
    angulartsApp.RelationService = RelationService;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').service('RelationFactory', angulartsApp.relationFactory);
//# sourceMappingURL=relation-factory.js.map