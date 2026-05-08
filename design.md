# Design System — MeetingMasters Online

> Source: https://www.meetingmasters.online  
> Rebuilt as: Next.js 14 + Tailwind CSS  
> Reference date: May 2026

---

## Brand Identity

### Logo
- **Combination mark**: Icon + wordmark side by side
- **Wordmark**: "MeetingMasters Online" — modern sans-serif, bold weight
- **Icon**: Branded logomark (abstract meeting/connection symbol in brand color)
- **Source image**: `images.squarespace-cdn.com/…/LogoMM.png` at `format=1500w`
- **Placement**: Top-left in navigation bar
- **Color**: Navy/dark blue on white background; white version for dark backgrounds
- **Mobile**: Same logo, slightly smaller; appears again in mobile menu drawer

### Brand Voice & Tone
- Professional yet warm and human-centric
- Emphasis on "genuine contact" and human connection over technology
- Tagline: **"We make more of meetings. We are MeetingMasters."**
- Secondary tagline: **"Refreshing online meeting concepts. Better results."**
- Philosophy: "Connection is the starting point of all development."

---

## Color Palette

> Note: The site is built on Squarespace. Exact hex values are inferred from visual descriptions and standard professional web design conventions. The palette is clean, minimal, and corporate.

| Token | Description | Inferred Hex | Tailwind Equivalent |
|---|---|---|---|
| `--color-primary` | Navy blue — logo, headings, nav accent | `#1B2A4A` | `slate-900` area |
| `--color-accent` | Teal/mid-blue — CTAs, links, highlights | `#2B7A9E` | `sky-700` area |
| `--color-accent-hover` | Darker accent on hover | `#1F5E7A` | `sky-800` area |
| `--color-bg-white` | Primary background | `#FFFFFF` | `white` |
| `--color-bg-light` | Light gray section backgrounds | `#F5F5F5` | `gray-100` |
| `--color-bg-dark` | Footer / dark CTA section background | `#2D2D2D` | `neutral-800` |
| `--color-bg-charcoal` | Alternative dark background | `#333333` | `neutral-700` |
| `--color-text-primary` | Body text, dark gray/charcoal | `#333333` | `neutral-700` |
| `--color-text-secondary` | Subheadings, secondary text | `#666666` | `neutral-500` |
| `--color-text-light` | Text on dark backgrounds | `#FFFFFF` | `white` |
| `--color-text-muted` | Footer secondary text, captions | `#CCCCCC` | `neutral-300` |
| `--color-border` | Subtle dividers, card borders | `#E0E0E0` | `neutral-200` |

### Usage Notes
- **White** (`#FFFFFF`): Primary page background for most content sections
- **Light gray** (`#F5F5F5`): Alternating section backgrounds, e.g., the specialization section
- **Dark/charcoal** (`#2D2D2D`–`#333333`): Footer background, the "real challenge" call-out section
- **Accent blue/teal** (`#2B7A9E`): All interactive links, CTA buttons, navigation hover states
- **Navy** (`#1B2A4A`): Logo, primary headings, brand elements

---

## Typography

### Font Stack
The site uses a clean, modern sans-serif. Based on the Squarespace template aesthetic and navigation styling observed:

- **Primary font**: System sans-serif stack, likely **"Helvetica Neue", Arial, sans-serif** or a Google Font such as **"Open Sans"** or **"Raleway"**
- **Heading font**: Same family, heavier weight (700–800)
- **Body font**: Same family, regular weight (400)
- **Nav font**: Same family, sometimes small caps or uppercase tracking

> For the rebuild, use: `font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;`  
> Or match with Tailwind: `font-sans` (configured to Open Sans via next/font)

### Type Scale

| Element | Size (desktop) | Size (mobile) | Weight | Line Height | Notes |
|---|---|---|---|---|---|
| H1 (hero headline) | 36–42px / 2.25–2.625rem | 24–28px | 700 | 1.2 | Hero overlay text, white |
| H1 (page title) | 32–36px / 2–2.25rem | 22–26px | 700 | 1.25 | Dark text on white |
| H2 (section heading) | 24–28px / 1.5–1.75rem | 20–22px | 700 | 1.3 | Main section titles |
| H3 (card/sub heading) | 18–20px / 1.125–1.25rem | 16–18px | 600–700 | 1.4 | Card titles, team names |
| H4 (minor heading) | 16–18px / 1–1.125rem | 15–16px | 600 | 1.4 | Footer column heads |
| Body (large) | 16–18px / 1–1.125rem | 15–16px | 400 | 1.6–1.7 | Intro paragraphs, hero sub |
| Body (default) | 14–16px / 0.875–1rem | 14px | 400 | 1.6 | Standard body copy |
| Body (small) | 12–14px / 0.75–0.875rem | 12px | 400 | 1.5 | Footer links, captions |
| Nav items | 13–15px / 0.8125–0.9375rem | — | 500–600 | 1 | Mixed case, some uppercase |
| CTA button | 14–16px / 0.875–1rem | 14px | 600 | 1 | Letter-spacing: 0.02em |
| Quote/testimonial | 14–16px / 0.875–1rem | 14px | 400 italic | 1.6 | Italicized |

### Typography Notes
- Navigation items appear in **mixed case** with some items in ALL CAPS (e.g., "STRATEGY & CONCEPT", "CLIENTS")
- Navigation uses slightly lighter weight than headings
- Testimonial quotes are **italicized**
- Team member titles (e.g., "Founder") are **italicized**
- Body text color: `#333333` (charcoal)
- Secondary/muted text: `#666666`
- Letter spacing on headings: `0` to `-0.01em`
- Letter spacing on nav/CTAs: `0.02–0.05em` (slightly tracked)

---

## Spacing System

### Base Unit
- **Base**: 4px (Tailwind's default 4px base unit)
- **Primary spacing unit**: 8px (0.5rem)

### Scale

| Token | Value | Tailwind Class |
|---|---|---|
| `space-1` | 4px | `p-1` / `m-1` |
| `space-2` | 8px | `p-2` / `m-2` |
| `space-3` | 12px | `p-3` / `m-3` |
| `space-4` | 16px | `p-4` / `m-4` |
| `space-6` | 24px | `p-6` / `m-6` |
| `space-8` | 32px | `p-8` / `m-8` |
| `space-10` | 40px | `p-10` / `m-10` |
| `space-12` | 48px | `p-12` / `m-12` |
| `space-16` | 64px | `p-16` / `m-16` |
| `space-20` | 80px | `p-20` / `m-20` |
| `space-24` | 96px | `p-24` / `m-24` |

### Section Vertical Padding
- **Standard section**: `py-16` to `py-20` (64–80px) desktop; `py-10` to `py-12` (40–48px) mobile
- **Large hero section**: `py-24` to `py-32` (96–128px)
- **Compact section**: `py-10` to `py-12` (40–48px)
- **Footer**: `py-12` to `py-16` (48–64px)
- **Card internal padding**: `p-6` to `p-8` (24–32px)

---

## Layout

### Max Content Width
- **Maximum container width**: `1200px` (`max-w-6xl` or custom `max-w-[1200px]`)
- **Container horizontal padding**: `px-4` (mobile), `px-6` (tablet), `px-8` (desktop)
- **Centered**: `mx-auto`

### Grid System
- **12-column grid** conceptually; implemented with Tailwind's flexbox/grid utilities
- **2-column grid**: `grid grid-cols-1 md:grid-cols-2`
- **3-column grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **4-column grid**: `grid grid-cols-2 lg:grid-cols-4`
- **Column gap**: `gap-6` to `gap-8` (24–32px)

### Breakpoints
| Name | Min Width | Tailwind Prefix |
|---|---|---|
| Mobile | 0px | (default) |
| Tablet | 768px | `md:` |
| Desktop | 1024px | `lg:` |
| Wide | 1280px | `xl:` |

### Section Padding Patterns
- **Hero sections**: Full-width (no horizontal padding on the image), content inside is max-width constrained
- **Standard sections**: Full-width background color, content inside `max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8`
- **Card grids**: Standard container with `gap-6 lg:gap-8`

---

## Navigation

### Desktop Navigation

**Structure:**
```
[Logo left-aligned] ——— [Nav items center/right] ——— [Language toggle NL|EN] [Cart icon 0]
```

**Visual Specs:**
- **Background**: White (`#FFFFFF`)
- **Height**: Approximately 60–70px
- **Position**: Sticky/fixed at top
- **Border bottom**: Subtle `1px solid #E0E0E0` or light shadow
- **Logo**: Left-aligned, approximately 150–200px wide
- **Nav items**: Horizontal list, right-aligned or centered
- **Nav item font**: 13–15px, weight 500–600, slight tracking
- **Nav item color**: Dark `#333333` default
- **Nav item hover**: Accent blue `#2B7A9E`, possibly underline
- **Active page**: Underline or accent color indicator
- **Language toggle**: "NL | EN" — small text, top-right area, 12–13px
- **Cart icon**: Icon with "0" badge, rightmost element

**Navigation Items (English):**
1. STRATEGY & CONCEPT (with dropdown or subpage link)
2. PLANNING & SUPPORT
3. FORMATS
4. CLIENTS (dropdown: Client List, Testimonials, CSR, Blog)
5. ESCAPE ROOM (dropdown: Escape Room, R@venHack Cyber Security)
6. Blog

**Dropdowns:**
- Appear on hover
- White background
- Light shadow `box-shadow: 0 4px 12px rgba(0,0,0,0.1)`
- Same font as nav items
- Items stack vertically with `py-2 px-4` padding

### Mobile Navigation

- **Trigger**: Hamburger icon (three horizontal lines), right side of nav bar
- **Behavior**: Slides down or overlays as a full-width drawer/panel
- **Background**: White
- **Items**: Full-width, stacked vertically, larger touch targets (`py-3`)
- **Language toggle**: Included in mobile menu
- **Sub-menus**: Expand/collapse (accordion style) within the drawer

### Logo Positioning
- Desktop: Top-left, vertically centered in nav bar
- Mobile: Top-left in nav bar, also appears inside mobile menu drawer
- Links to `/en/home`

---

## Components

### 1. Hero / Carousel Banner

**Layout:**
- Full viewport width, approximately 60–70vh height (not full 100vh)
- 4 rotating slides
- Text content is overlaid on top of each image
- Dark overlay on image for text legibility (semi-transparent black, ~40–50% opacity)
- Content container: centered horizontally and vertically within the hero

**Per-Slide Content:**
1. "Refreshing online meeting concepts. Better results."
2. "A good meeting demands much more than technology and logistics"
3. "Seamless and worryfree online meetings?"
4. "We are online meeting specialists"

**Colors:**
- Background: Full-width photography (professional meeting/office contexts)
- Overlay: `rgba(0, 0, 0, 0.4)` to `rgba(0, 0, 0, 0.5)`
- Headline text: White `#FFFFFF`, bold, 36–42px
- Sub-text (if any): White, 16–18px, lighter weight
- CTA link: White text or accent color, possibly underline style

**CTA Button in Hero:**
- Text: "This is how we work" / "PLAN A FREE CONSULTATION"
- Style: Text link with arrow, OR subtle outlined button
- Color: White or accent teal

**Carousel Controls:**
- Implied navigation (dots or arrows); auto-rotating
- Dots: Bottom-center, small filled/outlined circles

**Tailwind approximate:**
```
<section class="relative w-full h-[60vh] overflow-hidden">
  <img class="absolute inset-0 w-full h-full object-cover" />
  <div class="absolute inset-0 bg-black/45" />
  <div class="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
    <h1 class="text-4xl font-bold max-w-3xl leading-tight">…</h1>
  </div>
</section>
```

---

### 2. Service Column Cards (Homepage — 4-column)

**Layout:**
- 4-column grid on desktop (`grid-cols-4`), 2-column tablet, 1-column mobile
- Each column: image on top, heading below, body text, then a text link CTA
- No card borders; no shadow — content sits on white background
- Images fill the column width, approximately 16:9 or 4:3 ratio

**Per-Column Structure:**
```
[Full-width image ~300×220px]
[Heading — bold, 16–18px, dark]
[Body text — 14–15px, gray, 2–4 lines]
[Text link — accent color, "→ Read more" or similar]
```

**Content — 4 Columns:**
1. Concept development / strategy
2. Meeting formats selection
3. Planning & support services
4. Specialist/Academy positioning

**Colors:**
- Background: White
- Image: Photography
- Heading: `#333333`
- Body: `#666666`
- Link: `#2B7A9E` (accent)
- Link hover: `#1F5E7A` (darker), possible underline

---

### 3. "We Are Online Meeting Professionals" Section

**Layout:**
- White background
- Large centered heading
- Subheading below
- 3-column grid with service summaries
- Two CTA buttons below the grid

**Structure:**
```
[H2: "We are online meeting professionals"]
[Subtitle: "We transform your online meetings into meaningful encounters"]

[3 columns:]
  [Col 1: Strategy & concept — text + link]
  [Col 2: Planning & support — text + link]
  [Col 3: Meeting Academy — text + link]

[CTA row:]
  [Button: "Call or email us"]
  [Button: "Plan a free consultation"]
  [Button: "Book a free demo"]
```

**Colors:**
- Background: White
- Heading: `#1B2A4A` (navy/dark)
- Column titles: `#333333`, bold, 18px
- Body: `#666666`, 14–15px
- Links: `#2B7A9E`
- CTAs: See Button variants below

---

### 4. Specialization / Certification Badges Section

**Layout:**
- Light gray background (`#F5F5F5`)
- Centered heading
- 4-item horizontal row or 2×2 grid

**Structure:**
```
[H3: "We are certified masters in:"]

[4 badges/tiles:]
  [SpatialChat Masters]
  [Zoom Masters]
  [Zoom Events Masters]
  [Teams Masters]
```

**Badge Style:**
- Each badge is a linked tile
- White or light background tile
- Platform logo + "Masters" text
- Subtle border or shadow: `border border-gray-200 rounded shadow-sm`
- Approximately 200×80px or square-ish
- Hover: slight shadow increase or border color change to accent

---

### 5. Testimonials Carousel / Section

**Homepage version:**
- White background
- Heading: "Some of our clients" or "What clients say"
- 5 quotes visible in carousel rotation
- Each quote: text in italics, attribution (bold name + company)
- Navigation: dots or arrow buttons

**Testimonials Page version:**
- Single-column stacked list of all 12 testimonials
- Each testimonial card:

**Card Structure:**
```
[Company logo — ~120×60px, left-aligned or centered]
[Company name — bold, 18–20px, dark]
[Quote text — italic, 14–16px, gray]
[Client name/role — bold, 14px, dark] (if provided)
```

**Colors:**
- Card background: White `#FFFFFF` or very light gray `#F9F9F9`
- Border: None, or subtle `border-b border-gray-200` between cards
- Logo: Full-color brand asset
- Company name: `#333333`, weight 700
- Quote: `#666666`, italic
- Padding: `py-8 px-6` or `p-8`
- Gap between cards: `mb-8` to `mb-12`

**12 Clients Featured:**
ROC TOP, Bergman Clinics, ZonMW, Gemeente Roosendaal, PharmAccess, Oranje Fonds, World Olympians Association, Bouw & Infra, Omron, Red Cross Netherlands, Cultuurfonds, Digital Fitness

---

### 6. Button Variants

#### Primary CTA Button
- **Style**: Filled background
- **Background**: Accent blue `#2B7A9E`
- **Text**: White `#FFFFFF`, 14–15px, weight 600
- **Border radius**: Minimal, `rounded` (4px) or `rounded-none` (Squarespace often uses square buttons)
- **Padding**: `px-6 py-3` (24px × 12px)
- **Hover**: Darker background `#1F5E7A`, smooth transition `transition-colors duration-200`
- **Examples**: "Plan a free consultation", "Book a free demo", "Get in touch"

#### Secondary / Text Link Button
- **Style**: Text link with possible underline, no background
- **Text**: Accent color `#2B7A9E`
- **Underline**: On hover or always
- **Hover**: Darker accent `#1F5E7A`
- **Examples**: "This is how we work →", "Read more", "Contact us"

#### Outline Button (if used)
- **Style**: Transparent background with border
- **Border**: `1px solid #2B7A9E`
- **Text**: `#2B7A9E`
- **Hover**: Filled `#2B7A9E` background, white text
- **Border radius**: Same as primary (`rounded` or `rounded-none`)

---

### 7. "Dark Challenge" Section

**Layout:**
- Full-width section with dark background
- Centered or left-aligned heading
- Subtext paragraph below

**Structure:**
```
[H2: "The real challenge in online meetings isn't the tech or the logistics — it's the people"]
[Body: Explanatory text about human connection in meetings]
[Optional CTA or link]
```

**Colors:**
- Background: Dark charcoal `#2D2D2D` or `#333333`
- Heading: White `#FFFFFF`, bold, 24–28px
- Body text: Light gray `#CCCCCC` or `#E0E0E0`, 15–16px
- CTA link: White or accent

**Spacing:**
- Section padding: `py-16 px-8`

---

### 8. Manifest CTA Section

**Layout:**
- White or light background
- Text + download CTA

**Structure:**
```
[Heading: "Meetings are made by people"]
[Body text about the manifest]
[CTA: "↓ Download MeetingMasters Manifest" (PDF link)]
```

**Button style**: Text link with PDF icon, or outlined button

---

### 9. Meeting Formats Grid

**Layout:**
- White background
- Heading: "Meeting Formats" or "No single meeting is the same"
- Grid of 15–16 format tiles
- 4–6 columns on desktop, 2–3 on tablet, 2 on mobile

**Tile Style:**
```
[Small icon/image]
[Format name — 13–15px, dark text, centered]
```

**Tile specs:**
- Approximately 150×120px or 120×100px
- Linked (whole tile is clickable)
- Subtle border or background `bg-gray-50`
- Hover: background change or scale up slightly

**Format Names:**
Online citizen councils, Online townhall/All hands, Online brainstorming, Online company party, Online Escape Room, Personal development online, Online sounding board, Online World Café, Annual Meeting Online, Online Strategy Sessions, Online Open Space, Online conferences, Online Community Building, Interactive Webinars, Online Team Development, Remote Office

---

### 10. Footer

**Layout:** 4 columns on desktop, 2 on tablet, 1 on mobile (stacked)

**Background:** Dark charcoal `#2D2D2D` to `#333333`
**Text color:** Light gray `#CCCCCC` to `#FFFFFF`
**Top separator:** `border-t border-gray-600` or `border-neutral-700` (subtle line)

**Column 1 — Company/Logo:**
- MeetingMasters logo (white version)
- Tagline: "We make more of meetings. We are MeetingMasters."
- Or just the newsletter subscribe section

**Column 2 — Organisation:**
- Heading: "Organisation" (bold, 14px, white)
- Links: Team, Partners, Vacancies
- Link color: `#CCCCCC`, hover: white

**Column 3 — Library:**
- Heading: "Library" (bold, 14px, white)
- Links: Manifest, Quality commitment, Downloads
- Link color: `#CCCCCC`, hover: white

**Column 4 — Contact:**
- Heading: "Contact" (bold, 14px, white)
- Email: contact@meetingmasters.online (mailto link)
- Phone: +31 20 239 03 13 (tel link)
- Support: +31 6 33034707
- Address: Schellingwouderdijk 157, 1023NC Amsterdam, The Netherlands

**Social Icons Row:**
- LinkedIn icon only
- White icon, hover: accent teal
- Approximately 20×20px icon

**Newsletter Subscribe:**
- Small input field + "Subscribe" button
- Or just a "Subscribe" text link
- Light border on input

**Copyright:**
- `© 2025 MeetingMasters Online`
- Bottom of footer
- 11–12px, `#999999`

**Footer Padding:**
- `py-12 px-8` or `py-16`
- Column gaps: `gap-8`

---

### 11. Team Member Card

**Layout:** Single member (Emilie van Rappard) with portrait left/top, info right/below

**Structure:**
```
[Portrait photo — square or portrait, ~300×350px, no border-radius or slight rounding]
[Name — H3, bold, linked to LinkedIn]
[Title — italic, 14–16px, gray]
[Bio — 3–4 sentences, 14–15px, regular]
[LinkedIn link icon or text]
```

**"Our Masters" Section:**
- Heading: "Our Masters" or "About our Meeting Masters"
- Subheading: "A clear vision and many years of solid experience"
- Landscape team photo (~800×400px)
- Descriptive paragraph about the broader team

**Colors:** White background, dark text, standard typography hierarchy

---

### 12. Contact Form Section

**Layout:**
- Split or single-column layout
- Hero banner at top
- Philosophy text section: "Connection is the starting point of all development"
- Contact info block
- Form or CTA to quotation

**Contact Info Block:**
```
[Phone: +31 20 239 03 13]
[Mobile: +31 6 4575 2819]
[Email: contact@meetingmasters.online]
[Address: Schellingwouderdijk 157, 1023NC Amsterdam, The Netherlands]
```

**CTA Buttons:**
- "What might your meeting cost?" — links to `/en/quotation`
- Style: Primary filled button or prominent text link

**Philosophy Heading:**
- `H2`: "It all starts with contact"
- Body text: ~3–4 sentences about genuine connection

---

### 13. Service Detail Card (3-column on service pages)

Used on Strategy & Concept and Planning & Support pages:

**Layout:** 3-column grid (`grid-cols-3`), each card:
```
[Icon/image — ~300×250px, top of card]
[Card heading — bold, 16–18px]
[Description — 14–15px, 3–5 lines]
```

**Style:**
- White background
- No visible card borders (open layout)
- Image sits above text with `mb-4` gap
- Heading below image

**Strategy & Concept — 3 cards:**
1. Goal & Direction
2. Formats & Technology
3. Structure & Design

**Planning & Support — 3 columns:**
1. Before your meeting (laptop/iPhone image)
2. During your meeting (video call image)
3. After your meeting (five-star rating image)

Each with bulleted list of services (arrow ► indicator):
- Before: Meeting design, platform design, presentation design
- During: Participant onboarding, interaction monitoring, facilitator support
- After: Participant evaluation, content reports, improvement advice

---

## Page Layouts

### Home Page (`/en/home`)

Section order (top to bottom):
1. **Navigation bar** — sticky, white
2. **Hero carousel** — full-width, ~60vh, 4 slides, dark overlay, white text CTA
3. **4-column service overview** — white bg, equal columns, image+heading+text+link
4. **"We are online meeting professionals"** — white bg, H2 centered, 3-col service summary + 3 CTAs
5. **Certification badges** — light gray bg, 4 platform badges (SpatialChat, Zoom, Zoom Events, Teams)
6. **Testimonials carousel** — white bg, quote rotation with navigation
7. **"Real challenge" statement** — dark charcoal bg, white text, bold statement
8. **Manifest CTA** — white/light bg, text + PDF download link
9. **Meeting formats grid** — white bg, 4–6 col grid of 15+ format tiles
10. **"Some of our clients" logo strip** — white or light bg, client logos
11. **Footer** — dark charcoal, 4-col

### Strategy & Concept Page (`/en/strategy-concept`)

1. **Navigation bar**
2. **Hero banner** — full-width image, "From strategy to online meeting concept" overlay text
3. **Intro section** — white bg, paragraph describing approach
4. **3-column service cards** — Goal & Direction / Formats & Technology / Structure & Design
5. **CTA section** — "Get in touch" (appears twice, white bg)
6. **Footer**

### Planning & Support Page (`/en/planning-support`)

1. **Navigation bar**
2. **Hero banner** — "Planning & support: online meeting essentials"
3. **Intro section** — white bg, philosophy text "good meetings are not about technology"
4. **"Make more of meetings" — 3-column section**
   - Before your meeting (bullet list)
   - During your meeting (bullet list)
   - After your meeting (bullet list)
5. **CTA section** — "Contact us" links
6. **Footer**

### Testimonials Page (`/en/testimonials`)

1. **Navigation bar**
2. **Page hero** — "Testimonials" heading
3. **Testimonial list** — single column, 12 testimonial cards stacked
4. **Footer**

### Team Page (`/en/team`)

1. **Navigation bar**
2. **Page heading** — "Our Team" (H1)
3. **Sub-heading** — "About our Meeting Masters" + "A clear vision and many years of solid experience"
4. **Founder card** — Emilie van Rappard, portrait + bio
5. **"Our Masters" section** — team description + landscape photo
6. **Footer**

### Contact Page (`/en/contact`)

1. **Navigation bar**
2. **Hero banner** — "Contact" heading
3. **Philosophy section** — "Connection is the starting point of all development" + "Discovery is the starting point of curiosity"
4. **"It all starts with contact"** — long form text section, company philosophy
5. **Contact info block** — phone, mobile, email, address
6. **CTA buttons** — "What might your meeting cost?" × 2
7. **Footer**

---

## Icons & Assets

### Icon Style
- **Navigation icons**: Minimal — cart/bag icon, hamburger menu icon
- **Social icons**: LinkedIn only (outline or filled, simple)
- **Arrow indicators**: Text arrow "►" used as bullet point in lists
- **Badge icons**: Platform logos (Zoom, Teams, SpatialChat) — colored brand marks
- **Overall style**: Clean, minimal, functional

### Icon Libraries
- Likely using Squarespace's built-in icon set or simple SVG icons
- For the rebuild: **Heroicons** (outline style) or **Lucide** icons recommended

### Image Slots & Descriptions

| Slot | Dimensions (approx) | Description |
|---|---|---|
| Logo | 200×50px (display) | MeetingMasters logomark + wordmark, PNG with transparency |
| Hero slide 1 | 1500×900px | People in an online meeting, warm professional setting |
| Hero slide 2 | 1500×900px | Human connection / meeting context |
| Hero slide 3 | 1500×900px | Professional seamless meeting setup |
| Hero slide 4 | 1500×900px | Team of meeting specialists |
| Homepage col image × 4 | 400×300px | Meeting concept visuals, 1 per service column |
| Strategy hero banner | 1500×500px | Planning/design meeting theme |
| Strategy card image × 3 | 300×250px | Illustrations/icons per service card |
| Planning hero banner | 1500×500px | Online meeting support theme |
| Planning col image × 3 | 400×300px | Laptop, video call, 5-star rating |
| Testimonial logos × 12 | 150×75px | Client brand logos (ROC TOP, Bergman, etc.) |
| Team founder portrait | 300×350px | Professional headshot, portrait orientation |
| Team group photo | 800×400px | Landscape team collaboration image |
| Contact hero banner | 1500×500px | Contact/connection themed image |
| Meeting format tiles × 16 | 150×120px | Small format-specific icons or photos |
| Client logos × 30+ | 100–200×60px | Client brand logos (full-color) |
| Format: Brainstorm | 300×220px | Online brainstorm session visual |
| Format: Escape Room | 300×220px | Escape room / puzzle visual |
| Format: Webinar | 300×220px | Interactive webinar setup |
| Manifest PDF | — | Brand manifest document (downloadable) |

### CDN Structure
All images are served from:
`https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/`

For the rebuild: place images in `/public/images/` directory.

---

## Animations & Interactions

### Carousel / Slider (Hero)
- Auto-rotating, likely 4–5 second interval
- Transition: Crossfade or slide (fade preferred based on Squarespace default)
- Manual navigation: dot indicators at bottom
- Pause on hover (optional)

### Hover Effects
- **Nav items**: Color change to accent teal, possible underline. `transition-colors duration-150`
- **Links**: Color change, `transition-colors duration-150`
- **Buttons (filled)**: Background color darkens. `transition-colors duration-200`
- **Service column links**: Underline appears or color deepens
- **Badge tiles**: Subtle box-shadow increase or slight scale `hover:scale-105 transition-transform duration-200`
- **Footer links**: Color lightens toward white on hover
- **Client logos**: Opacity decrease on hover (`hover:opacity-80`)

### Scroll Behavior
- Sticky navigation remains visible on scroll
- No prominent scroll animations (fade-in on scroll not strongly evident — clean, static layout)
- Possible subtle fade-in for hero text content

### Dropdown Menus
- Appear on hover (desktop), slide down
- `transition: opacity 200ms ease, transform 200ms ease`
- Slight translate-y on open: `translate-y-1` to `translate-y-0`

### Mobile Menu
- Hamburger → full-width dropdown or side drawer
- Accordion-style sub-menus expand on tap
- `transition: height 300ms ease` or similar collapse animation

---

## Accessibility

### Color Contrast
- Dark text (`#333333`) on white (`#FFFFFF`): ratio ~10:1 — WCAG AA/AAA pass
- White text (`#FFFFFF`) on dark (`#2D2D2D`): ratio ~12:1 — WCAG AA/AAA pass
- Accent blue (`#2B7A9E`) on white: ratio ~4.5:1 — WCAG AA pass (borderline; verify)
- White text on hero overlay (black/40%): Contrast depends on image; overlay ensures minimum 4.5:1

### Focus States
- All interactive elements should have visible focus rings
- Recommended: `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2B7A9E]`
- Navigation items: visible focus outline in accent color
- Buttons: visible focus ring matching button accent

### ARIA & Semantics
- Navigation: `<nav>` with `aria-label="Main navigation"`
- Mobile menu button: `aria-expanded`, `aria-controls`
- Carousel: `aria-live="polite"`, `aria-label` on slides
- Images: meaningful `alt` text on all `<img>` tags
- External links: `target="_blank" rel="noopener noreferrer"` + accessible label

### Language
- `<html lang="en">` (English version)
- Language switcher: both NL and EN clearly labeled

---

## Additional Notes for the Rebuild

### Tech Stack Mapping
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Fonts**: Configure via `next/font/google` — use `Open_Sans` or `Inter` as closest match
- **Icons**: `lucide-react` or `@heroicons/react`
- **Carousel**: `embla-carousel-react` or `swiper`
- **Images**: Use `next/image` with width/height props; host in `/public/images/`

### Key Colors in Tailwind Config
```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: '#1B2A4A',
      accent: '#2B7A9E',
      'accent-dark': '#1F5E7A',
      'bg-dark': '#2D2D2D',
    },
    fontFamily: {
      sans: ['Open Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    maxWidth: {
      content: '1200px',
    },
  }
}
```

### Routing Structure
```
/en/home                    → app/en/home/page.tsx
/en/strategy-concept        → app/en/strategy-concept/page.tsx
/en/planning-support        → app/en/planning-support/page.tsx
/en/meeting-formats         → app/en/meeting-formats/page.tsx
/en/clients                 → app/en/clients/page.tsx
/en/testimonials            → app/en/testimonials/page.tsx
/en/team                    → app/en/team/page.tsx
/en/contact                 → app/en/contact/page.tsx
/en/quotation               → app/en/quotation/page.tsx
/en/academy                 → app/en/academy/page.tsx
/en/escape-rooms            → app/en/escape-rooms/page.tsx
```

### Shared Layout Components
```
components/
  layout/
    Navbar.tsx          — sticky header with logo, nav, language toggle, cart
    Footer.tsx          — 4-col dark footer
    MobileMenu.tsx      — hamburger drawer
  ui/
    Button.tsx          — primary / secondary / outline variants
    HeroCarousel.tsx    — 4-slide auto-rotating hero
    TestimonialCard.tsx — logo + company + quote
    ServiceCard.tsx     — image + heading + text + link
    FormatTile.tsx      — small format icon tile
    BadgeTile.tsx       — certification badge
    TeamMemberCard.tsx  — portrait + name + title + bio
```
