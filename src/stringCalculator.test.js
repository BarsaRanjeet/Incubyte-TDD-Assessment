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

    test('Check if unknown amount of numbers returns sum', () => {
        const input = '0,1,2,3,4,5,6,7,8,9,10';
        const expected = 55;
        const result = Add(input);
        expect(result).toBe(expected);
    });

    test('Check if Add func. handles new lines between numbers instead of commas', () => {
        const input = '1\n2,3';
        const expected = 6;
        const result = Add(input);
        expect(result).toBe(expected);
    });

    test('Check if default delimiter is ; returns sum', () => {
        const input = '//;\n1;2';
        const expected = 3;
        const result = Add(input);
        expect(result).toBe(expected);
    });

    test('Check if negative number throws an exception', () => {
        [
            { input: '//;1;-2;32', expected: 'negatives not allowed' },
            { input: '//;1;-2;-32', expected: 'negatives not allowed -2,-32' },
            { input: '10,10', expected: 20 }
        ].map(cases => {
            try {
                Add(cases.input);
            } catch (err) {
                expect(err.message).toBe(cases.expected);
            }
        });
    });

    test('Check if Numbers bigger than 1000 should is ignored', () => {
        const input = '//;2;1001';
        const expected = 2;
        const result = Add(input);
        expect(result).toBe(expected);
    });

    test('Check if format: //[delimiter]\\n returns sum', () => {
        const input = '//[***]\n1***2***3';
        const expected = 6;
        const result = Add(input);
        expect(result).toBe(expected);
    });

    test('Check if it allows multiple delimiters format: //[delim1][delim2]\\n', () => {
        const input = '//[*][%]\n1*2%3';
        const expected = 6;
        const result = Add(input);
        expect(result).toBe(expected);
    });

    test('Check if it handles multiple delimiters with length longer char', () => {
        const input = '//[***][%%%]\n1***2%%%3';
        const expected = 6;
        const result = Add(input);
        expect(result).toBe(expected);
    });
})