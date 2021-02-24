/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) {
    return null
  } else if (nums.length === 1) {
    return {
      val: nums[0],
      left: null,
      right: null,
    }
  } else {
    let index = findMax(nums)
    let root = {}
    root.val = nums[index]
    root.left = constructMaximumBinaryTree(nums.slice(0, index))
    root.right = constructMaximumBinaryTree(nums.slice(index + 1))
    return root
  }
};

function findMax(nums) {
  if (nums.length < 2) return 0
  let mIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[mIndex] < nums[i]) mIndex = i
  }
  return mIndex
}
// @lc code=end

