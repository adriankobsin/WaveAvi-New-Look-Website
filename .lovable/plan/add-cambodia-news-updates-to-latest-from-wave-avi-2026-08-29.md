# Add Cambodia news updates to Latest from Wave-AVI

Two new entries in the auto-scrolling news ticker on the homepage Innovation & News section.

## New items

**1. Wave AVI opens in Phnom Penh, Cambodia**
- Category: Company News
- Marks the official opening of Wave AVI's Cambodia operation, extending the Asia-Pacific presence alongside Thailand and Singapore.

**2. First Cambodia project delivered — Arena Central Sports Bar**
- Category: Project
- Wave AVI's first delivered project in Cambodia: a full audio, video and control installation for the Arena Central Sports Bar in Phnom Penh — large-format screens, multi-zone distributed audio, live sports feed distribution and simple one-touch control for staff.

Wording stays generic on technical detail since exact system specifics weren't confirmed. Send me the real scope (screen sizes, brands, zones) or any confirmed venue details and I'll swap the copy in.

## Technical notes

- Edit `src/components/InnovationSection.tsx` only: add two objects to the `newsItems` array (`category`, `date`, `title`, `excerpt`, `featured: false`).
- Placed first among the non-featured items so they lead the ticker; existing featured journal article is unchanged.
- No new images, routes or backend changes.
