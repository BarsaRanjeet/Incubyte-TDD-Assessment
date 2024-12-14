const { Add } = require('./stringCalculator')

describe('stringCalculator', () => {
    test('Check if empty string returns 0', () => {
        const input = '';
        const expected = 0;
        const result = Add(input);
        expect(result).toBe(expected);
    });

    test('Check if two numbers returns sum', () => {
        [
            { input: '1', expected: 1 },
            { input: '1,2', expected: 3 },
            { input: '10,10', expected: 20 }
        ].map(cases => {
            const result = Add(cases.input);
            expect(result).toBe(cases.expected);
        });
    });
})