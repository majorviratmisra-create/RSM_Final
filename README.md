# RSM (राष्ट्रमा) - Nation Building Platform

A modern, responsive website for RSM (राष्ट्रमा) - a nation-building social service platform inspired by Netaji Subhas Chandra Bose.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Playfair Display (headings) + Source Sans 3 (body)

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher (use `nvm use` to automatically select the correct version)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, CSS variables, animations
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── Header.tsx       # Navigation with language toggle
│   ├── Hero.tsx         # Hero section with CTA
│   ├── About.tsx        # About RSM section
│   ├── Vision.tsx       # Vision section
│   ├── Mission.tsx      # Mission pillars cards
│   ├── Values.tsx       # What We Stand For section
│   ├── WhyWeExist.tsx   # Purpose section
│   ├── PresidentMessage.tsx  # President's message
│   ├── Team.tsx         # Team section placeholder
│   ├── GetInvolved.tsx  # Contact form
│   ├── Footer.tsx       # Footer with links
│   └── index.ts         # Component exports
```

## Sections

1. **Header** - Sticky navigation with logo, menu items, language toggle (EN/हिंदी), and CTA button
2. **Hero** - Full-height banner with main messaging and call-to-action
3. **About** - Introduction to RSM and its mission
4. **Vision** - Blueprint for national resurrection
5. **Mission** - 5 pillars of action (card-based layout)
6. **Values** - Core values with highlighted "Action Over Words"
7. **Why We Exist** - Purpose and call to action
8. **President's Message** - Quote from the founder
9. **Team** - Placeholder for team information
10. **Get Involved** - Contact form for volunteers
11. **Footer** - Links and social media

## Deployment to Vercel

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Customization

### Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: #E85D04;        /* Saffron/Orange */
  --secondary: #1A2332;      /* Navy Dark */
  --background: #FFFBF7;     /* Off-white */
}
```

### Content

All content is currently hardcoded in the components. To update:

1. Edit text directly in component files
2. Replace `[CLIENT NAME]` in `PresidentMessage.tsx` with actual name
3. Add actual social media links in `Footer.tsx`

## License

All Rights Reserved © RSM (राष्ट्रमा)
