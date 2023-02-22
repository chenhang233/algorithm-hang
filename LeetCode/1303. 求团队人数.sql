# Write your MySQL query statement below
select t1.employee_id , count(*) as team_size  from Employee as t1
inner join Employee as t2 on t1.team_id = t2.team_id group by t1.employee_id;