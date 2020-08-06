import { calculateRadius } from './index.js'

test('Return value is type Number', () => {
    expect(calculateRadius().toBe(typeof Number));
});