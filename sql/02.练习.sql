select * from stu;

insert into stu(id,name,gender) values(1,'张三','男');

insert into stu values(2,'历史','男','2022-2-8',50.2,'asdxc.com',18468451265,0),(2,'历史','男','2023-2-8',50.2,'asdxc.com',18468451265,0);

-- 更新 
update stu set gender='女' where name='张三';
update stu set email="@123.cn", score=88 where id=2;

delete from stu where id=2;