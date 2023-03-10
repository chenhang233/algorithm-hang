# Write your MySQL query statement below
SELECT name,SUM(amount) balance FROM Users t1 INNER JOIN Transactions t2 ON t1.account = t2.account GROUP BY t1.account HAVING SUM(amount) > 10000;  