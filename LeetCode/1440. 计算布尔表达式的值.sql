# Write your MySQL query statement below
SELECT
left_operand,
operator,
right_operand,
(CASE
WHEN operator = '=' AND t2.value = t3.value THEN "true"
WHEN operator = '>' AND t2.value > t3.value THEN "true"
WHEN operator = '<' AND t2.value < t3.value THEN "true"
ELSE "false" END) value 
FROM Expressions t1
INNER JOIN Variables t2
ON t1.left_operand = t2.name
INNER JOIN Variables t3
ON t1.right_operand = t3.name
;