# Write your MySQL query statement below

SELECT t.order_id FROM (
    SELECT 
order_id,
MAX(quantity) max
FROM OrdersDetails
GROUP BY order_id
HAVING max > (
SELECT MAX(t.avg) max FROM (SELECT
AVG(quantity) avg
FROM OrdersDetails
GROUP BY order_id) t
)
) t;



# Write your MySQL query statement below

SELECT order_id 
FROM  OrdersDetails 
GROUP BY order_id
HAVING MAX(quantity) > ALL (SELECT AVG(quantity) FROM OrdersDetails GROUP BY order_id)
