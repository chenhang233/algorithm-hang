# Write your MySQL query statement below
SELECT t1.id,t1.year,IFNULL(t2.npv,0) 'npv'  FROM Queries t1
LEFT JOIN NPV t2
ON t1.id = t2.id && t1.year = t2.year; 