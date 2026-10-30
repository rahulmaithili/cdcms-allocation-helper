# Chrome Web Store listing — CDCMS Allocation Helper (v1.1.0)

Copy-paste draft for the Chrome Web Store Developer Dashboard.
After approval, Chrome updates every installed user automatically —
no button, no ZIP replace, no manual step.

## Name

CDCMS Allocation Helper

## Summary (short description)

Automate HP Gas CDCMS cylinder allocation by mapping area codes to delivery vendors.

## Detailed description

CDCMS Allocation Helper automates daily cylinder allocation on the HP Gas
CDCMS portal.

- Map area codes to delivery men once, and the helper fills allocations
  automatically on the Allocation page.
- Works on Allocation and Allocation-wise Cash Memo Print pages.
- Bulk import areas from Excel (copy-paste), export/import full backups
  as JSON, and manage vendors from one dashboard.
- License-protected: the extension activates with a LicenseWala
  subscription license key and locks automatically when the license
  expires or is blocked by the administrator.

Built for LPG distributors using HP Gas CDCMS.

## Category

Productivity

## Language

English

## Privacy policy (draft — needs a public URL before submission)

> **CDCMS Allocation Helper — Privacy Policy**
>
> This extension stores your area-vendor mappings, vendor list, and area
> list locally in your browser (chrome.storage.local). Nothing is sold
> or shared with advertisers, and there is no third-party tracking.
>
> When you activate the extension, your license key and an anonymous
> device identifier are sent to the LicenseWala verification server
> solely to check whether the license is active, expired, or blocked.
> No allocation data, customer names, or addresses leave your browser
> for any other purpose.
>
> Questions: support@licensewala.com

Options for hosting this policy at a public URL: add it as a page on
licensescript.netlify.app, or publish it from any site you control, then
paste that URL into the store listing's Privacy Policy field.

## Screenshots needed (1280x800, from the owner)

The store requires at least one screenshot. Capture from real CDCMS
pages with the helper active: (1) the Allocation page with mappings
applied, (2) the extension dashboard (options page) with areas/vendors,
(3) the Cash Memo Print page. Do not include customer phone numbers or
other personal data in screenshots.

## Submission checklist for the owner

1. Chrome Web Store Developer account (one-time $5 registration, paid
   with your Google account).
2. Upload the release ZIP of this repo (all files except `.git`).
3. Paste the name, summary, description, and category above.
4. Paste the privacy policy URL (see above).
5. Upload the icon (icon128.png is in this repo) and screenshots.
6. Submit for review (typically a few days).
7. After approval: existing users on the manual (unpacked) install need
   to install from the Store **once**; after that one switch, every
   future version reaches them automatically.

## Notes for reviewers (do not paste into the listing)

- `host_permissions` covers only the LicenseWala license-verification
  endpoint (Supabase). The extension fetches no remote code.
- The manifest's `file://` matches exist only for the local mock test
  pages (mock_allocation.html / mock_print.html) and can be removed in
  a future cleanup without affecting real users.
