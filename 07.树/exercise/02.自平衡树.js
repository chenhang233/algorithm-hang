const { BinarySearchTree, Compare, defaultCompare } = require('./01.创建tree')
const BalanceFactor = {
  UNBALANCED_RIGHT: 1, // 右边不平衡
  SLIGHTLY_UNBALANCED_RIGHT: 2, // 右边稍微不平衡
  BALANCED: 3, // 平衡
  SLIGHTLY_UNBALANCED_LEFT: 4, // 左边稍微不平衡
  UNBALANCED_LEFT: 5, // 左边不平衡
}

class AVLtree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }
  getNodeHeight(node) {
    if (!node) return -1
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    )
  }
  getBalanceFactor(node) {
    const heightDifference =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      case 2:
        return BalanceFactor.UNBALANCED_LEFT
      default:
        return BalanceFactor.BALANCED
    }
  }
  // 向右的单旋转
  rotationLL(node) {
    const temp = node.left
    node.left = temp.right
    temp.right = node
    return temp
  }
  // 向左的单旋转
  rotationRR(node) {
    const temp = node.right
    node.right = temp.left
    temp.left = node
    return temp
  }
  //   向右的双旋转
  rotationLR(node) {
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node)
  }
  //   向左的双旋转
  rotationRL(node) {
    node.right = this.rotationLL(node.right)
    return this.rotationRR(node)
  }
  insert(key) {
    this.root = this.insertNode(this.root, key)
  }
  insertNode(node, key) {
    if (!node) {
      return new Node(key)
    } else if (this.compareFn(node.key, key) === Compare.LESS_THAN) {
      node.right = this.insertNode(node.right, key)
    } else if (this.compareFn(node.key, key) === Compare.BIGGER_THAN) {
      node.left = this.insertNode(node.left, key)
    } else {
      return node
    }
    const balanceFactor = this.getBalanceFactor(node)
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(node.left.key, key) === Compare.LESS_THAN) {
        this.rotationLR(node)
      } else {
        this.rotationLL(node)
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(node.right.key, key) === Compare.LESS_THAN) {
        this.rotationRR(node)
      } else {
        this.rotationRL(node)
      }
    }
  }
  removeNode(node, key) {
    node = super.removeNode(node, key)
    if (!node) return node
    const balanceFactor = this.getBalanceFactor(node)
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left)
      if (
        balanceFactorLeft === BalanceFactor.BALANCED ||
        balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotationLL(node)
      }
      if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node)
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right)
      if (
        balanceFactorRight === BalanceFactor.BALANCED ||
        balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotationRR(node)
      }
      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node)
      }
    }
    return node
  }
}
