# Write your MySQL query statement below

SELECT 
t2.student_id,
t2.student_name,
t1.subject_name,
COUNT(t3.student_id) attended_exams 
FROM Subjects t1
INNER JOIN Students t2
LEFT JOIN Examinations t3
ON t3.subject_name = t1.subject_name 
AND  t3.student_id = t2.student_id 
GROUP BY t1.subject_name,t2.student_id
ORDER BY t2.student_id,t1.subject_name;

