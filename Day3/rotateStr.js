/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  const stringArr = s.split(""); // 字符串转数组
  // 首先反转0 到 n - 1的字符
  let left = 0; 
  let right = n - 1;
  const lastIndex = s.length - 1;
  while (left < right) {
    [stringArr[left], stringArr[right]] = [stringArr[right], stringArr[left]];
    left++;
    right--;
  }

  // 反转n 到 s.length - 1的字符
  left = n;
  right = lastIndex;
  while (left < right) {
    [stringArr[left], stringArr[right]] = [stringArr[right], stringArr[left]];
    left++;
    right--;
  }

  // 完整字符反转
  left = 0;
  right = lastIndex;
  while (left < right) {
    [stringArr[left], stringArr[right]] = [stringArr[right], stringArr[left]];
    left++;
    right--;
  }

  return stringArr.join(""); // 数组转字符串
};
