/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/instance.ts" />
'use strict';
describe('Controller: InstanceCtrl', function () {
    // load the controller's module
    beforeEach(module('angulartsApp'));
    var InstanceCtrl, scope;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        InstanceCtrl = $controller('InstanceCtrl', {
            $scope: scope
        });
    }));
    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});
//# sourceMappingURL=instance.js.map