const { Graph } = require('./01.创建 Graph 类')
const Queue = require('../02.队列和双端队列/06-创建队列')
const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
}
// 初始化每个顶点的颜色。
const initializeColor = (vertices) => {
  const color = {}
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE
  }
  return color
}
// 广度优先搜索
const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)
  const queue = new Queue()
  queue.enqueue(startVertex)
  while (!queue.isEmpty()) {
    const u = queue.dequeue()
    const neighbors = adjList.get(u) // 取得一个包含其所有邻点的邻接表
    color[u] = Colors.GREY // 表示我们发现了它（但还未完成对其的探索）
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === Colors.WHITE) {
        // 如果它还未被访问过颜色为白色 则将其标注为我们已经发现了它
        color[w] = Colors.GREY
        queue.enqueue(w)
      }
    }
    color[u] = Colors.BLACK // 当完成探索该顶点和其相邻顶点后，我们将该顶点标注为已探索过的
    if (callback) {
      // {14}
      callback(u)
    }
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
const printVertex = (value) => console.log('Visited vertex: ' + value)
breadthFirstSearch(graph, myVertices[0], printVertex)
