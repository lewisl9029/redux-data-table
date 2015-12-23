import { expect } from 'chai';
import { getNumberOfPages } from './page-navigator';

describe('page navigator max page number calculation', () => {
  it('should be correct for regular values', () => {
    expect(
      getNumberOfPages(20, 10)
    ).to.equal(2);
    
    expect(
      getNumberOfPages(21, 10)
    ).to.equal(3);
  });
  
  it('should be return at least 1 page', () => {
    expect(
      getNumberOfPages(8, 10)
    ).to.equal(1);
    
    expect(
      getNumberOfPages(0, 10)
    ).to.equal(1);
  });
});