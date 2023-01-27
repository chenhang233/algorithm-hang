/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a - b)
    const fn = (deep,path,sum,result) =>{
        if (sum === target) {
             result.push(Array.from(path))
             return
        }
        if (sum > target) {
            return
        }
        for (let i = deep; i < candidates.length;i++) {
            if (candidates[i] > target) {
                continue
            }
            if (i > deep && candidates[i] === candidates[i - 1]) {
                continue
            }
            path.push(candidates[i])
            fn(i + 1, path, sum + candidates[i], result)
            path.pop()
        }
    }
    const result = []
    fn(0, [], 0, result)
    return result
};