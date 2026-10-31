# CDCMS Allocation Helper

> Automate daily cylinder allocation on the HP Gas CDCMS portal —
> map area codes to delivery vendors once, and let the helper fill
> allocations for you.

![Version](https://img.shields.io/badge/version-1.1.0-blue)
![Manifest](https://img.shields.io/badge/manifest-V3-green)
![License](https://img.shields.io/badge/license-LicenseWala%20Subscription-purple)

---

## What it does

HP Gas distributors manage hundreds of delivery areas on the CDCMS
portal every day. Doing that allocation by hand — area by area, vendor
by vendor — is slow and error-prone.

**CDCMS Allocation Helper** removes that work:

- **Area → Vendor mapping** — assign each delivery area to a delivery
  man once. On the CDCMS Allocation page, the helper fills the
  allocation automatically from your mappings.
- **Bulk area import** — paste area lists straight from Excel
  (Code + Name columns) to add or replace areas in seconds.
- **Backup export / import** — export your complete setup
  (areas, vendors, mappings) as a JSON file, and restore it on any
  machine with one click.
- **Cash Memo Print support** — the helper also works on the
  Allocation-wise Cash Memo Print page.
- **License protected** — the extension activates with a LicenseWala
  subscription license key and locks automatically when the license
  expires or is blocked.

## How it works

1. Install the extension (see below).
2. Open the extension dashboard and activate it with your LicenseWala
   license key.
3. Add your delivery men, import your areas, and map each area to a
   delivery man.
4. Open the CDCMS Allocation page — allocations fill in automatically
   from your mappings.

## Installation

### Option A — Chrome Web Store (recommended, coming soon)

Once published on the Chrome Web Store, install from the store listing
and every future update will reach you automatically — no manual steps.

### Option B — Manual install (developer mode)

1. Download this repository (Code → Download ZIP) and extract it.
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked** and select the extracted folder.
5. Open the extension dashboard from the toolbar icon and activate
   your license key.

> Manual installs do not auto-update. After a new release, download the
> new version and reload the extension from `chrome://extensions`.

## Incognito mode

The helper also works in Incognito windows:

1. Open `chrome://extensions`, find this extension, and turn on
   **Allow in Incognito**. (Chrome keeps this off by default, and no
   extension can turn it on by itself.)
2. That's it — the license you activated in a normal window works in
   Incognito too, because the extension shares one license state
   (`"incognito": "spanning"` in the manifest).

## License activation

A valid **LicenseWala subscription license** is required. Keys are
issued from the LicenseWala portal
([licensescript.netlify.app](https://licensescript.netlify.app/)).

- Enter your key in the extension dashboard → **Activate License**.
- The key is verified online against the LicenseWala server, together
  with an anonymous device identifier.
- If the license expires or is blocked by the administrator, the helper
  locks itself and shows a renewal prompt. Your mappings and data stay
  safe and are restored as soon as a valid license is activated again.

## Permissions — and why

| Permission | Why it is needed |
|---|---|
| `storage` | Saves your areas, vendors, and mappings locally in your browser. |
| License server host | Verifies your license key with the LicenseWala server. Nothing else is sent. |

The extension runs no remote code. Your allocation data never leaves
your browser except for the license check described above.

## Privacy

- Mappings, vendors, and areas are stored locally
  (`chrome.storage.local`).
- No data is sold, no advertisers, no third-party tracking.
- Only the license key and an anonymous device identifier are sent to
  the LicenseWala server, solely for license verification.
- Full text: see `STORE_LISTING.md` (Privacy policy draft).

## Project layout

| File | Purpose |
|---|---|
| `manifest.json` | MV3 manifest (permissions, content scripts, icons). |
| `content.js` / `content.css` | Runs on CDCMS Allocation + Cash Memo Print pages; auto-fills allocations, shows license warnings. |
| `options.js` / `options.html` | The dashboard: mappings, vendors, bulk import, backup export/import, license activation. |
| `popup.js` / `popup.html` | Toolbar popup with quick stats and a shortcut to the dashboard. |
| `background.js` | Service worker (opens the dashboard on request). |
| `mock_allocation.html` / `mock_print.html` | Local test pages for trying the helper without CDCMS access. |

No build step. Edit the files and reload the extension.

## Changelog

### v1.1.0

- License verification moved to LicenseWala — LicenseWala-issued keys
  now activate the extension; the old trial-key backdoor is closed.
- Import/export hardened: importing a backup resets stale search and
  filters, tolerates numeric codes, accepts both mapping formats, and
  reports how many areas, vendors, and mappings were imported.
- Store-ready icons (16 / 48 / 128 px) and a Chrome Web Store listing
  draft (`STORE_LISTING.md`).

### v1.0.0

- Initial release: area-vendor mapping, bulk Excel import, backup
  export/import, and license-gated auto-allocation on CDCMS pages.

## Support

- License keys and subscriptions: [LicenseWala portal](https://licensescript.netlify.app/)
- Email: support@licensewala.com
- Issues with mappings or import: export your backup JSON first, then
  describe the steps — the backup file makes any problem reproducible.

---

Built for LPG distributors running HP Gas CDCMS.
