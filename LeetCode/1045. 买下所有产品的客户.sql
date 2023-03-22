# Write your MySQL query statement below
SELECT customer_id 
FROM Customer t1
GROUP BY t1.customer_id
HAVING COUNT(DISTINCT t1.product_key) = ( SELECT COUNT(DISTINCT product_key) count FROM Product) ;