/**
 * @param {number} n
 */
var Allocator = function (n) {
  this.arr = Array.from({ length: n })
  this.usedMap = {}
}

/**
 * @param {number} size
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function (size, mID) {
  let reto = -1
  for (let i = 0; i < this.arr.length; i++) {
    if (!this.arr[i] && i + size <= this.arr.length) {
      const check = this.arr.slice(i, i + size)
      if (check.every((v) => !v)) {
        reto = i
        for (let j = i; j < i + size; j++) {
          this.arr[j] = mID
          if (this.usedMap[mID]) {
            this.usedMap[mID].push(j)
          } else {
            this.usedMap[mID] = [j]
          }
        }
        break
      }
    }
  }
  return reto
}

/**
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.free = function (mID) {
  let reto = 0
  if (this.usedMap[mID]) {
    this.usedMap[mID].forEach((v) => {
      this.arr[v] = undefined
      reto++
    })
    this.usedMap[mID] = []
  }

  return reto
}

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.free(mID)
 */
