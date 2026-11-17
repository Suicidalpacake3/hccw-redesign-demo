# Harman Claytor Corrigan & Wellman: Website Concept

A redesign concept for [hccw.com](https://www.hccw.com). Content, logo, attorney photos and contact details come from the firm's current website. The layout, imagery and interactions are new.

This is a **demo build**. It's a fully static site (HTML, CSS and vanilla JavaScript), with no build step and no backend.

## Pages

| Page | File | Highlights |
| --- | --- | --- |
| Home | `index.html` | Animated hero, practice groups, attorney carousel, offices, Best Law Firms rankings, latest news |
| Our Firm | `firm.html` | Litigation expertise, name partners, jurisdictions, Harmonie Group |
| Practice Areas | `practice-areas.html` | 21 areas in 6 clear groups, instant search, group filters |
| Practice Area | `practice-area.html?area=…` | Full content from the current site, key contacts, related practices |
| Attorneys | `attorneys.html` | All 66 attorneys, filterable by name, office, position, practice area, bar admission and last initial (filters are shareable in the URL) |
| Attorney Profile | `attorney.html?a=…` | Full profiles for the first three attorneys; everyone else shows a demo notice |
| Locations | `locations.html` | Interactive office map, city photography, office rosters, directions |
| Firm News | `news.html` | First page of news; articles open in a popup |
| Careers | `careers.html` | Open positions and application subject lines |
| Contact | `contact.html` | Phone, fax, mailing address, offices and a demo contact form |

## Demo limitations

* Full attorney biographies are included for Benjamin P. Abel, Laura M. Berry and Victoria D. Pretlow Birton only.
* Only the first page of firm news is included. The other pages and the news practice area filter show a demo notice.
* The contact form validates its fields but does not send anything.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 5173
```

## Publish on GitHub Pages

1. Create a repository and push this folder to the `main` branch.
2. In the repository, go to **Settings > Pages** and choose **Deploy from a branch**, then select `main` and `/ (root)`.
3. The site will be live at `https://<your-username>.github.io/<repository-name>/`.

## Structure

```
assets/
  css/style.css            Design system and all page styles
  js/data-generated.js     Attorneys and practice areas (generated from hccw.com)
  js/data.js               Firm info, offices, profiles, news, careers
  js/cards.js              Shared attorney and news card templates
  js/site.js               Header, mega menu, footer, animations, modals, icons
  img/                     Logo, attorney photos, stock and location photography
```

## Image credits

* Stock photography: [Unsplash](https://unsplash.com) (Unsplash License).
* Richmond skyline: Bdl2001, Wikimedia Commons, CC BY 4.0.
* Roanoke at dusk from Mill Mountain: Joe Ravi, Wikimedia Commons, CC BY-SA 3.0.
* Roanoke Star: SchuminWeb, Wikimedia Commons, CC BY-SA 2.0.
* King Street, Old Town Alexandria: Ken Lund, Wikimedia Commons, CC BY-SA 2.0.
* 800 block of King Street, Alexandria: m01229, Wikimedia Commons, CC BY 2.0.
* Map tiles: Esri, HERE, Garmin and OpenStreetMap contributors.
* Logo, attorney portraits and all firm content: Harman Claytor Corrigan & Wellman, P.C.
