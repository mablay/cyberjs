/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/directives/tslist.ts" />

'use strict';

describe('Directive: tsList', () => {

  // load the directive's module
  beforeEach(module('angulartsApp'));

  var element: JQuery,
    scope: ng.IScope;

  beforeEach(inject(($rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(($compile: ng.ICompileService) => {
    element = angular.element('<ts-list></ts-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tsList directive');
  }));
});
