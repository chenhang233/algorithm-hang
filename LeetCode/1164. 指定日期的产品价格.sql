# Write your MySQL query statement below
SELECT 
product_id,
new_price price 
FROM Products 
WHERE (product_id,change_date) IN
(
    SELECT product_id,MAX(change_date) max_data
    FROM Products
    WHERE change_date <= '2019-08-16'
    GROUP BY product_id
)
GROUP BY product_id
union 
SELECT 
product_id,
10  price
FROM Products 
WHERE  change_date > '2019-08-16'
AND product_id NOT IN (
SELECT 
product_id
FROM Products 
WHERE change_date <= '2019-08-16'
GROUP BY product_id
)
GROUP BY product_id;