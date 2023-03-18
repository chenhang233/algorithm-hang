# Write your MySQL query statement below
SELECT 
t1.dept_name,
COUNT(t2.student_id) student_number 
FROM Department t1
LEFT JOIN Student t2
ON t1.dept_id = t2.dept_id
GROUP BY t1.dept_id
ORDER BY student_number DESC,t1.dept_name;