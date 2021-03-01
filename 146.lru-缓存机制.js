/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.hashLink = new HashLink()
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let node = this.hashLink.get(key)
  if (node) return node.val
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.hashLink.put(key, value)
  if (this.hashLink.length > this.capacity) {
    this.hashLink.deleteTail()
  }
};

class HashLink {
  map = {}
  link = new Link()
  get length() {
    return this.link.length
  }
  get(key) {
    let node = this.map[key]
    if (node) {
      this.link.deleteNode(node)
      this.link.addAtHead(node)
    } 
    return node
  }
  put(key, val) {
    let node = this.map[key]
    if (node) {
      node.val = val
      this.link.deleteNode(node)
    } else {
      node = new Node(key, val)
      this.map[key] = node
    }
    this.link.addAtHead(node)
  }
  deleteTail() {
    let lastNode = this.link.tail.pre
    this.link.deleteNode(lastNode)
    this.map[lastNode.key] = null
  }
}

class Node {
  constructor(key = '', val = '') {
    this.key = key
    this.val = val
    this.next = null
    this.pre = null
  }
}

class Link {
  length = 0
  head = new Node()
  tail = new Node()
  constructor() {
    this.head.next = this.tail
    this.tail.pre = this.head
  }
  addAtHead(node) {
    let next = this.head.next
    this.head.next = node
    node.pre = this.head
    node.next = next
    next.pre = node
    this.length++
  }
  addAtTail(node) {
    let last = this.tail.pre
    last.next = node
    node.pre = last
    node.next = this.tail
    this.tail.pre = node
    this.length++
  }
  deleteNode(node) {
    let pre = node.pre
    let next = node.next
    pre.next = next
    next.pre = pre
    this.length--
  }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
