module.exports.Add = (numbers) => {
    if (!numbers) return 0;
    const delimiter = numbers.startsWith('//') ? `,|\n|${numbers.substr(2, 1)}` : ',|\n';
    return (numbers.startsWith('//') ? numbers.substr(3) : numbers)
        .split(RegExp(delimiter)).reduce((pre, cur, _) => {
            return cur ? parseInt(cur) + pre : pre;
        }, 0)
} 