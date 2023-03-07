class Solution {
    public int passThePillow(int n, int time) {
  boolean d = time / (n - 1) % 2 == 0;
        int residue = time % (n - 1);
        return d ? 1 + residue : n - residue;
    }
}

