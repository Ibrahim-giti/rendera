create table properties (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  address text not null,
  city text not null,
  price integer not null,
  size_sqm integer not null,
  rooms integer not null,
  description text,
  tour_url text,
  status text default 'active',
  created_at timestamp default now()
);

insert into properties (title, address, city, price, size_sqm, rooms, description, tour_url, status)
values
  ('Storgatan 12', 'Storgatan 12', 'Stockholm', 4500000, 72, 3, 'Ljus och fin lägenhet i centrala Stockholm', null, 'active'),
  ('Kungsgatan 5', 'Kungsgatan 5', 'Göteborg', 3200000, 58, 2, 'Modern lägenhet nära Avenyn', null, 'active'),
  ('Drottninggatan 8', 'Drottninggatan 8', 'Malmö', 2800000, 65, 3, 'Rymlig lägenhet i hjärtat av Malmö', null, 'active');


alter table properties add column image_url text;