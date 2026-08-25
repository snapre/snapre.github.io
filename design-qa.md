# Design QA

## Requested changes

- Merge the former left column into the centered main column.
- Remove the friend-link section.
- Remove the visible `jike.city/snapre` profile link.
- Move contact controls below the works section.
- Change the three-line founder introduction to normal body text.
- Tighten the overall desktop and H5 layout.
- Place the profile block and founder introduction in one left-right row.
- Use a full-viewport Gaussian blur of the avatar as the page background.

## Evidence

- Desktop implementation: `design-evidence/implementation-full-blur-desktop.jpg`
- H5 implementation: `design-evidence/implementation-full-blur-mobile.jpg`
- H5 bottom/contact state: `design-evidence/implementation-full-blur-mobile-bottom.jpg`
- Desktop viewport: 1280 × 720 CSS px.
- H5 viewport: 390 × 844 CSS px.

## Verification

- The main content is one centered column on desktop and one full-width column on H5.
- The top hero is a single grid row: profile on the left and introduction on the right.
- Desktop hero columns are 220 px + remaining width with a 64 px gap.
- H5 hero columns are 96 px + remaining width with a 24 px gap.
- The avatar background is fixed to the viewport, covers 124vw × 124vh, uses `blur(120px) saturate(1.05)`, and has no exposed edges while scrolling.
- A translucent white overlay preserves text contrast without hiding the avatar-derived color field.
- `友情链接` and `jike.city/snapre` are absent from rendered text and links.
- Content order is profile → introduction → social → works → contact.
- Introduction computed type is `18px / 30px / 400`.
- H5 work items are one per row with readable titles and descriptions.
- H5 document width is 375 px excluding the scrollbar; no horizontal overflow.
- H5 full document height is 1140 px after the two blocks are merged.
- WeChat copy writes `snapre`; official-account copy writes `易普 AI`.
- Email, social, and work destinations remain present.
- Browser console errors: none.

## Findings

- No actionable P0, P1, or P2 issues in the requested desktop or H5 states.

final result: passed
