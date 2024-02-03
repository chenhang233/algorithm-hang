# Write your MySQL query statement below
SELECT t1.followee 'follower', COUNT(DISTINCT t1.follower) 'num' FROM Follow t1 
WHERE t1.followee IN (
    SELECT DISTINCT follower FROM Follow
    )
GROUP BY t1.followee