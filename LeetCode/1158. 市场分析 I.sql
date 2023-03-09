# Write your MySQL query statement below
SELECT 
 t1.user_id buyer_id,
 t1.join_date,
 SUM(CASE WHEN YEAR(t2.order_date) = '2019' THEN 1 ELSE 0 END) orders_in_2019
 FROM Users t1 
 LEFT JOIN Orders t2 
 ON t1.user_id = t2.buyer_id
 GROUP BY t1.user_id;