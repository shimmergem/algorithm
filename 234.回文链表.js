/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
// 后序遍历法
// var isPalindrome = function(head) {
//   let start = head
//   return traverse(head)
//   function traverse (head) {
//     if (!head) return true
//     let res = traverse(head.next)
//     if (res && (start.val === head.val)) {
//       start = start.next
//       return true
//     } else {
//       return false
//     }
//   }
// };
var isPalindrome = function(head) {
  if (!head) return true
  let slow = head
  let fast = head
  let left = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  if (fast) {
    slow = slow.next
  }
  if (!slow) return true // 链表只有一个节点 返回true
  let right = reverse(slow)
  while(right) {
    if (right.val === left.val) {
      right = right.next
      left = left.next
    } else {
      return false
    }
  }
  return true
};

// var reverse = function (head) {
//   let pre = null
//   let cur = head
//   let next = head
//   while (cur) {
//     next = cur.next
//     cur.next = pre
//     pre = cur
//     cur = next
//   }
//   return pre
// }

var reverse = function (head) {
  if (!head.next) return head
  let newHead = reverse(head.next)
  head.next.next = head
  head.next = null
  return newHead
}

// @lc code=end

