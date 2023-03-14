# Write your MySQL query statement below
SELECT 
t1.product_id,
ROUND(SUM(price * units) / SUM(units),2) average_price 
FROM Prices t1
INNER JOIN UnitsSold t2
ON t2.purchase_date >= t1.start_date
AND t2.purchase_date <= t1.end_date
AND t1.product_id =t2.product_id
GROUP BY t1.product_id;   