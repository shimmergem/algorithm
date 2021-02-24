/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) {
    return null
  } else if (preorder.length === 1) {
    return {
      val: preorder[0],
      left: null,
      right: null,
    }
  } else {
    let val = preorder[0]
    let index
    for (let i = 0; i < inorder.length; i++ ) {
      if (inorder[i] === val) {
        index = i
        break
      }
    }
    let lPreorder = preorder.slice(1, index + 1)
    let rPreorder = preorder.slice(index + 1)
    let lInorder = inorder.slice(0, index)
    let rInorder = inorder.slice(index + 1)
    let left = buildTree(lPreorder, lInorder)
    let right = buildTree(rPreorder, rInorder)
    return {
      val,
      left,
      right,
    }
  }
};

buildTree([1,2], [2,1])
// @lc code=end

