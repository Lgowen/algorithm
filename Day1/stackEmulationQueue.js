// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
// 分别完成在队列尾部插入整数和在队列头部删除整数的功能。
// (若队列中没有元素，deleteHead 操作返回 -1 )

// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]

var CQueue = function() {
    this.enterStack = []
    this.outerStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.enterStack.push(value) // 入队栈
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.outerStack.length) {
        // 假如出队栈中存在数据，则直接pop
        return this.outerStack.pop()
    } else {
        // 假如出队栈中没有数据，则将先进入入队栈的数据放入出队栈
        while (this.enterStack.length) {
            const outerData = this.enterStack.pop()
            this.outerStack.push(outerData)
        }
        // 放完后（也有可能入队栈中无数据）
        if (!this.outerStack.length) {
            // 出队栈中无数据
            return -1
        } else {
            return this.outerStack.pop()
        }
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

