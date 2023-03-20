# Write your MySQL query statement below
SELECT 
DISTINCT t1.account_id 
FROM LogInfo t1
INNER JOIN LogInfo t2
ON t1.account_id = t2.account_id 
AND t1.ip_address != t2.ip_address  
AND t1.login BETWEEN t2.login AND t2.logout;