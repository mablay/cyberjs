/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/stateservice.ts" />

'use strict';

describe('Service: StateService', () => {

  // load the service's module
  beforeEach(module('angulartsApp'));

  // instantiate service
  var StateService;
  beforeEach(inject(_StateService_ => {
    StateService = _StateService_;
  }));

  it('should do something', () => {
    expect(!!StateService).toBe(true);
  });

});
