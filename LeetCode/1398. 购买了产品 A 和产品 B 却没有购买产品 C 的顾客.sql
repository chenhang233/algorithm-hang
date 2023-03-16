# Write your MySQL query statement below
SELECT
t2.customer_id,
t2.customer_name 
FROM Orders t1
INNER JOIN Customers t2
ON t2.customer_id =t1.customer_id 
GROUP BY t1.customer_id
HAVING SUM(product_name = 'A') > 0 
AND SUM(product_name = 'B') > 0 
AND SUM(product_name = 'C') = 0;