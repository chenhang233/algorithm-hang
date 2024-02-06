# Write your MySQL query statement below
SELECT activity 'ACTIVITY'
FROM Friends
GROUP BY activity
HAVING COUNT(*) > ANY(
    SELECT COUNT(*) FROM Friends GROUP BY activity
) AND COUNT(*) < ANY(
    SELECT COUNT(*) FROM Friends GROUP BY activity
); 