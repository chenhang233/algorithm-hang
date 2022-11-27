/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator2 = function (creators, ids, views) {
  const n = creators.length
  const popMap = []
  const findArr = []
  let popArr = []
  let maxview = -1
  for (let i = 0; i < n; i++) {
    if (findArr.includes(creators[i])) {
      popMap.find((obj) => obj[creators[i]].push([ids[i], views[i]]))
    } else {
      const key = creators[i]
      findArr.push(key)
      popMap.push({ [key]: [[ids[i], views[i]]] })
    }
  }
  for (const obj of popMap) {
    const key = Object.keys(obj)[0]
    let popV = -1
    let popId = null
    const max = obj[key].reduce((prev, cur) => {
      if (cur[1] > popV) {
        popV = cur[1]
        popId = cur[0]
      }
      return (prev += cur[1])
    }, 0)
    if (max > maxview) {
      maxview = max
      popArr = [[key, popId]]
    } else if (max === maxview) {
      popArr.push([key, popId])
    }
  }
  console.log(popArr)
  return popArr
}

/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function (creators, ids, views) {
  // map记录数据格式为 [creator: 视频作者, {total: 总播放量, most: 单个视频最多播放, mostId: 单个视频最多播放最小Id}]
  const map = new Map()
  const n = creators.length
  for (let i = 0; i < n; i++) {
    if (map.get(creators[i])) {
      let { most, mostId, total } = map.get(creators[i])
      if ((views[i] === most && ids[i] < mostId) || views[i] > most) {
        mostId = ids[i]
        most = views[i]
      }
      total += views[i]
      map.set(creators[i], { total, most, mostId })
    } else {
      map.set(creators[i], { total: views[i], mostId: ids[i], most: views[i] })
    }
  }
  // 根据total递减排序
  const arr = Array.from(map.entries()).sort((a, b) => b[1].total - a[1].total)
  console.log(arr)
  // 最大total，即最高流行度
  const total = arr[0][1].total
  // 寻找最高流行度相同的项
  return arr
    .filter((item) => item[1].total === total)
    .map((item) => [item[0], item[1].mostId])
}
const creators = ['alice', 'bob', 'alice', 'chris'],
  ids = ['one', 'two', 'three', 'four'],
  views = [5, 10, 5, 4]
mostPopularCreator(creators, ids, views)
// [["alice","one"],["bob","two"]]
