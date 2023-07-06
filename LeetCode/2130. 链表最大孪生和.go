/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func pairSum(head *ListNode) int {
    arr := make([]int,0)
    cur := head
    for cur != nil {
        arr = append(arr, cur.Val) 
        cur = cur.Next
    }
    n := len(arr)
    res := 0
    for i,j:=0,n-1;i<n/2;i++ {
        t := arr[i] + arr[j]
        if t > res {
            res = t
        }
        j--
    }
    return res
}