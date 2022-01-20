// 请实现 copyRandomList 函数，复制一个复杂链表。
// 在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if (!head) return null

    const map = new Map() // 创建哈希表
    let node = head // 当前节点
    const newHead = new Node(node.val) // 创建复制节点（不改变以方便后面使用）
    let newNode = newHead // 拿来拷贝使用的节点
    map.set(node, newNode) // 保存哈希表中表示节点的映射关系

    while (node.next) {
        // 当该节点存在下一个节点时
        newNode.next = new Node(node.next.val) // 为拷贝节点创建下一个节点的拷贝
        node = node.next // 指针指向下一个节点（用于循环）
        newNode = newNode.next // 指针指向下一个节点（用于循环）
        map.set(node, newNode) // 同理保存哈希表中表示节点的映射关系
    }

    node = head // 重置节点
    newNode = newHead // 重置节点

    while (newNode) {
        // 重新走一遍循环拿random的引用
        newNode.random = map.get(node.random)
        node = node.next
        newNode = newNode.next
    }
    
    return newHead
};