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
  const arr = Array.from(map.entries()).sort((a, b) => b[1].total - a[1].total)
  const total = arr[0][1].total
  return arr
    .filter((item) => item[1].total === total)
    .map((item) => [item[0], item[1].mostId])
}
