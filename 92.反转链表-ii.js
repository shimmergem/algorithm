/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
let before = null
let after = null
let newHead = null
var reverseBetween = function(head, left, right) {
  if (left === 1) {
    return reverseN(head, right)
  } else {
    newHead = reverseBetween(head.next, left - 1, right - 1)
    head.next = newHead
    return head
  }
};

var reverseN = function(head, n) {
  if (n === 1) {
    after = head.next
    return head
  }
  let newHead = reverseN(head.next, n - 1)
  head.next.next = head
  head.next = after
  return newHead
}
// @lc code=end

