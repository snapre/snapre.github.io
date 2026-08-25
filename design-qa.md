# Design QA

## Comparison target

- Source URL: `https://jike.city/snapre`
- Source visual truth:
  - `design-evidence/source-qa-desktop-full.jpg`
  - `design-evidence/source-qa-mobile-full.jpg`
- Rendered implementation:
  - `http://127.0.0.1:4173/`
  - `design-evidence/implementation-qa-desktop-full.jpg`
  - `design-evidence/implementation-qa-mobile-full.jpg`
- Combined comparison evidence:
  - `design-evidence/comparison-qa-desktop.png`
  - `design-evidence/comparison-qa-mobile.png`
- State: initial page, light appearance, full-page capture, no hover or toast visible.

## Viewport normalization

| Target | CSS viewport | Source pixels | Implementation pixels | Density |
| --- | --- | --- | --- | --- |
| Desktop | 1280 × 720 | 1265 × 1079 | 1265 × 1079 | 1×; the 15 px difference is the browser scrollbar |
| H5 | 390 × 844 | 375 × 2252 | 375 × 2252 | 1×; the 15 px difference is the browser scrollbar |

The source and implementation were captured in the same in-app browser, at the same viewport, after a fresh navigation and with scroll position reset to the top. No resizing or density conversion was applied before comparison.

## Findings

- No actionable P0, P1, or P2 mismatch.
- The source and implementation full-page screenshots are byte-identical at both tested viewports:
  - Desktop SHA-256: `a1818a2584f6b9f3b6d980c9673cea97a86cfab453159f5ab3714fd01e201dfa`
  - H5 SHA-256: `d33148459712e4308c2f0312854588a9e4eb18b8e08abb7c781dbb5c0376399e`

## Required fidelity surfaces

- Fonts and typography: local Avenir LT Std Black, Medium, and Roman font files match the captured source assets. Family, weights, sizes, line heights, wrapping, and truncation render identically.
- Spacing and layout rhythm: desktop two-column proportions and the source's narrow stacked H5 behavior have identical coordinates, section heights, margins, padding, item sizes, radii, and full-page height.
- Colors and visual tokens: white page, `#603b20` introduction copy, gray text tokens, image borders, and the avatar-derived blurred background use the source values. The blur is 455 × 455 px, `blur(100px)`, opacity `0.3`.
- Image quality and asset fidelity: avatar, friend portrait, contact icons, seven social icons, and three work images are the exact downloaded source assets; there are no hotlinked images, CSS drawings, placeholder assets, or substituted icons.
- Copy and content: name, status, headings, introduction, social links, work names, and descriptions match the source.
- Responsiveness: desktop and H5 captures match the source pixel-for-pixel, including the source's intentional mobile wrapping and two-across work-image layout.
- Accessibility and behavior: semantic links/buttons, alt labels, and keyboard-reachable copy controls are present without changing the default visual state.

## Interaction verification

- Email target: `mailto:hello@snapre.fun`.
- WeChat copy button writes `snapre` and shows `已复制`.
- Official-account copy button writes `易普 AI` and shows `已复制`.
- Friend, seven social, and three work destinations are present and use the captured URLs.
- Browser console errors: none.
- Static asset hotlinks: none.

## Focused comparison

No separate crop was required for the final pass because the fresh source and implementation full-page captures are byte-identical at both desktop and H5 sizes. Earlier top-viewport captures were also checked for avatar blur, Avenir rendering, section headings, icons, and work-image alignment.

## Comparison history

- Final pass: no P0/P1/P2 findings; no visual correction was required after the paired full-page comparison.
- Superseded non-matching design explorations were discarded before this source-matched QA pass and are not part of the implementation.

## Implementation checklist

- [x] Source assets stored locally.
- [x] Source CSS values reproduced.
- [x] Desktop and H5 full-page rendering compared.
- [x] Copy controls and destinations checked.
- [x] Console and hotlink checks completed.

final result: passed
