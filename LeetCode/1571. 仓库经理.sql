# Write your MySQL query statement below
SELECT t1.name WAREHOUSE_NAME,
SUM(Width * Height * Length * units) VOLUME
FROM Warehouse t1
INNER JOIN Products t2
ON t1.product_id = t2.product_id
GROUP BY t1.name; 