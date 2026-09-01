# VonBrahkay Group — Website

Four-page static site: Home, Services, About, Contact. Plain HTML/CSS/JS — no build tools required, so it can be hosted anywhere (Netlify, GitHub Pages, Namecheap/GoDaddy shared hosting, etc.).

## Before this goes live

**1. Replace placeholder contact info**
Search every file for `[email address]` and `[phone number]` and replace with real values. They appear in the footer of every page and on the Contact page.

**2. Connect the contact form (2 minutes)**
The form on `contact.html` is wired for [Formspree](https://formspree.io) but uses a placeholder endpoint. To activate it:
1. Create a free Formspree account and a new form.
2. Copy the form endpoint URL it gives you (looks like `https://formspree.io/f/abcd1234`).
3. In `contact.html`, find `action="https://formspree.io/f/YOUR_FORM_ID"` and replace `YOUR_FORM_ID` with your real ID.
4. Done — submissions will email you directly, and the visitor sees an in-page confirmation.

Until you do this, the form will show a friendly "not connected yet" message instead of erroring, so nothing breaks if you launch before setting it up.

If you'd rather not use Formspree, any form backend that accepts a standard HTML POST (Web3Forms, Basin, Netlify Forms if hosting on Netlify) will work with this same markup — just change the `action` URL.

**3. Logo**
The brand guidelines specify a wordmark-only identity (no icon), Source Serif 4. The site currently renders this as styled text, matching the guidelines. If a vector wordmark file is produced later, it can replace the text wordmark in the header/footer of each page.

**4. Favicon**
Not yet included. Once a compact "VB" mark is finalized (per the brand guidelines' compact-mark spec), add it as `favicon.ico` / `favicon.png` and link it in the `<head>` of each page.

## File structure
```
index.html      Home
services.html   Services & pricing
about.html      About / founder story
contact.html    Contact form
styles.css      All styling (brand colors, type, layout)
script.js       Mobile nav toggle + form submission handling
```

## Hosting options (no code changes needed)
- **Netlify / Vercel** — drag-and-drop this folder, done.
- **GitHub Pages** — push this folder to a repo, enable Pages.
- **Traditional hosting (GoDaddy, Namecheap, etc.)** — upload via FTP/file manager to the domain's public root.

Point your registered domain (vonbrahkaygroup.com) at whichever host you choose.
