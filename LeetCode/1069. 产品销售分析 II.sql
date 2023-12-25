# Write your MySQL query statement below
SELECT t1.product_id,SUM(t1.quantity) total_quantity 
FROM Sales t1 
# LEFT JOIN Product t2
# ON t1.product_id = t2.product_id
GROUP BY t1.product_id;