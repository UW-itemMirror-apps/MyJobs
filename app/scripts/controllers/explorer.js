'use strict';

/**
 * @ngdoc function
 * @name MyJobsApp.controller:ExplorerCtrl
 * @description
 * # ExplorerCtrl
 * Controller of the MyJobsApp
 */
angular.module('MyJobsApp').
controller('ExplorerCtrl', function ($scope, itemMirror) {
  	// starts everything up after dropbox loads
  	var init = itemMirror.initialize;
  	init.then(function() {
      $scope.mirror = itemMirror;
      $scope.associations = itemMirror.associations;
      $scope.selectedAssoc = null;

      // This needs to be called after the service updates the associations.
      // Angular doesn't watch the scope of the service's associations, so any
      // updates don't get propogated to the front end.
      function assocScopeUpdate() {
        $scope.associations = itemMirror.associations;
        $scope.selectedAssoc = null;
       }

      $scope.deleteAssoc = function(guid) {
        itemMirror.deleteAssociation(guid).
        then(assocScopeUpdate);
      };
              // Below code works when applied ngDraggable.js; can swap two folders.
              // add    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script> to index.html;
              // add    <script src="bower_components/ngDraggable/ngDraggable.js"></script> to index.html;
              // add ,'ngDraggable' to app.js as DI
              // add ng-drop="true" ng-drop-success="onDropComplete($index, $data,$event)" to ng-repeat row; 
              // add ng-drag="true" ng-drag-data="assoc" to association row;
              //  $scope.onDropComplete = function(index, obj, evt) {
              //      var otherObj = $scope.associations[index];
              //      var otherIndex = $scope.associations.indexOf(obj);
              //      $scope.associations[index] = obj;
              //      $scope.associations[otherIndex] = otherObj;
              //  };
//myapp.controller('sortableController', function ($scope) {
  var tmpList = [];
  
  for (var i = 1; i <= 6; i++){
    tmpList.push({
      text: 'Item ' + i,
      value: i
    });
  }
  
  $scope.list = tmpList;
  
  
  $scope.sortingLog = [];
  
  $scope.sortableOptions = {
    update: function(e, ui) {
      var logEntry = tmpList.map(function(i){
        return i.value;
      }).join(', ');
      $scope.sortingLog.push('Update: ' + logEntry);
    },
    stop: function(e, ui) {
      // this callback has the changed model
      var logEntry = tmpList.map(function(i){
        return i.value;
      }).join(', ');
      $scope.sortingLog.push('Stop: ' + logEntry);
    }
  };
//});


      $scope.navigate = function(guid) {
        itemMirror.navigateMirror(guid).
        then(assocScopeUpdate);
      };

      $scope.previous = function() {
        itemMirror.previous().
        then(assocScopeUpdate);
      };

      $scope.save = function() {
        itemMirror.save().
        then(assocScopeUpdate);
      };

      $scope.refresh = function() {
        itemMirror.refresh().
        then(assocScopeUpdate);
      };

      // Only one association is ever selected at a time. It has the boolean
      // selected property, to allow for unique styling
      $scope.select = function(assoc) {
        if ($scope.selectedAssoc) {
          $scope.selectedAssoc.selected = false;
        }
        $scope.selectedAssoc = assoc;
        $scope.selectedAssoc.selected = true;
      };

      // Phantom Creation Section

      // This is used to intially set the values, and reset them after we create a phantom.
      // We don't want the same information stuck in those boxes after creating them
      function resetPhantomRequest() {
        $scope.phantomRequest.displayText = '';
        $scope.phantomRequest.itemURI = '';
        $scope.phantomRequest.localItemRequested = false;
      }

      $scope.phantomRequest = {};
      resetPhantomRequest();

      $scope.createPhantom = function() {
        itemMirror.createAssociation($scope.phantomRequest).
        then( function() {
          switchToAssocEditor();
          assocScopeUpdate();
          resetPhantomRequest();
        });
      };

      // Folder Creation Section, nearly the exact same as the phanbom request,
      // with a few minor differences
      function resetFolderRequest() {
        $scope.folderRequest.displayText = '';
        $scope.folderRequest.localItem = '';
        $scope.folderRequest.isGroupingItem = true;
      }

      $scope.folderRequest = {};
      resetFolderRequest();

      $scope.createFolder = function() {
        itemMirror.createAssociation($scope.folderRequest).
        then( function() {
          switchToAssocEditor();
          assocScopeUpdate();
          resetFolderRequest();
        });
      };


      // default section for our editing panel
      function switchToAssocEditor() {
        $scope.editSection = 'assoc-editor';
      }

      switchToAssocEditor();

      // Function used to show display text succinctly
      $scope.matchFirstLn = function(str) {
        var first = /.*/;
        return first.exec(str)[0];
      };

    });
  });
