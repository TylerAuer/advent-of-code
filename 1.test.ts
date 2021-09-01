import { findPairWithSum } from './1';

describe('findPairWithSum()', () => {
  it('returns error when no solution is found', () => {
    const result = findPairWithSum(100000000, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(result).toThrow();
  });
});
