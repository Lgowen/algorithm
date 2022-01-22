// 统计一个数字在排序数组中出现的次数。

// 示例 1:

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 暴力哈希解法
 var search = function(nums, target) {
    const map = {} // 创建对象保存数据以做计数
    for(const num of nums) {
        const mapNum = map[num]
        map[num] = mapNum ? mapNum + 1 : 1
    }
    return map[target] ?? 0
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分加哈希
 var search = function(nums, target) {
    const middleIndex = Math.floor((nums.length / 2)) - 1 // 找中间位置
    const middleNum = nums[middleIndex] // 获取中间值
    target > middleNum ? '假如目标值大于中间值则目标值在中间值右边' : '反之左边' // 这里做递归查找index
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    if (nums[left] > target || nums[right] < target) return 0 // 边界处理 假如最小值都大于target值 或者 最大值都小于target值则无解

    while (nums[left] < target) left++ // 寻找第一个出现的target
    while (nums[right] > target) right-- // 寻找最后一个出现的target

    return right - left + 1 // 计算出现的次数
};