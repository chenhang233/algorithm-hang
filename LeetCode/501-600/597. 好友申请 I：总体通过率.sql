# Write your MySQL query statement below
SELECT ROUND(
  IFNULL(
 (   SELECT COUNT(*) FROM
  (
    SELECT 
    DISTINCT accepter_id,requester_id 
    FROM RequestAccepted
  ) t2)
    /
(  SELECT COUNT(*) FROM
  (
    SELECT 
    DISTINCT send_to_id,sender_id
    FROM FriendRequest
  ) t1)
  ,0)
,2) accept_rate;

