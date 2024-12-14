module.exports.Add = (numbers) => {
    if (!numbers) return 0;
    const delimiter = numbers.startsWith('//') ? `,|\n|${numbers.substr(2, 1)}` : ',|\n';
    const negative = [];
    const sum = (numbers.startsWith('//') ? numbers.substr(3) : numbers)
        .split(RegExp(delimiter)).reduce((pre, cur, _) => {
            if (parseInt(cur) < 0) negative.push(cur);
            return cur && parseInt(cur) <= 1000 ? parseInt(cur) + pre : pre;
        }, 0);
    if (negative.length)
        throw new Error(`negatives not allowed ${negative.length > 1 ? negative.toString() : ''}`.trimEnd())
    return sum;
} 