import { getCurrencySymbol } from '../src';

describe('Symbol-Check', () => {
  it('works', () => {
    expect(getCurrencySymbol('INR')).toEqual('₹');
  });
});
