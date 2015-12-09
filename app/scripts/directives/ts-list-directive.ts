/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  /**
   * The TsList ist an editable Bootstrap 3 list written in TypeScript.
   * Entries can be added and removed
   */
  export class TsList implements ng.IDirective {

    static EVENT_SELECT = 'TsListSelect';
    static EVENT_ADD = 'TsListAdd';
    static EVENT_REMOVE = 'TsListRemove';

    templateUrl = 'views/ts-list-directive.html';
    restrict = 'A';
    scope = {
      service: '=tsList',
      route: '@',
      onSelect: '=onSelect'
    };

    controller($scope: any, $state): void {
      // The service model provided in the tsList attribute is expected to have methods:
      // list(), create(name), remove(id)

      //console.log('[TS-List] directive controller, entries %o', $scope.service);
      $scope.list = $scope.service.list() || {};

      $scope.addEntry = function(name:string) {
        //console.debug('[TsList] uiAddEntry %s', name);
        var entry = $scope.service.create(name);
        $scope.list[entry.id] = entry;
        $scope.newEntryName = "";
      };

      $scope.selectEntry = function(id:string) {
        console.debug('[TsList] selectEntry %s, route %o', id, $scope.route);
        $scope.$emit(TsList.EVENT_SELECT, {
          route: $scope.route,
          id: id
        });
      };

      $scope.removeEntry = function(id:string) {
        //console.debug('[TsList] removeEntry %s', id);
        $scope.service.remove(id);
        delete $scope.list[id];
      };

    }
  }

  export function tsListFactory() {
    return new angulartsApp.TsList();
  }

}

angular.module('angulartsApp').directive('tsList', angulartsApp.tsListFactory);
