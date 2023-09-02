const { defaultToString, ValuePair } = require('./01.创建字典类')
class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37 //为了得到比较小的数值，我们会使用 hash 值和一个任意数做除法的余数）——这可以规避操作数超过数值变量最大表示范围的风险。
  }
  hashCode(key) {
    return this.loseloseHashCode(key)
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }
  get(key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }
  remove(key) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if (valuePair != null) {
      delete this.table[hash]
      return true
    }
    return false
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const keys = Object.keys(this.table)
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} =>
   ${this.table[keys[i]].toString()}}`
    }
    return objString
  }
}

const hash = new HashTable()
hash.put('Gandalf', 'gandalf@email.com')
hash.put('John', 'johnsnow@email.com')
hash.put('Tyrion', 'tyrion@email.com')
console.log(hash.hashCode('Gandalf') + ' - Gandalf')
console.log(hash.hashCode('John') + ' - John')
console.log(hash.hashCode('Tyrion') + ' - Tyrion')
console.log(hash.get('Gandalf'))
module.exports = { HashTable }
