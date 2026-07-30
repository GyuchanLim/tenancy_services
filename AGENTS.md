## Project Overview

This app surfaces New Zealand tenancy information, with the current primary flow focused on searching market rent data backed by MBIE/public government data.

## Set up

## Debugging

## UI and Copy Style

Follow the existing layout and typography direction used in `src/app/pages/home/HomePage.tsx`, `src/components/layout/Navbar/Navbar.tsx`, and `src/components/layout/Footer/Footer.tsx`.

### Libraries and Components

- Use Chakra UI for structural layout wrappers where possible, especially `Box` from `@chakra-ui/react`.
- Use the shared `Container` component from `@components/layout` or `src/components/layout/Container` for page, nav, and footer width/padding.
- Avoid raw `div` for layout in shared/page UI when `Box` can do the same job.
- Use semantic HTML through Chakra when appropriate, for example `Box as="section"`, `Box as="article"`, and `Box as="ul"`.
- Keep normal semantic elements for text and links when they are simpler and type-safe, such as `h1`, `h2`, `p`, `a`, `li`.

### Styling

- Styling is primarily Tailwind utility classes passed through `className`.
- Use restrained neutral colors:
  - Primary text: `text-gray-900`
  - Supporting text: `text-gray-600`
  - Muted labels: `text-gray-500`
  - Borders: `border-gray-200`
  - Primary CTA background: `bg-gray-900` with `hover:bg-gray-700`
- Use subtle borders instead of heavy cards or decorative backgrounds.
- Prefer `rounded-sm` for buttons/cards and avoid large rounded corners unless an existing component requires it.
- Keep spacing compact and practical: `gap-4`, `gap-6`, `space-y-4`, `space-y-10`, `py-4`, `py-6`, and `p-5` are established patterns.
- Prefer responsive stacking with `flex flex-col ... sm:flex-row sm:items-center sm:justify-between` for layout sections like navbar/footer.

### Typography

- Use `font-serif` for brand text and headings.
- Use `font-mono` for supporting copy, metadata, navigation links, CTAs, and short technical labels.
- Monospace text should use tight/normal character spacing. Do not use wide tracking for mono text; prefer `tracking-normal` when tracking is explicit.
- Keep headings direct and short. Current tone is practical and factual, not marketing-heavy.

### Copy Tone

- Be concise and specific.
- Lead with what the user can do, then mention the official data source.
- Prefer phrases like “Find market rent data faster” and “Search New Zealand market rent information” over long explanations.
- Highlight key features as short title + one-sentence description.
- When referencing data provenance, use MBIE or “New Zealand's Ministry of Business, Innovation and Employment” clearly.

### Design Patterns

- Home-page feature summaries use a simple array of objects rendered into repeated `Box as="article"` elements.
- Navigation links should be data-driven with a small `navLinks` array when there is more than one link.
- Footer should include a dynamic year via `new Date().getFullYear()` rather than a hard-coded year.
- External source links should use `target="_blank"` and `rel="noreferrer"`.
- Avoid decorative gradients, hero illustrations, nested cards, and oversized marketing layouts. This app should feel like a focused government-data utility.

## Rules

- When unsure, escalate to human.
- Do not connect to real web in specs.
