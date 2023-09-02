const { Dictionary } = require('../05.字典/01.创建字典类')

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected //图是否有向
    this.vertices = [] // 存储图中所有顶点的名字
    this.adjList = new Dictionary() // 字典将会使用顶点的名字作为键，邻接顶点列表作为值
  }
  // 向图中添加一个新的顶点
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v)
      this.adjList.set(v, [])
    }
  }
  // 向我们要建立连接的两个顶点之间添加新的边
  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v)
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w)
    }
    this.adjList.get(v).push(w)
    if (!this.isDirected) {
      this.adjList.get(w).push(v)
    }
  }
  //   返回顶点列表
  getVertices() {
    return this.vertices
  }
  // 返回邻接表
  getAdjList() {
    return this.adjList
  }
  toString() {
    let s = ''
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `
      const neighbors = this.adjList.get(this.vertices[i])
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `
      }
      s += '\n'
    }
    return s
  }
}
const graph = new Graph()
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
// console.log(graph.toString())
module.exports = { Graph }
