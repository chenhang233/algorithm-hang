func canPlaceFlowers(flowerbed []int, n int) bool {
    length := len(flowerbed)
    flowerbed = append(flowerbed,0)
    flowerbed = append([]int{0},flowerbed...)
    for i := 1; i <= length ; i++ {
        if flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0 {
            flowerbed[i] = 1
            n--
            if n <= 0 {
                return true
            }
        }
    }
    if n == 0 {
        return true
    }
    return false
}