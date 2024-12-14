module.exports.Add = (numbers) => {
    if (!numbers) return 0;
    return numbers.split(',').reduce((pre, cur, cind) => {
        return parseInt(cur) + pre
    }, 0)
} 