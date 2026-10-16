# Tommy Godfrey — All Heart. Every Game.

The official family-managed athlete profile for Tommy Godfrey. The site celebrates Tommy's multi-sport achievements, personality, and story while keeping privacy, dignity, and accessibility at the center.

## Local development

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

Run the complete production verification with:

```bash
npm test
```

## Deploying to Render

This repository includes a Render Blueprint at `render.yaml`.

1. In Render, choose **New → Blueprint**.
2. Connect this GitHub repository.
3. Confirm the `tommy-godfrey` web service.
4. Apply the Blueprint.

Render will install dependencies, create the production build, start the Node web service, and redeploy automatically whenever the connected branch receives a commit.

## Project structure

- `app/` — homepage, layout, metadata, and visual system
- `public/media/` — optimized website photography and campaign assets
- `tests/` — server-rendering and accessibility-oriented checks
- `render.yaml` — Render infrastructure Blueprint
- `worker/` and `vite.config.ts` — vinext production runtime
