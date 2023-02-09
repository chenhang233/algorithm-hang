-- 多表查询 
-- 隐式内连接
select emp.name,emp.gender,dept.dname from emp,dept where emp.dep_id = dept.did;
-- 显示内连接
select * from emp inner join dept on emp.dep_id = dept.did;

-- 左外连接
select * from emp left join dept on emp.dep_id = dept.did;
-- 右外连接
select * from emp right join dept on emp.dep_id = dept.did;

--子查询
select salary,name from emp where salary > (select salary from emp where name = '猪八戒');
select * from emp where emp.dep_id in (select did from dept where dname='财务部' or dname='市场部');
select * from (select * from emp where emp.join_date > '2011-11-11') as t left join dept on t.dep_id = dept.did;