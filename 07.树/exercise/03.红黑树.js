const {
  BinarySearchTree,
  Compare,
  defaultCompare,
  Node,
} = require('./01.创建tree')
/* 
在红黑树中，每个节点都遵循以下规则：
(1) 顾名思义，每个节点不是红的就是黑的；
(2) 树的根节点是黑的；
(3) 所有叶节点都是黑的（用 NULL 引用表示的节点）；
(4) 如果一个节点是红的，那么它的两个子节点都是黑的；
(5) 不能有两个相邻的红节点，一个红节点不能有红的父节点或子节点；
(6) 从给定的节点到它的后代节点（NULL 叶节点）的所有路径包含相同数量的黑色节点。
*/
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
    if (!this.root) {
      this.root = new RedBlackNode(key)
      this.root.color = Colors.BLACK
    } else {
      const newNode = this.insertNode(this.root, key)
      this.fixTreeProperties(newNode)
    }
  }
  insertNode(node, key) {
    if (this.compareFn(node.key, key) === Compare.LESS_THAN) {
      if (!node.right) {
        node.right = new RedBlackNode(key)
        node.right.parent = node
        return node.right
      } else {
        this.insertNode(node.right, key)
      }
    } else if (!node.left) {
      node.left = new RedBlackNode(key)
      node.left.parent = node
      return node.left
    } else {
      this.insertNode(node.left, key)
    }
  }
  fixTreeProperties(node) {
    while (node && node.parent && node.parent.isRed() && node.isRed()) {
      let parent = node.parent
      const grandParent = parent.parent
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right
        if (uncle && uncle.color.isRed()) {
          grandParent.color = Colors.RED
          parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = grandParent
        } else {
          if (node === parent.right) {
            this.rotationRR(parent)
            node = parent
            parent = node.parent
          }
          this.rotationLL(grandParent)
          grandParent.color = Colors.RED
          parent.color = Colors.BLACK
          node = parent
        }
      } else {
        const uncle = grandParent.left
        if (uncle && uncle.color.isRed()) {
          grandParent.color = Colors.RED
          parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = grandParent
        } else {
          if (node === parent.left) {
            this.rotationLL(parent)
            node = parent
            parent = node.parent
          }
          this.rotationRR(grandParent)
          parent.color = Colors.BLACK
          grandParent.color = Colors.RED
          node = parent
        }
      }
    }
    this.root.color = Colors.BLACK
  }
  rotationLL(node) {
    const temp = node.left
    node.left = temp.right
    if (temp.right && temp.right.key) {
      temp.right.parent = node
    }
    temp.parent = node.parent
    if (!node.parent) {
      this.root = temp
    } else {
      if (node === node.parent.left) {
        node.parent.left = temp
      } else {
        node.parent.right = temp
      }
    }
    temp.right = node
    node.parent = temp
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
