// 图的实现，用于生成一个随机的双向图
class Node {
  constructor(id) {
    this.id = id
    this.neighbors = new Set()
  }
  connect(node) {
    if (node !== this) {
      this.neighbors.add(node)
      node.neighbors.add(this)
    }
  }
}
class RandomGraph {
  constructor(size) {
    this.nodes = new Set()
    // 创建节点
    for (let i = 0; i < size; ++i) {
      this.nodes.add(new Node(i))
    }
    // 随机连接节点
    const threshold = 1 / size
    for (const x of this.nodes) {
      for (const y of this.nodes) {
        if (Math.random() < threshold) {
          x.connect(y)
        }
      }
    }
  }
  // 这个方法仅用于调试
  print() {
    for (const node of this.nodes) {
      const ids = [...node.neighbors].map((n) => n.id).join(',')
      console.log(`${node.id}: ${ids}`)
    }
  }
  //   来测试某个图是否连通
  isConnected() {
    const visitedNodes = new Set()
    function* traverse(nodes) {
      for (const node of nodes) {
        if (!visitedNodes.has(node)) {
          yield node
          yield* traverse(node.neighbors)
        }
      }
    }
    // 取得集合中的第一个节点
    const firstNode = this.nodes[Symbol.iterator]().next().value
    // 使用递归生成器迭代每个节点
    for (const node of traverse([firstNode])) {
      visitedNodes.add(node)
    }
    return visitedNodes.size === this.nodes.size
  }
}
const g = new RandomGraph(6)
g.print()
