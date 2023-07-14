func canVisitAllRooms(rooms [][]int) bool {
    n := len(rooms)
    arr := make([]bool,n)
    count := 0
    arr[0] = true
    next(&rooms,&arr,0,&count)
    fmt.Println(arr,count)
    return count == n - 1
}

func next(rooms *[][]int,visited *[]bool, index int,count *int) {
    arr := (*rooms)[index]
    for _,v := range arr {
        if !(*visited)[v] {
        *count++
        (*visited)[v] = true
        next(rooms,visited,v,count) 
        }
    }
}