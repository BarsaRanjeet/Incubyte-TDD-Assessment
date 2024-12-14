const { Add } = require('./stringCalculator')

describe('stringCalculator', () => {
    test('Check if empty string returns 0', () => {
        const input = '';
        const  expected = 0;
        const result = Add('');
        expect(result).toBe(0);
    })
})