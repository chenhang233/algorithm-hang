/**
 * @param {number} n
 */
var Allocator = function (n) {
  this.arr = Array.from({ length: n })
}

/**
 * @param {number} size
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function (size, mID) {
  let t = 0
  for (let i = 0; i < this.arr.length; i++) {
    if (!this.arr[i]) {
      t++
      if (t === size) {
        this.arr[i] = mID
        return i
      }
      for (let j = i + 1; j < this.arr.length; j++) {
        if (!this.arr[j]) {
          t++
        } else {
          break
        }
        if (t === size) {
          for (let k = i; k < t; j++) {
            this.arr[k] = mID
          }
          return i
        }
      }
      t = 0
    }
  }
  return -1
}

/**
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.free = function (mID) {
  let count = 0
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i] === mID) {
      count++
      this.arr[i] = undefined
    }
  }
  return count
}

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.free(mID)
 */

const loc = new Allocator(10)
console.log(
  loc.allocate(1, 1),
  loc.allocate(1, 2),
  loc.allocate(1, 3),
  loc.free(2),
  loc.allocate(3, 4)
  //   loc.allocate(1, 1),
  //   loc.allocate(1, 1)
  //   loc.free(1),
  //   loc.allocate(10, 2),
  //   loc.free(7)
)
console.log(loc.arr)
