create table contacts (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  type text,
  message text,
  created_at timestamp default now()

);

alter table contacts enable row level security;

create policy "Alla kan skicka kontaktformulär"
on contacts
for insert
with check (true);

create policy "Admins kan läsa kontakter"
on contacts
for select
using (true);