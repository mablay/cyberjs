/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/parameter.ts" />

'use strict';

describe('Controller: ParameterCtrl', () => {

  // load the controller's module
  beforeEach(module('angulartsApp'));

  var ParameterCtrl: angulartsApp.ParameterCtrl,
    scope: angulartsApp.IParameterScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    ParameterCtrl = $controller('ParameterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
