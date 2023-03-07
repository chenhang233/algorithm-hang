# Write your MySQL query statement below
SELECT id,'Root' Type FROM tree WHERE p_id is NULL
UNION
SELECT id, 'Inner' Type FROM tree WHERE id IN 
(SELECT DISTINCT p_id FROM tree WHERE p_id IS NOT NULL)
AND p_id IS NOT NULL
UNION 
SELECT id,'Leaf' Type FROM tree WHERE id NOT IN 
(SELECT DISTINCT p_id FROM tree WHERE p_id IS NOT NULL)
AND p_id IS NOT NULL;
