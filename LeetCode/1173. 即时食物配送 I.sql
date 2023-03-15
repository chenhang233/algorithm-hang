# Write your MySQL query statement below
SELECT 
ROUND(AVG(order_date = customer_pref_delivery_date) * 100,2)  immediate_percentage 
FROM Delivery;