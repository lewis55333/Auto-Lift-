AUTO LIFT WEBSITE — QUICK START
===============================

WHAT'S INCLUDED
- Responsive website homepage with a strong call-first layout
- Generated recovery-truck image in assets/recovery-truck.png
- Service sections, nationwide enquiry coverage, contact form, thank-you page
- Basic SEO metadata and LocalBusiness structured data
- Privacy information draft (must be completed before launch)
- Mobile menu and fixed mobile call bar

IMPORTANT BEFORE PUBLISHING
1. Open site-config.js and enter the real business phone number in BOTH phoneDisplay and phoneDial.
   Example:
     phoneDisplay: "01234 567890",
     phoneDial: "+441234567890",
   Keep phoneDial in international format and use the real business number only.
2. Add the correct domain to websiteUrl in site-config.js, e.g. "https://www.example.co.uk".
3. Complete privacy.html with accurate business and data-handling details. Do not publish the draft unchanged.
4. Check every service claim and only keep services Auto Lift actually provides.
5. Replace or remove any claims that are not true for the business. No fake reviews are included.
6. Test the form after deploying. Netlify form handling requires form detection to be enabled in the Netlify dashboard.

LOW-COST HOSTING: NETLIFY
1. Create an account at https://www.netlify.com/.
2. In Netlify, choose Add new site / project and deploy manually (the label may change).
3. Drag the whole auto-lift-website folder into the manual deploy drop area, or zip the folder contents and upload using the current Netlify deploy workflow.
4. Open the temporary *.netlify.app address and test the page on a phone and desktop.
5. In the site's Forms area, enable form detection and redeploy. Submit a test enquiry and confirm it appears in Netlify Forms.
6. In Domain management, add your existing domain and follow Netlify's exact DNS instructions. Do not delete existing DNS records for email. Enable/verify HTTPS.
7. Set up notification emails for form submissions and test them.

Netlify's current Free plan is listed at $0/month and includes custom domains with SSL, a global CDN, and form submissions, but usage-based credits and limits apply. Check current pricing before launch: https://www.netlify.com/pricing/
Form setup instructions: https://docs.netlify.com/manage/forms/setup/
Custom domain guide: https://docs.netlify.com/manage/domains/domains-fundamentals/understand-domains/

CALL GENERATION / GOOGLE
- Phone buttons become tel: links automatically once the real number is entered in site-config.js.
- Create or claim a Google Business Profile only if the business meets Google's eligibility rules. If you travel to customers and do not serve them at a public storefront, configure it as a service-area business and hide the home address if applicable.
- Do not set the service area to the whole UK just to rank nationwide. Google's service-area rules limit the areas you can enter; choose genuine areas you serve. Nationwide transport can still be described on the website.
- Ask real customers for honest reviews. Do not publish invented testimonials.
- Add only service-area pages that have genuinely useful, distinct content. Avoid mass-producing thin town pages.
- Add Google Search Console once the domain is live, submit the sitemap if one is added, and track phone clicks and form submissions.

NOT LIVE YET
The site is not published by this package. The phone number and domain are intentionally blank because they have not been supplied. The contact form will only collect submissions after a successful Netlify deployment with form detection enabled.
