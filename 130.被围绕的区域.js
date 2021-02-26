/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const rNums = board.length
  const cNums = board[0].length
  const getIndex = (x, y) => x * cNums + y
  const uf = new UF(rNums * cNums + 1)
  const dummy = rNums * cNums
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  for (let i = 0; i < rNums; i ++) {
    if (board[i][0] === 'O') {
      uf.union(getIndex(i, 0), dummy)
    }
    if (board[i][cNums - 1] === 'O') {
      uf.union(getIndex(i, cNums - 1), dummy)
    }
  }
  for (let i = 0; i < cNums; i++) {
    if (board[0][i] === 'O') {
      uf.union(getIndex(0, i), dummy)
    }
    if (board[rNums - 1][i] === 'O') {
      uf.union(getIndex(rNums - 1, i), dummy)
    }
  }
  
  for (let i = 1; i < rNums - 1; i++) {
    for (let j = 1; j < cNums - 1; j++) {
      if (board[i][j] === 'O') {
        for (let d of directions) {
          if (board[i + d[0]][j + d[1]] === 'O') {
            uf.union(getIndex(i, j), getIndex(i + d[0], j + d[1]))
          }
        }
      }
    }
  }

  for (let i = 0; i < rNums; i++) {
    for (let j = 0; j < cNums; j++) {
      if (board[i][j] === 'O' && !uf.connected(getIndex(i, j), dummy)) {
        board[i][j] = 'X'
      }
    }
  }
};

class UF {
  parent = []
  size = []
  count = 0
  constructor(n) {
    this.count = n
    for (let i =0; i < n; i++) {
      this.parent[i] = i
      this.size[i] = 1
    }
  }
  union(node1, node2) {
    let root1 = this.find(node1)
    let root2 = this.find(node2)
    if (root1 === root2) return
    if (this.size[root1] <= this.size[root2]) {
      this.parent[root1] = root2
      this.size[root2] += this.size[root1]
    } else {
      this.parent[root2] = root1
      this.size[root1] =+ this.size[root2]
    }
    this.count--
  }

  connected(node1, node2) {
    return this.find(node1) === this.find(node2)
  }

  find(node) {
    while (this.parent[node] !== node) {
      let parent = this.parent[node]
      let grandParent = this.parent[parent]
      this.parent[node] = grandParent
      node = grandParent
    }
    return node
  }
}
// @lc code=end

