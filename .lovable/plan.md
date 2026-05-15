## Goal

Authorize the Google Search Console connector for this project and verify ownership of `https://www.waveavi.com/` so the site can receive Search Console data and the sitemap can be submitted.

## Steps

1. **Link the connector** — call `standard_connectors--connect` with `connector_id: "google_search_console"`. You'll be prompted to sign in to Google and approve access. Use the Google account that should own the Search Console property.

2. **Request a META verification token** — once linked, call the Site Verification API through the Lovable connector gateway to get a `google-site-verification` meta tag value for `https://www.waveavi.com/`.

3. **Embed the meta tag** — add the returned tag to `index.html` inside `<head>`:
   ```html
   <meta name="google-site-verification" content="<TOKEN>" />
   ```

4. **Republish the site** — Google fetches the live URL when verifying, so the meta tag must be present in the deployed HTML at `https://www.waveavi.com/` before step 5. You'll need to click Publish.

5. **Trigger verification** — call the Site Verification `webResource` endpoint with the same identifier and `META` method. A 200 means Google confirmed ownership.

6. **Add the site to Search Console** — `PUT` `https://www.waveavi.com/` to the `webmasters/v3/sites/` endpoint so it appears in your Search Console property list.

7. **Submit the sitemap** — `PUT` `https://www.waveavi.com/sitemap.xml` to the `webmasters/v3/sites/{site}/sitemaps/` endpoint so Google starts crawling all routes.

8. **Mark the GSC SEO finding fixed** — once verification + sitemap submission succeed, update the `gsc:gsc` finding via `seo_chat--update_findings`.

## Notes

- Verification only works against the live published site, not the preview URL. If you'd rather verify the preview domain instead, say so and I'll target `sea-tech-ambition.lovable.app` instead of `www.waveavi.com`.
- The connector uses your Google account's OAuth — it's tied to whoever signs in during step 1. Make sure that Google account is the one you want owning the Search Console property.
- No code changes happen until step 3, and the only file touched is `index.html` (one meta tag).
