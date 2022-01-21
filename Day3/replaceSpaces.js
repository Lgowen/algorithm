// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

// 输入：s = "We are happy."
// 输出："We%20are%20happy."

/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    let str = '' // 创建空字符出啊
    const len = s.length // 获取字符串长度
    // 遍历字符串
    for(let i = 0; i < len; i++) {
        // 假如当前字符为空格
        if (s[i] === ' ') {
            str += '%20' // 原字符拼接 %20
            continue // 不走下面逻辑 继续循环
        }
        str += s[i] // 拼接当前字符
    }
    return str
};