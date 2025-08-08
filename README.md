# Next.js 14 (Pages Router) project

- Framework: Next.js 14 (Pages Router)
- Styling: Tailwind CSS
- Routes:
  - `/` (home)
  - `/my-test-route/123` (local page; can be reverse-proxied to Next.js 15 project via `vercel.json` rewrite)

How to run locally:
1. Install deps: `npm install`
2. Start dev server: `npm run dev` (defaults to port 3000)

Reverse Proxy (Vercel):
- Edit `vercel.json` and replace `REPLACE_WITH_SECOND_PROJECT_URL` with your deployed Next.js 15 project URL, e.g. `https://your-next15-app.vercel.app`.
- When deployed to Vercel, visiting `/my-test-route/123` on this app will proxy to the second app.

## Toggle the proxy on/off

You have a local page at `/my-test-route/123` in this Next.js 14 project. The `vercel.json` rewrite will forward that path to the Next.js 15 project when enabled.

- To ENABLE proxy: keep the rewrite in `vercel.json` pointing to your deployed Next.js 15 URL.
- To DISABLE proxy: remove the rewrite entry from `vercel.json` (or rename the file to something like `vercel.json.off`) and redeploy. The local page at `/my-test-route/123` will render.

For local testing, you can simulate the proxy by pointing the `destination` to your local Next.js 15 dev server, for example:
\`\`\`
http://localhost:3001/my-test-route/123
\`\`\`
Note: The Pages Router uses the `pages` directory to define routes like `pages/my-test-route/123.js` per Next.js routing conventions.

Notes:
- This project uses the Pages Router conventions (pages directory) per Next.js docs [^2].
- Tailwind is configured with content globs for `pages/**` [^3].
