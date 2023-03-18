# Write your MySQL query statement below
SELECT t1.name country  
FROM Calls t3, Country t1,Person t2
WHERE t1.country_code = LEFT(t2.phone_number ,3) 
AND (t2.id = t3.caller_id OR t2.id = t3.callee_id )
GROUP BY t1.name
HAVING AVG(t3.duration) > (SELECT AVG(duration) FROM Calls);