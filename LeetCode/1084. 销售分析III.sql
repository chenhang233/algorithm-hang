# Write your MySQL query statement below


SELECT t1.product_id,t1.product_name FROM Product t1,Sales t2 WHERE t1.product_id = t2.product_id AND t1.product_id NOT IN 
(SELECT s.product_id FROM Sales s WHERE MONTH(s.sale_date) NOT IN (1,2,3)) GROUP BY t1.product_id;