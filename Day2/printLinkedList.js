// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

// 示例 1：

// 输入：head = [1,3,2]
// 输出：[2,3,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    const res = [] // 初始化数组
    while (head) {
        // 假如该ListNode不为null
        res.push(head.val) // 将值推入数组
        head = head.next // 将当前ListNode指向下一个ListNode
    }
    return res.reverse() // 反转数组
};