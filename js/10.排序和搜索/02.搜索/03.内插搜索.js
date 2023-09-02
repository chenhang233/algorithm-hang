function defaultEquals(a, b) {
  return a === b
}
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
}
function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
function lesserOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b)
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS
}
function biggerOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b)
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS
}
export function defaultDiff(a, b) {
  return Number(a) - Number(b)
}
function interpolationSearch(
  array,
  value,
  compareFn = defaultCompare,
  equalsFn = defaultEquals,
  diffFn = defaultDiff
) {
  const { length } = array
  let low = 0
  let high = length - 1
  let position = -1
  let delta = -1
  while (
    low <= high &&
    biggerOrEquals(value, array[low], compareFn) &&
    lesserOrEquals(value, array[high], compareFn)
  ) {
    delta = diffFn(value, array[low]) / diffFn(array[high], array[low])
    position = low + Math.floor((high - low) * delta)
    if (equalsFn(array[position], value)) {
      return position
    }
    if (compareFn(array[position], value) === Compare.LESS_THAN) {
      low = position + 1
    } else {
      high = position - 1
    }
  }
  return -1
}
