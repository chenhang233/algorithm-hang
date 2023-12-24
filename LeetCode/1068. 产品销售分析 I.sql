# Write your MySQL query statement below
SELECT product_name ,year,price FROM Sales t1 
INNER JOIN Product t2 
ON t1.product_id = t2.product_id;