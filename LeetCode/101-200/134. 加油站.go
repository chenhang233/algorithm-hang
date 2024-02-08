func canCompleteCircuit(gas []int, cost []int) int {
    for i,n := 0, len(gas); i < n; {
        sGas,sCost,cnt := 0, 0, 0
        for cnt < n {
            j := (i + cnt) % n;
            sGas += gas[j]
            sCost += cost[j]
            if sCost > sGas {
                break
            }
            cnt++
        }
        if cnt == n {
            return i
        } else {
            i += cnt + 1
        }
    }
    return -1
}