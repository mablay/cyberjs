/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/parameter.ts" />

'use strict';

describe('Service: parameter', () => {

  // load the service's module
  beforeEach(module('angulartsApp'));

  // instantiate service
  var parameter;
  beforeEach(inject(_parameter_ => {
    parameter = _parameter_;
  }));

  it('should do something', () => {
    expect(!!parameter).toBe(true);
  });

});
