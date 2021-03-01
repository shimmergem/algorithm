/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */

class LFUCache {
  capacity = 0
  kvMap = new Map()
  kpMap = new Map()
  pkMap = new Map()
  minFreq = 0
  constructor(capacity) {
    this.capacity = capacity
  }

  /** 
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (this.kvMap.has(key)) {
      this.increaseFreq(key);
      return this.kvMap.get(key)
    } else {
      return -1
    }
  }

  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.capacity < 1) return
    if (this.kvMap.has(key)) {
      this.kvMap.set(key, value)
      this.increaseFreq(key)
      return
    }
    if (this.kvMap.size >= this.capacity ) this.removeCache()
    this.addCache(key, value)
  }

  addCache(key, value) {
    this.kvMap.set(key, value)
    this.kpMap.set(key, 1)
    if (this.pkMap.has(1)) {
      this.pkMap.get(1).add(key)
    } else {
      this.pkMap.set(1, new Set([key]))
      this.minFreq = 1
    }
  }

  removeCache() {
    let keySet = this.pkMap.get(this.minFreq)
    let result = keySet.values().next()
    this.removeCacheByKey(result.value)
  }

  removeCacheByKey(key) {
    let freq = this.kpMap.get(key)
    this.kvMap.delete(key)
    this.kpMap.delete(key)
    let keySet = this.pkMap.get(freq)
    keySet.delete(key)
    if (keySet.size < 1) {
      this.pkMap.delete(freq)
    }
  }

  increaseFreq(key) {
    let freq = this.kpMap.get(key)
    if (!freq) {
      this.kpMap.set(key, 1)
      let set = this.pkMap.get(1)
      if (!set) {
        this.pkMap.set(1, new Set(key))
        this.minFreq = 1
      } else {
        set.add(key)
      }
    } else {
      this.pkMap.get(freq).delete(key)
      if (this.pkMap.get(freq).size < 1) {
        this.pkMap.delete(freq)
        if (freq === this.minFreq) this.minFreq++
      }
      this.kpMap.set(key, freq + 1)
      if (this.pkMap.has(freq + 1)) {
        this.pkMap.get(freq + 1).add(key)
      } else {
        this.pkMap.set(freq + 1, new Set([key]))
      }
    }
  }
}

// let lfu = new LFUCache(2)
// lfu.put(1, 1)
// lfu.put(2, 2)
// lfu.get(1)
// lfu.put(3, 3)
// lfu.get(2)
// lfu.get(3)
// lfu.put(4, 4)
// lfu.get(1)
// lfu.get(3)
// lfu.get(4)

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

