/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let array = treeToArray(root)
  return array[k-1]
};

function treeToArray(node) {
  let array = []
  traverse(node)
  return array
  function traverse(node) {
    if (!node) {
      return
    } else {
      traverse(node.left)
      array.push(node.val)
      traverse(node.right)
    }
  }
}
// @lc code=end

