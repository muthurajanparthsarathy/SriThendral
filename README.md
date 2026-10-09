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

- `lib/site.ts`: services (text, icon and photo), years of experience, occasions, process steps, FAQs, contact numbers and the WhatsApp link helper.
- `components/site/*`: one file per page section (header, hero, about, services, celebrations, process, FAQ, contact, floating chat).
- `app/page.tsx`: puts the sections together; holds the selected occasion used by the WhatsApp enquiry buttons.
- `app/globals.css`: wine/ivory/gold palette, responsive styles and typography.
- `app/layout.tsx`: page title, description and font links.
- `public/wedding-mandapam.png`: AI-generated design inspiration; replace with a genuine event photograph when available. It is not a photograph of work completed by the business.

## Animation and UI components

Animations use [Motion](https://motion.dev) (`motion/react`). Interactive pieces are adapted from [Aceternity UI](https://ui.aceternity.com) and live in `components/ui/`, styled with Tailwind CSS v4 utilities:

| Component | Used for |
| --- | --- |
| Text Generate Effect | Hero headline and contact heading appear word by word |
| Flip Words | “Planning your *wedding / reception / …* in Pollachi?” |
| Dot Background, Hero Highlight | Hero texture; marker sweep under “5 years” |
| Infinite Moving Cards | Occasions marquee below the hero |
| 3D Card Effect | Service cards tilt and lift towards the pointer |
| Moving Border | Glowing border on the WhatsApp occasion button |
| Spotlight, Sparkles | Light beam and gold sparkles in the contact section |
| Card Spotlight | Pointer glow on the contact cards |

Also included: scroll-progress bar, a header that shrinks and hides while scrolling down, scroll reveals, count-up numbers, a scroll-drawn process timeline and an animated FAQ accordion. Visitors who set “reduce motion” on their device get a calm version: movement is switched off and content simply fades in.

Tailwind is loaded without its CSS reset (preflight) so the hand-written site styles in `globals.css` are unaffected; those styles sit in a `site` cascade layer below Tailwind's utilities.

## Service photos

The service-card photos are free-to-use [Unsplash](https://unsplash.com/license) images loaded from Unsplash's image CDN. They are illustrative and are not photographs of work completed by the business. Replace them with genuine event photographs when available by changing the `photo` ID in `lib/site.ts` (or switching `photoSet` to local files in `public/`).

- Catering: [Saktheeswaran Govindarajan](https://unsplash.com/photos/traditional-south-indian-meal-on-leaf-yCIcDyKm440)
- Stage design: [zain raza](https://unsplash.com/photos/red-and-white-floral-sofa-set-0Oo13ZSmm8o)
- Photography: [Dibakar Roy](https://unsplash.com/photos/a-man-and-woman-standing-next-to-each-other-holding-a-magnifying-glass-NeuZD6We2RE)
- Stalls: [Zoshua Colah](https://unsplash.com/photos/street-food-ingredients-in-metal-bowls-5Pb1geHI0uk)
- DJ & sound: [Yan Berthemy](https://unsplash.com/photos/black-and-white-dj-mixer-63CxrwDVeWE)
- Iyer services: [Rajesh Mishra](https://unsplash.com/photos/fire-in-brown-woven-basket-MeOiwmZwG_k)
- Pandal: [anik das](https://unsplash.com/photos/crystal-chandelier-under-colorful-fabric-ceiling-hRcJt9QnbdI)
- Mangala Vadyam: [Swastik Arora](https://unsplash.com/photos/a-drum-sitting-on-top-of-a-wooden-table-9eS1Qb7JqaY)

Fonts: Cormorant Garamond, DM Sans and Noto Sans Tamil, loaded from Google Fonts with system fallbacks. Icons: lucide-react.

The occasion selector updates a WhatsApp enquiry draft, and each service card has its own WhatsApp enquiry link. Visitors must send the message themselves; the website does not submit or store it. Call buttons use telephone links. The “5 years of experience” figure is set once in `lib/site.ts` (`YEARS_OF_EXPERIENCE`). No invented testimonials, prices or event counts are included.
