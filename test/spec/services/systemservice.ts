/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/systemservice.ts" />

'use strict';

describe('Service: SystemService', () => {

  // load the service's module
  beforeEach(module('angulartsApp'));

  // instantiate service
  var SystemService;
  beforeEach(inject(_SystemService_ => {
    SystemService = _SystemService_;
  }));

  it('should do something', () => {
    expect(!!SystemService).toBe(true);
  });

});
