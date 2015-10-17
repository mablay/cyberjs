/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/system.ts" />

'use strict';

describe('Controller: SystemCtrl', () => {

  // load the controller's module
  beforeEach(module('angulartsApp'));

  var SystemCtrl: angulartsApp.SystemCtrl,
    scope: angulartsApp.ISystemScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    SystemCtrl = $controller('SystemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
