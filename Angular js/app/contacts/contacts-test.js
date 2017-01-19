'use strict';

describe('myApp.contacts module', function() {

  beforeEach(module('myApp.contacts'));

  describe('contacts controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('contactsCtrl');
      expect(contactsCtrl).toBeDefined();
    }));

  });
});