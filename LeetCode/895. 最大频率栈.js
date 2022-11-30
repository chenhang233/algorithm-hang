var FreqStack = function () {
  this.frequency = new Map()
  this.group = new Map()
  this.maxFrequency = 0
}

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  this.frequency.set(val, (this.frequency.get(val) || 0) + 1)
  if (!this.group.has(this.frequency.get(val))) {
    this.group.set(this.frequency.get(val), [])
  }
  this.group.get(this.frequency.get(val)).push(val)
  this.maxFrequency = Math.max(this.maxFrequency, this.frequency.get(val))
}

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const val = this.group.get(this.maxFrequency)[
    this.group.get(this.maxFrequency).length - 1
  ]
  this.frequency.set(val, this.frequency.get(val) - 1)
  this.group.get(this.maxFrequency).pop()
  if (this.group.get(this.maxFrequency).length === 0) this.maxFrequency--
  return val
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
