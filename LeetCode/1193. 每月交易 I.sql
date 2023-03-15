# Write your MySQL query statement below
SELECT 
SUBSTRING(trans_date,1,7) month,
country,
COUNT(*) trans_count,
COUNT(if(state = 'approved', 1,null)) approved_count,
SUM(amount) trans_total_amount,
SUM(if(state = 'approved', amount,0)) approved_total_amount 
FROM Transactions
GROUP BY month,country;