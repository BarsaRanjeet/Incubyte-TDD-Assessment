module.exports.Add = (numbers) => {
    if (!numbers) return 0;
    return numbers.split(/,|\n/).reduce((pre, cur, _) => {
        return cur ? parseInt(cur) + pre : pre;
    }, 0)
} 