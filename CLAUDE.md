# CLAUDE.md — MeetingMasters Web

## Stack
- Next.js (App Router) + TypeScript
- Supabase (`mgkzogvgqpfvsynrfera`) — auth, storage, database
- Tailwind CSS + shadcn/ui
- Supabase client via `@supabase/ssr`

## Supabase — nieuwe tabellen

Elke nieuwe tabel in het `public` schema die via supabase-js / PostgREST bereikbaar moet zijn **vereist** expliciete GRANTs. Gebruik `supabase/migrations/00000000000000_template.sql` als startpunt.

Verplichte volgorde per migratie:

```sql
-- 1. Maak de tabel aan
create table public.tabel_naam ( ... );

-- 2. Verleen Data API-toegang (vereist vanaf 30 mei 2026)
grant select on public.tabel_naam to anon;                         -- alleen als publiek leesbaar
grant select, insert, update, delete on public.tabel_naam to authenticated;

-- 3. Schakel RLS in
alter table public.tabel_naam enable row level security;

-- 4. Voeg policies toe
create policy "..." on public.tabel_naam for select to authenticated using (...);
```

Zonder stap 2 geeft PostgREST een `42501`-fout.

## Supabase — secrets

- Supabase keys staan in `.env.local` (gitignored)
- `SUPABASE_SERVICE_ROLE_KEY` is server-only — nooit in client code of hardcoded in scripts
- Scripts lezen keys via `dotenv` uit `.env.local`

## Migraties uitvoeren

```bash
# Verbind met het Supabase-project (eenmalig vanuit /website/)
supabase link --project-ref mgkzogvgqpfvsynrfera

# Pas een migratie toe
supabase db push
```

## Afbeeldingen

Altijd WebP-formaat met beschrijvende alt-tekst voor SEO.
Upload via: `node scripts/upload-to-supabase.mjs`
