/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  /**
   * The TsList ist an editable Bootstrap 3 list written in TypeScript.
   * Entries can be added and removed
   */
  export class TsList implements ng.IDirective {
    templateUrl = 'views/ts-list-directive.html';
    restrict = 'A';
    scope = {
      service: '=tsList'
    };

    controller($scope: any): void {
      console.log('[TS-List] directive controller, entries %o', $scope.list);
      $scope.addEntry = function(name:string) {
        console.debug('[TsList] uiAddEntry %s', name);
        $scope.service.create(name);
        $scope.newEntryName = "";
      };

      $scope.selectEntry = function(index:string) {
        //var id = $scope.service.list();
        console.debug('[TsList] selectEntry %o', index);

      };

      $scope.removeEntry = function(id:string) {
        console.debug('[TsList] removeEntry %s', id);
        $scope.service.remove(id);
      };

    }
  }

  export function tsListFactory() {
    return new angulartsApp.TsList();
  }

}

angular.module('angulartsApp').directive('tsList', angulartsApp.tsListFactory);
