const { BinarySearchTree, defaultCompare, Compare, Node } = require('./01.创建 BinarySearchTree 类')
const Colors = {
  RED: 'red',
  BLACK: 'black',
}
class RedBlackNode extends Node {
  constructor(key) {
    super(key)
    this.key = key
    this.color = Colors.RED
    this.parent = null
  }
  isRed() {
    return this.color === Colors.RED
  }
}

class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }
  insert(key) {
    if (this.root == null) {
      this.root = new RedBlackNode(key)
      this.root.color = Colors.BLACK
    } else {
      const newNode = this.insertNode(this.root, key)
      this.fixTreeProperties(newNode)
    }
  }
  // 重写的 insertNode 方法
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new RedBlackNode(key)
        node.left.parent = node
        return node.left
      } else {
        return this.insertNode(node.left, key)
      }
    } else if (node.right == null) {
      node.right = new RedBlackNode(key)
      node.right.parent = node
      return node.right
    } else {
      return this.insertNode(node.right, key)
    }
  }
  // 在插入节点后验证红黑树属性
  fixTreeProperties(node) {
    while (node && node.parent && node.parent.isRed() && node.color !== Colors.BLACK) {
      let parent = node.parent
      const grandParent = parent.parent
      // 情形 A：父节点是左侧子节点
      if (grandParent && grandParent.left === parent) {
        // {5}
        const uncle = grandParent.right // {6}
        // 情形 1A：叔节点也是红色——只需要重新填色
        if (uncle && uncle.color === Colors.RED) {
          // {7}
          grandParent.color = Colors.RED
          parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = grandParent // {8}
        } else {
          // 情形 2A：节点是右侧子节点——左旋转
          // 情形 3A：节点是左侧子节点——右旋转
        }
      } else {
        // 情形 B：父节点是右侧子节点
        const uncle = grandParent.left // {9}
        // 情形 1B：叔节点是红色——只需要重新填色
        if (uncle && uncle.color === Colors.RED) {
          // {10}
          grandParent.color = Colors.RED
          parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = grandParent
        } else {
          // 情形 2B：节点是左侧子节点——右旋转
          // 情形 3B：节点是右侧子节点——左旋转
        }
      }
    }
    this.root.color = Colors.BLACK // {11}
  }
  rotationLL(node) {
    const tmp = node.left
    node.left = tmp.right
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node
    }
    tmp.parent = node.parent
    if (!node.parent) {
      this.root = tmp
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp
      } else {
        node.parent.right = tmp
      }
    }
    tmp.right = node
    node.parent = tmp
  }
  rotationRR(node) {
    const tmp = node.right
    node.right = tmp.left
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node
    }
    tmp.parent = node.parent
    if (!node.parent) {
      this.root = tmp
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp
      } else {
        node.parent.right = tmp
      }
    }
    tmp.left = node
    node.parent = tmp
  }
}

const b = new RedBlackTree()
b.insert(1)
b.insert(2)
b.insert(3)
b.insert(4)
console.log(b.root)
