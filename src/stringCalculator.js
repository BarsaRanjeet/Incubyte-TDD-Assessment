module.exports.Add = (numbers) => {
    if (!numbers) return 0;
    let delimiter = [',', '\\n'];
    let nums = numbers;
    if (numbers.startsWith('//')) {
        if (numbers.match(/\[(.*?)\]/g)?.length)
            delimiter.push(...numbers.match(/\[(.*?)\]/g).map(match => match.slice(1, -1).replaceAll('*', '\\*')));
        else
            delimiter.push(numbers.substr(2, 1))
        nums = numbers.lastIndexOf(']') > 0 ? numbers.substr(numbers.lastIndexOf(']')) : numbers.substr(3);
    }
    const negative = [];
    const sum = nums.split(RegExp(delimiter.join('|'))).reduce((pre, cur, _) => {
        if (parseInt(cur) < 0) negative.push(cur);
        return cur && parseInt(cur) <= 1000 ? parseInt(cur) + pre : pre;
    }, 0);
    if (negative.length)
        throw new Error(`negatives not allowed ${negative.length > 1 ? negative.toString() : ''}`.trimEnd())
    return sum;
} 