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
  let lh = 0
  let rh = 0
  let l = r = root
  while (l) {
    lh++
    l = l.left
  }
  while (r) {
    rh++
    r = r.right
  }
  if (lh === rh) {
    return 2 ** lh - 1
  } else {
    return countNodes(root.left) + countNodes(root.right) + 1
  }
};
// @lc code=end

