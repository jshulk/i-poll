'use strict';

describe('Controller: PollCtrl', function () {

  // load the controller's module
  beforeEach(module('iPollApp'));

  var PollCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollCtrl = $controller('PollCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
