/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/todos.ts" />

'use strict';

describe('Controller: TodosCtrl', () => {

  // load the controller's module
  beforeEach(module('angulartsApp'));

  var TodosCtrl: angulartsApp.TodosCtrl,
    scope: angulartsApp.ITodosScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    TodosCtrl = $controller('TodosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
