/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/instance.ts" />

'use strict';

describe('Controller: InstanceCtrl', () => {

  // load the controller's module
  beforeEach(module('angulartsApp'));

  var InstanceCtrl: angulartsApp.InstanceCtrl,
    scope: angulartsApp.IInstanceScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    InstanceCtrl = $controller('InstanceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
