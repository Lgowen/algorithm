// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

// 示例 1:

// 输入：s = "abaccdeff"
// 输出：'b'
// 示例 2:

// 输入：s = "" 
// 输出：' '


/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {
    if (!s) return ' ' // 空字符直接返回' '
    const len = s.length
    if (len === 1) return s // 长度为一的字符直接返回该字符
    const map = new Map() // 哈希表存值
    const arr = [] // 用数组维护字符的顺序
    for(let i = 0; i < len; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
            !arr.includes(s[i]) && arr.push(s[i]) // 避免重复往数组中推入相同的key
        }
    }
    for(const key of arr) {
        if (map.get(key) === 1) return key // 遍历数组从哈希表中寻找key对应value为1的key 碰到直接返回
    }

    return ' ' // 否则返回 ' '
};
