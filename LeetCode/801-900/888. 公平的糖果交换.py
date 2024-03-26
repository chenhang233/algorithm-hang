class Solution:
    def fairCandySwap(self, aliceSizes: List[int], bobSizes: List[int]) -> List[int]:
        a1 = (sum(aliceSizes) - sum(bobSizes)) // 2
        res = []
        for y in bobSizes:
            x = a1 + y
            if x in aliceSizes:
                res = [x,y]
                break
        return res
        # suma - x + y = sumb + x - y
        #  suma - sumb = x +   x - y - y
        #  suma - sumb = 2x - 2y
        #   2x =  suma - sumb + 2y
        #   x  = (suma - sumb + 2y) / 2
        #    x = (suma - sumb) / 2 + 2y / 2
        #    x  = (suma - sumb)  / 2 + y
        
