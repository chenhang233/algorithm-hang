const Queue = require('./06-创建队列')
// elementsList 参加的人 num 传递的频率
function hotPotato(elementsList, num) {
  const eliminatedList = [] // 被淘汰的人
  const queue = new Queue() // 队列
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminatedList.push(queue.dequeue())
  }
  return {
    淘汰的人们: elementsList,
    获胜者: queue.dequeue(),
  }
}

const names = ['小明', '小花', '小白', '小安', '小黄']
const math = Math.max(1, Math.floor(Math.random() * 10))
const result = hotPotato(names, math)
console.log(result)
