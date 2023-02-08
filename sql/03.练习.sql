
-- 删除stu表
drop table if exists stu;


-- 创建stu表
CREATE TABLE stu (
 id int, -- 编号
 name varchar(20), -- 姓名
 age int, -- 年龄
 sex varchar(5), -- 性别
 address varchar(100), -- 地址
 math double(5,2), -- 数学成绩
 english double(5,2), -- 英语成绩
 hire_date date -- 入学时间
);

-- 添加数据
INSERT INTO stu(id,NAME,age,sex,address,math,english,hire_date) 
VALUES 
(1,'马运',55,'男','杭州',66,78,'1995-09-01'),
(2,'马花疼',45,'女','深圳',98,87,'1998-09-01'),
(3,'马斯克',55,'男','香港',56,77,'1999-09-02'),
(4,'柳白',20,'女','湖南',76,65,'1997-09-05'),
(5,'柳青',20,'男','湖南',86,NULL,'1998-09-01'),
(6,'刘德花',57,'男','香港',99,99,'1998-09-01'),
(7,'张学右',22,'女','香港',99,99,'1998-09-01'),
(8,'德玛西亚',18,'男','南京',56,65,'1994-09-02');

--   -------------------------------
select * from stu;
select name,age from stu;
select address from stu;
select distinct address from stu;
select * from stu where age <= 30 && age >= 20;
select * from stu where age between 20 and 30;
select * from stu where hire_date between '1997-9-10' and '1998-9-9';  
select * from stu where age=18;
select * from stu where age!=18;
select * from stu where age=18 or age=20 or age=22;
select * from stu where age in (18,20);
select * from stu where english is null;
-- 模糊查询
select * from stu where name like '马%';
select * from stu where name like '_花%';
select * from stu where name like '%德%';
-- 排序
select * from stu order by english; 
select * from stu order by math desc;
-- 如果排序条件前面一样,执行后面的
select * from stu order by math desc, english asc;

-- 聚合查询
select count(id) from stu;
select count(*) from stu;
select max(math) from stu;
select min(math) from stu;
select sum(math) from stu;
select avg(math) from stu;
select min(english) from stu;


-- 分组查询
select sex, avg(math) from stu group by sex;
select sex, avg(math),count(*) from stu group by sex;
select sex,avg(math),count(*) from stu where math >= 70 group by sex;
select sex,avg(math),count(*) from stu where math >= 70 group by sex having count(*) > 2;

-- 分页查询
select id,name from stu limit 0, 3;
select id,name from stu limit 3, 3;








