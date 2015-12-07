/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/parameterfactory.ts" />

'use strict';

describe('Service: parameterFactory', () => {

  // load the service's module
  beforeEach(module('angulartsApp'));

  // instantiate service
  var parameterFactory;
  beforeEach(inject(_parameterFactory_ => {
    parameterFactory = _parameterFactory_;
  }));

  it('should do something', () => {
    expect(!!parameterFactory).toBe(true);
  });

});
