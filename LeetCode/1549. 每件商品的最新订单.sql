# Write your MySQL query statement below
SELECT 
t1.product_name product_name,
t1.product_id product_id,
t2.order_id,
t2.order_date 
FROM Products t1, Orders t2
WHERE t1.product_id = t2.product_id
AND(t2.product_id ,t2.order_date )IN (
    SELECT
    product_id ,
    MAX(order_date) order_date
     FROM Orders
      GROUP BY product_id
)
ORDER BY t1.product_name,t1.product_id,order_id ;