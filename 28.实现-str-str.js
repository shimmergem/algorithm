/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let finder = new FindStr(needle)
  return finder.search(haystack)
};

class FindStr {
  dp = []
  pattern = ''
  constructor(pattern) {
    this.pattern = pattern
    this.dp = this.createDp(this.pattern)
  }
  createDp(pattern) {
    let x = 0
    let dp = []
    if (pattern === '') return dp
    for(let i = 0; i < pattern.length; i++) {
      dp[i] = new Array(256).fill(0)
    }
    for (let i = 0; i < pattern.length; i++) {
      for (let j = 0; j < 256; j++) {
        if (this.pattern[i] === String.fromCharCode(j)) {
          dp[i][j] = i + 1
        } else {
          dp[i][j] = dp[x][j]
        }
      }
      if (i < 1) {
        x = 0
      } else {
        x = dp[x][this.pattern.charCodeAt(i)]
      }
    }
    return dp
  }
  search(str) {
    let next = 0
    if (this.pattern.length === 0) return 0
    for (let i = 0; i < str.length; i++) {
      next = this.dp[next][str.charCodeAt(i)]
      if (next === this.pattern.length) {
        return i - this.pattern.length + 1
      }
    }
    return -1
  }
}

// console.log(strStr('mississippi', 'issip'))

// @lc code=end

