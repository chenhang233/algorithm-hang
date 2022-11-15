var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1])
  let res = 0
  for (const box of boxTypes) {
    if (box[0] < truckSize) {
      res += box[0] * box[1]
      truckSize -= box[0]
    } else {
      res += truckSize * box[1]
      break
    }
  }
  return res
}
