INSERT INTO users (id, name, email, password, role) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Admin', 'admin@camevent.com', '$2a$10$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'admin'),
  ('00000000-0000-0000-0000-000000000002', 'Sopheap', 'sopheap@camevent.com', '$2a$10$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'tourist'),
  ('00000000-0000-0000-0000-000000000003', 'Angkor Events', 'organizer@camevent.com', '$2a$10$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'organizer');

INSERT INTO organizers (id, name, description, phone, website) VALUES
  ('00000000-0000-0000-0000-000000000003', 'Angkor Events', 'Expert event producer for cultural and entertainment experiences', '+85512345678', 'https://angkor-events.kh');

INSERT INTO categories (id, name) VALUES
  ('10000000-0000-0000-0000-000000000001', 'Festival'),
  ('10000000-0000-0000-0000-000000000002', 'Concert'),
  ('10000000-0000-0000-0000-000000000003', 'Sports'),
  ('10000000-0000-0000-0000-000000000004', 'Food & Drink'),
  ('10000000-0000-0000-0000-000000000005', 'Cultural');

INSERT INTO events (title, description, city, location, latitude, longitude, "startDate", "endDate", price, currency, "isFree", "imageUrl", status, "organizerId", "categoryId") VALUES
  ('Phnom Penh New Year Night Market', 'A lively night market with concerts, street food, and local crafts.', 'Phnom Penh', 'Sisowath Quay', 11.562108, 104.888535, '2026-07-15T18:00:00Z', '2026-07-15T23:00:00Z', 0.00, 'USD', true, 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', 'published', '00000000-0000-0000-0000-000000000003', '10000000-0000-0000-0000-000000000001'),
  ('Angkor Wat Sunrise Concert', 'An acoustical concert at dawn with traditional Khmer musicians.', 'Siem Reap', 'Angkor Park', 13.412469, 103.866986, '2026-08-10T05:30:00Z', '2026-08-10T08:00:00Z', 29.00, 'USD', false, 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80', 'published', '00000000-0000-0000-0000-000000000003', '10000000-0000-0000-0000-000000000002'),
  ('Cambodia Street Food Festival', 'A festival celebrating Khmer street food, craft beers, and dessert stalls.', 'Phnom Penh', 'Olympic Stadium', 11.569205, 104.901551, '2026-09-05T12:00:00Z', '2026-09-05T20:00:00Z', 5.00, 'USD', false, 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80', 'published', '00000000-0000-0000-0000-000000000003', '10000000-0000-0000-0000-000000000004');

INSERT INTO attractions (name, description, city, "imageUrl", category, latitude, longitude) VALUES
  ('Phnom Penh Riverside', 'A scenic riverside promenade with cafes and local culture.', 'Phnom Penh', 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80', 'Sightseeing', 11.562108, 104.888535);

INSERT INTO hotels (name, city, description, "imageUrl", rating) VALUES
  ('Tonle Sap Boutique Hotel', 'Siem Reap', 'Modern hotel with Khmer-inspired interiors and river views.', 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80', 4.7);

INSERT INTO restaurants (name, city, cuisine, description, "imageUrl", rating) VALUES
  ('Khmer Kitchen', 'Phnom Penh', 'Khmer', 'Authentic Cambodian cuisine in a contemporary setting.', 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80', 4.8);
