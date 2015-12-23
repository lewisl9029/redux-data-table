import { expect } from 'chai';
import { isPartialMatch, getBeginningIndex, getEndingIndex } from './data-table';

describe('table filtering function', () => {
  it('should be able to match partial strings', () => {
    expect(
      isPartialMatch('haystack needle haystack', 'needle ')
    ).to.be.true;
  });

  it('should be able to match any string against empty string filter', () => {
		expect(
      isPartialMatch('haystack needle haystack', '')
    ).to.be.true;
		
		expect(
      isPartialMatch('', '')
    ).to.be.true;
  });
	
	it('should be able to match partial strings case-insensitively', () => {
		expect(
      isPartialMatch('haystack needle haystack', 'NEEDLE')
    ).to.be.true;
		
		expect(
      isPartialMatch('haystack NEEDLE haystack', 'needle')
    ).to.be.true;
  });
});

describe('table data indexing functions', () => {
  it('should be correct for regular inputs', () => {
    expect(
      getBeginningIndex(1, 5)
    ).to.equal(0);
    
    expect(
      getBeginningIndex(5, 5)
    ).to.equal(20);
    
    expect(
      getEndingIndex(1, 10, 30)
    ).to.equal(10);
    
    expect(
      getEndingIndex(3, 10, 30)
    ).to.equal(30);
  });
  
  it('should be correct for extreme inputs', () => {    
    expect(
      getEndingIndex(4, 10, 35)
    ).to.equal(35);
  });
});