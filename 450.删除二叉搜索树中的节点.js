/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) return null
  if (root.val < key) {
    root.right = deleteNode(root.right, key)
    return root
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key)
    return root
  } else {
    if (!root.right && !root.left) {
      return null
    } else if (!root.right || !root.left) {
      if (root.right) {
        let right = root.right
        root.right = null
        return right
      } 
      if (root.left) {
        let left = root.left
        root.left = null
        return left
      } 
    } else {
      let right = findMinRight(root.right)
      root.val = right.val
      root.right = deleteNode(root.right, right.val)
      return root
    }
  }
  function findMinRight(root) {
    if (root.left) {
      return findMinRight(root.left)
    } else {
      return root
    }
  }
};
// @lc code=end

