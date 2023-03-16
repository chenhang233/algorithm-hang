# Write your MySQL query statement below
SELECT
student_id,
course_id,
grade 
FROM 
(
    SELECT 
*,
RANK() OVER(PARTITION BY student_id ORDER BY grade DESC,course_id) t
FROM 
Enrollments
) tp
WHERE tp.t = 1;