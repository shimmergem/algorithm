/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let successor = null
let last = null
var reverseKGroup = function(head, k) {
  if (!head) return null
  let start = head
  let end = head
  for (let i = 0; i < k; i++) {
    if (end) {
      end = end.next
    } else {
      return start
    }
  }
  let newHead = reverse(start, end)
  start.next = reverseKGroup(end, k)
  return newHead
};

var reverse = function(start, end) {
  if (!start) return null
  let pre = null
  let next = start
  let current = start
  while (current !== end) {
    next = current.next
    current.next = pre
    pre = current
    current = next
  }
  return pre
}
// @lc code=end

