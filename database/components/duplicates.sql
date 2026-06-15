delete from properties
where created_at not in (
  select min(created_at) from properties group by title
);