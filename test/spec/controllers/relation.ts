/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/relation.ts" />

'use strict';

describe('Controller: RelationCtrl', () => {

  // load the controller's module
  beforeEach(module('angulartsApp'));

  var RelationCtrl: angulartsApp.RelationCtrl,
    scope: angulartsApp.IRelationScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    RelationCtrl = $controller('RelationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
