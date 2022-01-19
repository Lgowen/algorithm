// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
// 调用 min、push 及 pop 的时间复杂度都是 O(1)。

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.min();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.min();   --> 返回 -2.

/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.minStack = [] // 创建最小值的stack
    this.mainStack = [] // 创建整体的stack
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.mainStack.push(x) // 往主栈推入值
    const minStackLen = this.minStack.length 
    if (!minStackLen) {
        // 判断包含每轮最小值的栈中是否有值，没有则直接推入
        this.minStack.push(x)
    } else {
        const lastIndex = minStackLen - 1
        // 有则取最小值与推入值进行比较，再推入其小的那一个
        const minData = Math.min(this.minStack[lastIndex], x)
        this.minStack.push(minData)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop() // 出栈
    this.mainStack.pop() // 出栈
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // 取栈顶
    const lastIndex = this.mainStack.length - 1
    return this.mainStack[lastIndex]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    // minStack的栈顶值为每一轮最小值，故取其值
    const lastIndex = this.minStack.length - 1
    return this.minStack[lastIndex]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */