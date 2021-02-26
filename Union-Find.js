// Union-Find 算法

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
    if (this.size[root1] <= this.size[size2]) {
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