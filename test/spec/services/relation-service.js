/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/relationservice.ts" />
'use strict';
describe('Service: relationService', function () {
    // load the service's module
    beforeEach(module('angulartsApp'));
    // instantiate service
    var relationService;
    beforeEach(inject(function (_relationService_) {
        relationService = _relationService_;
    }));
    it('should do something', function () {
        expect(!!relationService).toBe(true);
    });
});
//# sourceMappingURL=relation-service.js.map