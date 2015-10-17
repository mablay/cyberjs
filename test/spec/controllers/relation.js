/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/relation.ts" />
'use strict';
describe('Controller: RelationCtrl', function () {
    // load the controller's module
    beforeEach(module('angulartsApp'));
    var RelationCtrl, scope;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        RelationCtrl = $controller('RelationCtrl', {
            $scope: scope
        });
    }));
    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});
//# sourceMappingURL=relation.js.map