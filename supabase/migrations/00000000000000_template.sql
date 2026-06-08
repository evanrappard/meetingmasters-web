-- Migration template — copy this file voor elke nieuwe tabel
-- Naamgeving: YYYYMMDDHHmmss_beschrijving.sql
--
-- Vereist na 30 mei 2026: expliciete GRANTs voor elke tabel in public schema
-- die via supabase-js / PostgREST toegankelijk moet zijn.
-- Zonder GRANT geeft PostgREST een 42501-fout.

-- ============================================================
-- 1. Tabel aanmaken
-- ============================================================
create table public.jouw_tabel (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
  -- voeg hier je kolommen toe
);

-- ============================================================
-- 2. Data API toegang verlenen (VERPLICHT na 30 mei 2026)
-- ============================================================

-- Pas grants aan op toegangsbehoefte:
-- - anon: alleen als anonieme gebruikers de tabel mogen lezen
-- - authenticated: voor ingelogde gebruikers
-- - service_role: heeft altijd volledige toegang (RLS bypass)

grant select
  on public.jouw_tabel
  to anon;                          -- verwijder als tabel niet publiek is

grant select, insert, update, delete
  on public.jouw_tabel
  to authenticated;

-- ============================================================
-- 3. Row Level Security inschakelen
-- ============================================================
alter table public.jouw_tabel enable row level security;

-- ============================================================
-- 4. Policies toevoegen
-- ============================================================

-- Voorbeeld: gebruikers zien alleen hun eigen rijen
-- create policy "gebruikers lezen eigen rijen"
--   on public.jouw_tabel
--   for select to authenticated
--   using (auth.uid() = user_id);

-- Voorbeeld: iedereen mag lezen
-- create policy "publiek leesbaar"
--   on public.jouw_tabel
--   for select to anon, authenticated
--   using (true);
