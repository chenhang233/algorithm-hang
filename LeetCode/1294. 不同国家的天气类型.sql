# Write your MySQL query statement below
SELECT
t1.country_name,
CASE
  WHEN AVG(t2.weather_state) <= 15 THEN 'Cold'
  WHEN AVG(t2.weather_state) >= 25 THEN 'Hot'
  ELSE  'Warm' 
  END weather_type 
FROM Countries t1
LEFT JOIN  Weather t2
ON t1.country_id = t2.country_id 
WHERE YEAR(t2.day) = 2019 and MONTH(t2.day) = 11
GROUP BY t1.country_id;