// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

// 给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为1。  

// 示例 1：

// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0

/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
    let left = 0 
    let right = numbers.length - 1

    while (left < right) {
        const middleIndex = Math.floor((right - left) / 2) + left // +left防止越界
        const middle = numbers[middleIndex]
        if (middle < numbers[right]) {
            // 假如中间值小于最右边的值 说明最小值是它自己或者在左边
            right = middleIndex
        } else if(middle > numbers[right]) {
            // 假如中间值大于最右边的值 说明最小值在右边
            left = middleIndex + 1
        } else {
            // 假如中间值等于最后边的值 说明存在重复数字
            right--
        }
    }
    // 当left === right时跳出循环
    return numbers[left]
};