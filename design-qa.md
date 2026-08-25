# Design QA

## Comparison target

- Source visual truth:
  - `design-evidence/source-desktop.png`
  - `design-evidence/source-mobile.png`
- Browser-rendered implementation:
  - `design-evidence/implementation-desktop.png`
  - `design-evidence/implementation-mobile.png`
- Side-by-side evidence, source on the left and implementation on the right:
  - `design-evidence/comparison-desktop.png`
  - `design-evidence/comparison-mobile.png`
- State: public profile page, fully loaded, default state, top-to-bottom full-page capture.

## Viewport and density

| Target | CSS viewport | Source pixels | Implementation pixels | Normalization |
| --- | --- | --- | --- | --- |
| Desktop | 1280 × 720 | 1265 × 1079 | 1265 × 1005 | Both browser captures use the same 1265 px content width after the 15 px scrollbar. No scale transform was applied. |
| Mobile | 390 × 844 | 375 × 2252 | 375 × 1359 | Both browser captures use the same 375 px content width after the 15 px scrollbar. No scale transform was applied. |

Browser screenshots were emitted in CSS-pixel dimensions, so the page-reported device pixel ratio did not require downsampling.

## Full-view comparison evidence

- Desktop preserves the source's defining composition: compact identity column, large brown three-line introduction, social icon row, bilingual section labels, and two-column work layout.
- Mobile intentionally corrects the source page's broken narrow-column rendering. The implementation reflows the same content into a readable single column with 54 px social targets and full-width work rows, as explicitly requested for H5 adaptation.
- All text, profile details, social destinations, contact details, friend link, and work links match the public source data.

## Focused-region comparison evidence

Separate crops were not needed. The paired screenshots retain the source and implementation at equal content widths, and the profile, social-icon, and work-card regions remain readable at original detail. These regions were also inspected in individual browser viewport captures during desktop and mobile verification.

## Required fidelity surfaces

- Fonts and typography: all three source Avenir files are local and loaded through `@font-face`; Chinese text uses the same PingFang-first fallback strategy. Display hierarchy, bilingual micro-labels, and work-copy weights are preserved. Mobile wrapping is intentional and readable at 320 px and 390 px.
- Spacing and layout rhythm: desktop keeps the reference's asymmetric two-column rhythm and large negative space. H5 uses a single-column sequence and practical section gaps. No horizontal overflow was present at 320, 390, 768, or 1280 px.
- Colors and tokens: warm white, dark brown, neutral gray, low-contrast atmospheric avatar wash, and restrained shadows map to the source. Contrast remains adequate for readable text and visible focus rings.
- Image quality and asset fidelity: the original avatar, friend avatar, seven social icons, two contact icons, three work covers, and three fonts are stored locally. No hotlinked images, placeholder art, custom SVG substitutes, or broken images remain.
- Copy and content: all visible app-specific copy comes from `jike.city/snapre` and its public profile data. No invented biography or project claims were added.
- Icons: all visible icons are the source raster assets at their native aspect ratios. Desktop and mobile crops remain circular or rounded-square as intended.
- States and interactions: every external destination is present as a semantic link; email uses `mailto:`; WeChat and WeChat Official Account buttons successfully copy their public identifiers and show status messages.
- Accessibility: semantic links and buttons, accessible labels, alt text, keyboard focus rings, reduced-motion handling, safe-area padding, and a skip link are present.

## Browser verification

- Primary interactions tested: copy WeChat ID, copy WeChat Official Account name, and link destination inventory.
- Browser console warnings/errors: none.
- Asset requests: all returned HTTP 200 or 304; no 404s.
- Broken images: none.
- Horizontal overflow: none at all tested breakpoints.

## Findings

No actionable P0, P1, or P2 differences remain. The shorter mobile page and reordered side content are intentional H5 fixes, not fidelity drift.

## Comparison history

- Pass 1: no P0/P1/P2 findings. The source's desktop design language and content were preserved, while the user-requested H5 reflow was verified at 320 × 720 and 390 × 844. No visual fixes were required after this comparison.

## Follow-up polish

No blocking or recommended P3 follow-ups.

final result: passed
