import { LargeIntegerPipe } from './large-integer.pipe';

describe('LargeIntegerPipe', () => {
  it('create an instance', () => {
    const pipe = new LargeIntegerPipe();
    expect(pipe).toBeTruthy();
  });
});
