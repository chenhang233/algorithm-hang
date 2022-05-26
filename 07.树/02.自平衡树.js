const { BinarySearchTree, defaultCompare, Compare } = require('./01.创建 BinarySearchTree 类')

class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }
  //   计算一个节点高度
  getNodeHeight(node) {
    if (node == null) {
      return -1
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1
  }
  // 遵循计算一个节点的平衡因子并返回其值
  getBalanceFactor(node) {
    const BalanceFactor = {
      UNBALANCED_RIGHT: 1, // 右边不平衡
      SLIGHTLY_UNBALANCED_RIGHT: 2, // 右边稍微不平衡
      BALANCED: 3, // 平衡
      SLIGHTLY_UNBALANCED_LEFT: 4, // 左边稍微不平衡
      UNBALANCED_LEFT: 5, // 左边平衡
    }
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
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
  // 左-左（LL）：向右的单旋转
  rotationLL(node) {
    const tmp = node.left
    node.left = tmp.right
    tmp.right = node
    return tmp
  }
  // 右-右（RR）：向左的单旋转
  rotationRR(node) {
    const tmp = node.right
    node.right = tmp.left
    tmp.left = node
    return tmp
  }
  //   左-右（LR）：向右的双旋转
}
