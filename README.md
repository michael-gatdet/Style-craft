# Style Craft

A responsive, static website for a tailoring studio. It presents the studio's services, outfit gallery and an enquiry form.

## Pages

- `index.html` — the site entry point, introduction, featured image, service highlights and calls to action.
- `About Us.html` — the studio's purpose and approach to workmanship.
- `Services.html` — custom clothing, alterations, repairs and fashion design.
- `Gallery.html` — six featured outfits with prices available on request.
- `Contact Us.html` — enquiry form with name, email or phone, service and message fields.

## Project files

- `styles.css` — shared layout, typography, colours and responsive styles.
- `script.js` — mobile navigation, current footer year, service preselection from enquiry links, and client-side enquiry copying.
- `Images/` — local photos used throughout the site and `Image10.png`, used as the browser favicon.

## View the website

Open `index.html` in a web browser or publish the project folder with a static hosting provider. The other pages are linked from the navigation and footer. No build step or package installation is required. Google Fonts are loaded from Google Fonts when an internet connection is available; fallback fonts are specified in the stylesheet.

## Enquiry form

The form validates required fields and requires either an email address or a phone number. Submitting copies the enquiry text to the visitor's clipboard so it can be pasted into a message. The form does not send or store submissions; connect it to a confirmed contact method or form service before relying on it to receive enquiries.

Business contact details, opening hours and location are not listed because they have not been confirmed. Gallery item prices are available on request.