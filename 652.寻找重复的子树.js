/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  let nodeMap = {}
  let treeArray = []
  traverse(root)
  return treeArray

  function traverse(node) {
    if (!node) {
      return '#'
    } else {
      let left = traverse(node.left)
      let right = traverse(node.right)
      let treeStr = `${left}-${right}-${node.val}`
      if (nodeMap[treeStr]) {
        nodeMap[treeStr] += 1
        if (nodeMap[treeStr] == 2) {
          treeArray.push(node)
        }
      } else {
        nodeMap[treeStr] = 1
      }
      return treeStr
    }
  }
};
// @lc code=end

