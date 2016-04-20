/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  highlightedText
} from 'ghost/helpers/highlighted-text';

describe('Unit: Helper: highlighted-text', function() {

    it('works', function() {
        let result = highlightedText(['Test', 'e']);
        expect(result).to.be.an('object');
        expect(result.string).to.equal('T<span class="highlight">e</span>st');
    });
});
