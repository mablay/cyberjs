/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/instanceservice.ts" />

'use strict';

describe('Service: InstanceService', () => {

  // load the service's module
  beforeEach(module('angulartsApp'));

  // instantiate service
  var InstanceService;
  beforeEach(inject(_InstanceService_ => {
    InstanceService = _InstanceService_;
  }));

  it('should do something', () => {
    expect(!!InstanceService).toBe(true);
  });

});
