/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/system.ts" />
'use strict';
describe('Controller: SystemCtrl', function () {
    // load the controller's module
    beforeEach(module('angulartsApp'));
    var SystemCtrl, scope;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        SystemCtrl = $controller('SystemCtrl', {
            $scope: scope
        });
    }));
    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});
//# sourceMappingURL=system.js.map