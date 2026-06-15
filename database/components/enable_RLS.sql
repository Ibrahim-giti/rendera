alter table properties enable row level security;

create policy "Alla kan läsa aktiva fastigheter"
on properties
for select
using (status = 'active');