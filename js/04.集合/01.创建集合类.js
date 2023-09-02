class Set {
  constructor() {
    this.items = {}
  }
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }
  clear() {
    this.items = {}
  }
  size() {
    return Object.keys(this.items).length
  }
  sizeLegacy() {
    let count = 0
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++
      }
      return count
    }
  }
  values() {
    return Object.values(this.items)
  }
  valuesLegacy() {
    let values = []
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key)
      }
    }
    return values
  }
  // 并集
  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach((value) => unionSet.add(value))
    otherSet.values().forEach((value) => unionSet.add(value))
    return unionSet
  }
  // 交集
  intersection(otherSet) {
    const intersectionSet = new Set()
    const values = this.values()
    const otherValues = otherSet.values()
    let biggerSet = values
    let smallerSet = otherValues
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues
      smallerSet = values
    }
    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    })
    return intersectionSet
  }
  // 差集 所有存在于集合 A 但不存在于集合 B 的元素
  difference(otherSet) {
    const differenceSet = new Set()
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }
  // 子集
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    let isSubset = true
    this.values().every((value) => {
      if (!otherSet.has(value)) {
        // {4}
        isSubset = false // {5}
        return false
      }
      return true // {6}
    })
    return isSubset // {7}
  }
}

const set = new Set()
set.add(1)
console.log(set.values())
