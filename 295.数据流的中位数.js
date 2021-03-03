/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.small = new Heap((a, b) => a - b > 0 ? -1 : a === b ? 0 : 1)
  this.large = new Heap()
};

// /** 
//  * @param {number} num
//  * @return {void}
//  */
MedianFinder.prototype.addNum = function(num) {
  if (this.small.size > this.large.size) {
    this.small.insert(num)
    this.large.insert(this.small.delete())
  } else {
    this.large.insert(num)
    this.small.insert(this.large.delete())
  }
};

// /**
//  * @return {number}
//  */
MedianFinder.prototype.findMedian = function() {
  if (this.small.size !== this.large.size) {
    return this.small.size > this.large.size ? this.small.top : this.large.top
  } else {
    return (this.small.top + this.large.top) / 2
  }
};

class Heap {
  constructor(sort = (a, b) => a - b) {
    this.list = [0]
    this.sort = sort
  }
  get size() {
    return this.list.length - 1
  }
  get top() {
    return this.list[1]
  }
  insert(num) {
    this.list.push(num)
    this.swim(this.size)
  }
  swim(index) {
    const parent = this.partent(index)
    if (parent < 1) return
    if (this.isLess(index, parent)) {
      this.exchange(parent, index)
      this.swim(parent)
    }
  }
  sink(index) {
    const left = this.left(index)
    const right = this.right(index)
    if (left > this.size) return
    let min = left
    if (right <= this.size && this.isLess(right, left)) min = right
    if (this.isLess(min, index)) {
      this.exchange(min, index)
      this.sink(min)
    }
  }
  delete() {
    this.exchange(1, this.size)
    const top = this.list.pop()
    this.sink(1)
    return top
  }
  partent(index) {
    return Number.parseInt(index / 2)
  }
  left(index) {
    return index * 2
  }
  right(index) {
    return index * 2 + 1
  }
  isLess(i1, i2) {
    return this.sort(this.list[i1], this.list[i2]) < 0
  }
  exchange(i1, i2) {
    const temp = this.list[i1]
    this.list[i1] = this.list[i2]
    this.list[i2] = temp
  }
}
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end


