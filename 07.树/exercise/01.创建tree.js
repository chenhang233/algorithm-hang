const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
}
function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }
  insert(key) {
    if (!this.root) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (!node.left) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (!node.right) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  //   中序遍历 以从最小到最大的顺序访问所有节点
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  inOrderTraverseNode(node, callback) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  //   先序遍历 以优先于后代节点的顺序访问每个节点的
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode(node, callback) {
    if (node) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }
  //   后序遍历 先访问节点的后代节点，再访问节点本身
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }
  postOrderTraverseNode(node, callback) {
    if (node) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  min() {
    this.minNode(this.root)
  }
  minNode(node) {
    let current = node
    while (current && current.left) {
      current = current.left
    }
    return current
  }
  max() {
    this.maxNode(this.root)
  }
  maxNode(node) {
    let current = node
    while (current && current.right) {
      current = current.right
    }
    return current
  }
  search(key) {
    this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (!node) return false
    if (this.compareFn(node.key, key) === Compare.LESS_THAN) {
      this.searchNode(node.right, key)
    } else if (this.compareFn(node.key, key) === Compare.BIGGER_THAN) {
      this.searchNode(node.left, key)
    } else {
      return true
    }
  }
  remove(key) {
    this.root = this.removeNode(this.root, key)
  }
  removeNode(node, key) {
    if (!node) return null
    if (this.compareFn(node.key, key) === Compare.LESS_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    } else if (this.compareFn(node.key, key) === Compare.BIGGER_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else {
      if (!node.left && !node.right) {
        node = null
        return null
      }
      if (!node.left) {
        node = node.right
        return node
      } else if (!node.right) {
        node = node.left
        return node
      } else {
        let minKey = this.min(node.right)
        node.key = minKey
        node.right = this.removeNode(node.right, minKey)
        return node
      }
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

// tree.inOrderTraverse((v) => console.log(v))
// tree.preOrderTraverse((v) => console.log(v))
tree.removeNode(11)

tree.postOrderTraverse((v) => console.log(v))
module.exports = {
  BinarySearchTree,
}
