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
  if (!root) return ''
  let str = ''
  let queue = [root]
  while(queue.length > 0) {
    let node = queue.shift()
    if (node) {
      let {val, left, right} = node
      queue.push(left)
      queue.push(right)
      str = str ? `${str},${val}` : `${val}`
    } else {
      str = str ? `${str},#` : `#`
    }
  }
  return str
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data) return null
  let dataArray = data.split(',')
  let root = new TreeNode(dataArray[0])
  let queue = [root]
  let i = 1
  while(i < dataArray.length) {
    let parent = queue.shift()
    let left = dataArray[i++]
    if (left !== '#') {
      parent.left = new TreeNode(left)
      queue.push(parent.left)
    } else {
      parent.left = null
    }
    let right = dataArray[i++]
    if (right !== '#') {
      parent.right = new TreeNode(right)
      queue.push( parent.right)
    } else {
      parent.right = null
    }
  }
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

