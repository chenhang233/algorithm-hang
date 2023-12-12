# Write your MySQL query statement below

# SELECT t2.project_id,t2.c FROM (
#     SELECT COUNT(t1.employee_id) c,t1.project_id FROM Project t1
#  GROUP BY t1.project_id
# ) t2 HAVING MAX(t2.c);

SELECT project_id FROM Project GROUP BY project_id
HAVING COUNT(employee_id) >= ALL(SELECT COUNT(employee_id) FROM Project
GROUP BY project_id);