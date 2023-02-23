# Write your MySQL query statement below
select c.Name Customers  from Customers c where c.Id not in (select o.CustomerId from Orders o);