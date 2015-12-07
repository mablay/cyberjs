/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/relationservice.ts" />

'use strict';

describe('Service: relationService', () => {

  // load the service's module
  beforeEach(module('angulartsApp'));

  // instantiate service
  var relationService;
  beforeEach(inject(_relationService_ => {
    relationService = _relationService_;
  }));

  it('should do something', () => {
    expect(!!relationService).toBe(true);
  });

});
