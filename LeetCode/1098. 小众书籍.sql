# Write your MySQL query statement below

SELECT t1.book_id,t1.name
FROM Books t1 
LEFT JOIN Orders t2
ON t1.book_id = t2.book_id 
AND t2.dispatch_date >= '2018-06-23' 
WHERE t1.available_from < '2019-05-23'
GROUP BY t1.book_id
HAVING IFNULL(SUM(t2.quantity),0) < 10