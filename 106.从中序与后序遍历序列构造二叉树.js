/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) {
    return null
  } else if (inorder.length === 1) {
    return {
      val: inorder[0],
      left: null,
      right: null,
    }
  } else {
    let index
    let val = postorder[postorder.length - 1]
    for (let i = 0; i < inorder.length; i++) {
      if (inorder[i] === val) {
        index = i
        break
      }
    }
    let lInorder = inorder.slice(0, index)
    let rInorder = inorder.slice(index + 1)
    let lPostorder = postorder.slice(0, index)
    let rPostorder = postorder.slice(index, postorder.length - 1)
    let left = buildTree(lInorder, lPostorder)
    let right = buildTree(rInorder, rPostorder)
    return {
      val,
      left,
      right,
    }
  }
};
// @lc code=end

