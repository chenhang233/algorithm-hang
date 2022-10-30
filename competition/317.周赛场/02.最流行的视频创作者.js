/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function (creators, ids, views) {
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

const creators = ['alice', 'bob', 'alice', 'chris'],
  ids = ['one', 'two', 'three', 'four'],
  views = [5, 10, 5, 4]
mostPopularCreator(creators, ids, views)
// [["alice","one"],["bob","two"]]
