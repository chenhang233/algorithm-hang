func predictPartyVictory(senate string) string {
    var Radiant,Dire []int
    for i:=0;i<len(senate);i++ {
        if senate[i] == 'R' {
            Radiant = append(Radiant, i)
        } else {
            Dire = append(Dire, i)
        }
    }
    for len(Radiant) > 0 && len(Dire) > 0 {
        if Radiant[0] < Dire[0] {
            Radiant = append(Radiant, Radiant[0] + len(senate))
        }
        if Radiant[0] > Dire[0] {
            Dire = append(Dire, Dire[0] + len(senate))
        
        }
        Radiant = Radiant[1:]
        Dire = Dire[1:]
    }
    if len(Radiant) > 0 {
        return "Radiant"
    } 
    return "Dire"
}