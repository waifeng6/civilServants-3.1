'use strict';

describe('Directive: tmmodifypassword', function () {

  // load the directive's module
  beforeEach(module('luZhouApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tmmodifypassword></tmmodifypassword>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tmmodifypassword directive');
  }));
});
