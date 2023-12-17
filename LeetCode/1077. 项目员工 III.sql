# Write your MySQL query statement below
SELECT project_id ,employee_id  FROM (
    select a.project_id,a.employee_id,
rank() over(partition by a.project_id order by b.experience_years desc )rk
#每一行都有分组里的排序情况
from project a join employee b
on a.employee_id=b.employee_id
) rk 
WHERE rk = 1;