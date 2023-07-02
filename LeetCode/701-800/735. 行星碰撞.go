func asteroidCollision(asteroids []int) []int {
    var ans []int 
    for _,v := range asteroids {
        right := true
        for right && v < 0 && len(ans) > 0 && ans[len(ans) - 1] > 0 {
            right = ans[len(ans) - 1] < -v
            if ans[len(ans) - 1] <= -v {
                ans = ans[:len(ans) - 1]
            }
        } 
        if right {
            ans = append(ans, v)
        }
    }
    return ans
}