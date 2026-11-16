# RH logo: four corners

My initials framed by four corners, one for each part of my life:

| Corner | Stands for | Symbol | Light | Dark |
| --- | --- | --- | --- | --- |
| Top left | Strategy | Target | `#185FA5` | `#85B7EB` |
| Top right | Tech | Circuit trace | `#0F6E56` | `#5DCAA5` |
| Bottom left | Family | Heart | `#993C1D` | `#F0997B` |
| Bottom right | Football | Pitch corner arc and flag | `#3B6D11` | `#97C459` |

Letters are ink `#121922` on light backgrounds and paper `#f6f4f0` on dark.

| File | Use |
| --- | --- |
| `rh-logo.svg` | Full logo on light backgrounds |
| `rh-logo-reversed.svg` | Full logo on dark backgrounds |
| `rh-logo-simple.svg` | Corners and RH only, for small sizes (under ~48px) |
| `rh-logo-mono.svg` | One colour (`currentColor`) for print or single-colour use |
| `rh-icon.svg` | Rounded app-style tile |
| `rh-avatar.svg`, `rh-avatar-1024.png` | Square profile picture; fits inside a circle crop (LinkedIn, X) |
| `rh-four-corners.svg` | Labelled diagram explaining the corners |

## Changing the logo

The shapes live in `components/logo-shapes.ts`, the single source for the site header,
footer, About page, favicon (`app/icon.svg`), Apple icon and share image. After editing it, run:

```bash
npm run brand
```

That rewrites the SVGs here and `app/icon.svg`. The PNG avatar is rendered from
`rh-avatar.svg` on macOS with:

```bash
cd brand && qlmanage -t -s 1024 -o . rh-avatar.svg && mv rh-avatar.svg.png rh-avatar-1024.png
```
