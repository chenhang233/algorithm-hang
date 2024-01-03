# Write your MySQL query statement below
SELECT 
t1.buyer_id 
FROM Sales t1
LEFT JOIN Product t2
ON t1.product_id = t2.product_id 
GROUP BY t1.buyer_id 
HAVING SUM(t2.product_name = 'S8') > 0 && SUM(t2.product_name = 'iPhone') = 0;