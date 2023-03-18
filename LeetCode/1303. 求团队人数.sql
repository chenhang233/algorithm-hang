# Write your MySQL query statement below
select t1.employee_id , count(*) as team_size  from Employee as t1
inner join Employee as t2 on t1.team_id = t2.team_id group by t1.employee_id;



# Write your MySQL query statement below
SELECT
t1.employee_id ,
count(*)  team_size
FROM Employee  t1
INNER JOIN Employee t2
ON t1.team_id = t2.team_id
GROUP BY t1.employee_id;