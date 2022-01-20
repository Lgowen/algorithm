// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let preNode = null // 初始化新头节点
    let curNode = head // 设置head为当前节点
    while (curNode) {
        // 当前节点存在时
        const nextNode = curNode.next // 先将当前节点的下一个节点保存
        curNode.next = preNode // 将新头节点赋值给当前节点的下一个节点
        preNode = curNode // 将新头节点变为当前节点（相当于反转）
        curNode = nextNode // 将保存好的原本的下一个节点设置为当前节点
    }
    return preNode // 最后返回新的头节点
};

// null -> 1 -> 2 -> 3
//  pre   cur
// null <- 1    2 -> 3
//        pre  cur
// null <- 1 <- 2    3
//             pre  cur
// null <- 1 <- 2 <- 3
//                  pre cur === null
