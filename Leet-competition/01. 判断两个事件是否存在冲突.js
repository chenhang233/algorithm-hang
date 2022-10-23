// 给你两个字符串数组 event1 和 event2 ，表示发生在同一天的两个闭区间时间段事件，其中：

// event1 = [startTime1, endTime1] 且
// event2 = [startTime2, endTime2]
// 事件的时间为有效的 24 小时制且按 HH:MM 格式给出。

// 当两个事件存在某个非空的交集时（即，某些时刻是两个事件都包含的），则认为出现 冲突 。

// 如果两个事件之间存在冲突，返回 true ；否则，返回 false 。
const event1 = ['10:00', '11:00'],
  event2 = ['11:00', '15:00']
const fn = () => {
  if (event2[0] >= event1[0] && event2[0] <= event1[1]) {
    return true
  }

  return false
}

console.log(fn())
