# IMPORTANT: About-only mode is ON for production — restore the full site when ready

Added September 27, 2026 to keep unfinished portfolio pages out of public navigation
while the website is being repaired locally.

## What visitors see

Production builds show only the About page. The homepage, old project links,
login/admin routes, and unknown URLs redirect to `/about`. The login navigation
link is hidden, and the global Instagram embed script is not loaded.

The other pages are preserved in the source code. This is a temporary frontend
routing change, not a backend access restriction or a way to make static files private.

## GitHub and Render deployment

If Render auto-deploys the branch you push to, committing and pushing these changes
triggers its configured deployment. With the usual `npm run build` production
build, About-only mode is enabled by default unless Render has
`REACT_APP_ABOUT_ONLY=false` set.

Visitors see the old website until deployment succeeds. Include the new
`frontend/src/siteMode.js`, the routing and navbar changes, and the About page's
styles and assets in the commit. This README does not itself deploy the website.

## Local development

From `frontend`, run the normal development server to work on the full website:

```bash
npm start
```

To preview the public About-only experience, stop the server with Ctrl+C and run:

```bash
REACT_APP_ABOUT_ONLY=true npm start
```

Stop that server and run `npm start` again to return to the full local site,
assuming no environment file or shell setting overrides the mode.

## IMPORTANT: How to restore the full public website

1. Finish and verify the portfolio locally.
2. Set `REACT_APP_ABOUT_ONLY=false` in the Render frontend service's environment.
3. Trigger a new production build and deployment. This variable is read at build
   time; changing it without rebuilding does not update the published site.
4. Check the homepage and direct project URLs after deployment succeeds.

To re-enable About-only mode, set `REACT_APP_ABOUT_ONLY=true` and rebuild/deploy.
Removing the override also returns production to the current About-only default.

## Where the behavior is implemented

- [Mode switch](frontend/src/siteMode.js): production default and environment override.
- [Routes](frontend/src/index.js): About-only routes and redirect; preserved full routes.
- [Navigation](frontend/src/components/Navbar.js): hidden login and About styling.

When this temporary feature is retired, update this document and the warning at
the top of the main README so they reflect the actual production behavior.
