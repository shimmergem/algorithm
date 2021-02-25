/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let nodes = ''
  travers(root)
  return nodes
  function travers(root) {
    if (root) {
      travers(root.left)
      travers(root.right)
      nodes = nodes ? `${nodes},${root.val}` : `${root.val}`
    } else {
      nodes = nodes ? `${nodes},#` : '#'
    }
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  data = data.split(',')
  return decode(data)
  function decode(data) {
    if (data.length < 1) return null
    let val = data.pop()
    if (val !== '#') {
      let node = {val: Number(val)}
      node.right = decode(data)
      node.left = decode(data)
      return node
    }  else {
      return null
    }
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

