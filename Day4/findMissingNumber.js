// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
//  
// 示例 1:

// 输入: [0,1,3]
// 输出: 2

// 示例 2:

// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let left = 0
    let right = nums.length - 1
    
    // [0, 1, 3] 
    // 0 2 Math.floor((0 + 2) / 2) = 1 middle:1 === nums[middle]:1 left++ left = 1
    // 1 2 Math.floor((1 + 2) / 2) = 1 middle:1 === nums[middle]:1 left++ left = 2
    // 2 2 Math.floor((2 + 2) / 2) = 2 middle:2 !== nums[middle]:3 right-- right = 1
    // 不符合left <= right 跳出循环

    while (left <= right) {
        let middle = Math.floor((left + right) / 2) 
        if (middle === nums[middle]) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }

    return left
};