'use strict';

var chai = require('chai')
  , expect = chai.expect;

var ImprintServiceModule = require('../../../app/js/service/imprint.js');

describe('The ImprintService', function() {

  var ImprintService;

  beforeEach(function() {
    ImprintService = new ImprintServiceModule();
  });

  it('should provide the imprint text', function() {
    var text = ImprintService.getText();
    expect(text.length).to.be.above(30);
  });

});
