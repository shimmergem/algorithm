/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = new Node()
  this.tail = new Node()
  this.head.next = this.tail
  this.tail.prev = this.head
  this.length = 0
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let cur = this.getNodeByIndex(index)
  return cur !== this.head && cur !== this.tail ? cur.val : -1
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let node = new Node({val})
  let first = this.head.next
  this.head.next = node
  node.prev = this.head
  node.next = first
  first.prev = node
  this.length++
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let node = new Node({val})
  let last = this.tail.prev
  last.next = node
  node.prev = last
  node.next = this.tail
  this.tail.prev = node
  this.length++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  index = index < 0 ? 0 : index
  index = index > this.length ? this.length - 1 : index
  let node = new Node({val})
  let cur = this.getNodeByIndex(index)
  let prev = cur.prev
  prev.next = node
  node.prev = prev
  node.next = cur
  cur.prev = node
  this.length++
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let cur = this.getNodeByIndex(index)
  if (cur !== this.head && cur !== this.tail) {
    let prev = cur.prev
    let next = cur.next
    prev.next = next
    next.prev = prev
    this.length--
  }
};

MyLinkedList.prototype.getNodeByIndex = function (index) {
  let cur = this.head
  let i = 0
  while (cur !== this.tail && i <= index) {
    cur = cur.next
    i++
  }
  return cur
}

class Node {
  key = ''
  val = ''
  next = null
  prev = null
  constructor({key = '', val = ''} = {}) {
    this.key = key
    this.val = val
  }
}



/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

