# Write your MySQL query statement below
SELECT 
    t2.name Department,
    t1.name Employee,
    t1.Salary
FROM 
    Employee t1,Department t2 
WHERE 
    t1.departmentId = t2.id
AND 
    (t1.Salary, t1.departmentId)
IN 
    (SELECT 
        MAX(Salary),
        departmentId Department
        FROM
        Employee 
        GROUP BY 
        departmentId )