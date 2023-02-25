# Write your MySQL query statement below
select school_id ,ifnull(min(score),-1) score
 from Schools  left join Exam  on capacity >= student_count
group by school_id;