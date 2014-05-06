'use strict';

module.exports = function($scope, ImprintService) {
  $scope.text = ImprintService.getText();
};
