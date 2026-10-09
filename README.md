# ST Sri Thendral — A to Z Team

Static Next.js website for the Pollachi event-management team. No backend, database, account system or server-side enquiries.

## Run locally

```bash
npm ci
npm run dev -- --port 3107
```

Open http://127.0.0.1:3107.

## Production

```bash
npm run build
```

Deploy the generated `out/` folder to any static host. The source uses Next.js App Router and TypeScript with `output: 'export'`.

## Edit content

- `app/page.tsx`: services, business details, telephone links and WhatsApp messages.
- `app/globals.css`: wine/ivory/gold palette, responsive styles and typography.
- `app/layout.tsx`: page title and description.
- `public/wedding-mandapam.png`: AI-generated design inspiration; replace with a genuine event photograph when available. It is not a photograph of work completed by the business.

Fonts: Cormorant Garamond, DM Sans and Noto Sans Tamil, loaded from Google Fonts with system fallbacks. Icons: lucide-react.

The occasion selector updates a WhatsApp enquiry draft. Visitors must send the message themselves; the website does not submit or store it. Call buttons use telephone links. No invented testimonials, prices or event counts are included.
