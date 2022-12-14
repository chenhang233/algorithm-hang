/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// const isInterleave = function (s1, s2, s3) {
//   const cache = {}
//   const _ = (s1, s2, s3) => {
//     const cacheKey = s1 + ',' + s2 + ',' + s3
//     if (cache[cacheKey] !== undefined) return cache[cacheKey]
//     if (s1.length + s2.length !== s3.length) return (cache[cacheKey] = false)
//     if (!s3) return (cache[cacheKey] = !s1 && !s2)
//     if (s3[0] !== s1[0] || s3[0] !== s2[0]) {
//       return s3[0] === s1[0]
//         ? (cache[cacheKey] = _(s1.slice(1), s2, s3.slice(1)))
//         : s3[0] === s2[0]
//         ? (cache[cacheKey] = _(s1, s2.slice(1), s3.slice(1)))
//         : false
//     }
//     return (cache[cacheKey] =
//       _(s1.slice(1), s2, s3.slice(1)) || _(s1, s2.slice(1), s3.slice(1)))
//   }
//   return _(s1, s2, s3)
// }

// isInterleave('aabcc', 'dbbca', 'aadbbbaccc')
