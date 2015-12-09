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
            return new RelationFactory(systemId, $localStorage);
        };
    }
    angulartsApp.relationFactory = relationFactory;
    var RelationFactory = (function () {
        // @ngInject
        function RelationFactory(systemId, storage) {
            this.systemId = systemId;
            this.storage = storage;
            this.storage.systems[this.systemId].relations = this.storage.systems[this.systemId].relations || {};
            console.log('[RelationFactory] Create RelationService for system %s', this.systemId);
        }
        RelationFactory.prototype.list = function () {
            console.debug('[RelationFactory] list %o', this.systemId);
            return this.storage.systems[this.systemId].relations;
        };
        RelationFactory.prototype.create = function (opt) {
            console.debug('[RelationFactory] create %o', opt);
            // Default data
            var relation = {
                id: angulartsApp.randomId(),
                name: 'New System',
                description: '',
                min: 0,
                max: 100,
                default: 10
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
        RelationFactory.prototype.read = function (id) {
            return this.storage.relations[id];
        };
        RelationFactory.prototype.remove = function (id) {
            delete this.storage.relations[id];
        };
        return RelationFactory;
    })();
    angulartsApp.RelationFactory = RelationFactory;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').service('RelationFactory', angulartsApp.relationFactory);
//# sourceMappingURL=relation-factory.js.map