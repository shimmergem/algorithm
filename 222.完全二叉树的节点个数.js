/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  let count = 0
  let queue = [root]
  while (queue.length > 0) {
    let node = queue.shift()
    if (node) {
      count++
      queue.push(node.left)
      queue.push(node.right)
    }
  }
  return count
};
// @lc code=end

