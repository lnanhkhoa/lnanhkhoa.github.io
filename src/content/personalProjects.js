// Side projects shown in "The lab". The card on the home page uses the summary
// fields; the detail page at /the-labs/:id also renders overview, highlights,
// stack, sections and screenshots. Screenshots live in public/the-labs/<id>/.
export const personalProjects = [
  {
    id: 'theta-movies',
    title: 'Theta Movies',
    description:
      'A Netflix-inspired streaming platform for discovering and watching movies and TV shows, with a cinematic dark theme and a fully responsive layout.',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'TailwindCSS v4',
      'Shadcn UI',
      'Radix UI',
      'Next Video',
      'Vercel'
    ],
    keyFeatures: [
      'Homepage hero banner with smooth, swipeable movie carousels',
      'Detail pages for movies and TV shows, plus a built-in video player',
      'Search and genre browsing to discover new titles',
      'Curated collections and a personal "My List" watchlist',
      'Google sign-in flow that gates personal features like the watchlist',
      'Statically generated pages for fast loading, deployed on Vercel'
    ],
    liveUrl: 'https://theta-cinema.vercel.app/',
    githubUrl: 'https://github.com/lnanhkhoa/movie-hub',
    status: 'Live',
    year: '2025',
    overview: [
      'Theta Movies is a cinematic front end for browsing a film and TV catalogue. It borrows the feel of Netflix — a near-black canvas, a signature red accent and gold ratings — and wraps it around fifteen pages: home, movie and TV details, a video player, search, genre browsing, collections, a personal watchlist, a profile and the usual help, about and legal pages.',
      'It is built on the Next.js 16 App Router with React 19 and Tailwind CSS v4’s CSS-first theme. Every page is pre-rendered at build time — 63 static pages in total — so navigation stays instant and the whole site deploys to Vercel as static output.'
    ],
    highlights: [
      {
        title: 'Swipeable carousels',
        body: 'Trending and popular rows scroll horizontally with arrow controls on desktop and touch or swipe gestures on mobile.'
      },
      {
        title: 'Rich detail pages',
        body: 'Each movie and TV show has a backdrop hero, poster, rating, genres, runtime, synopsis and a cast & crew tab, with a “Play now” button into the watch page.'
      },
      {
        title: 'Search and genre browsing',
        body: 'A live search across the catalogue and genre pages with quick filter chips for action, drama, sci-fi, thriller and more.'
      },
      {
        title: 'Collections and My List',
        body: 'Curated collections such as a Christopher Nolan set, plus a personal “My List” watchlist that is gated behind sign-in.'
      },
      {
        title: 'Auth-gated features',
        body: 'An optional Google sign-in modal backed by React Context. The flow is mocked for now and structured so real OAuth can drop in.'
      },
      {
        title: 'Mobile-first layout',
        body: 'Designed mobile-first with breakpoints at 320, 768 and 1024 px, accessible shadcn/ui components on Radix primitives, and Sonner toasts.'
      }
    ],
    stack: [
      { layer: 'Framework', items: ['Next.js 16 (App Router, Turbopack)', 'React 19', 'TypeScript'] },
      { layer: 'Styling', items: ['Tailwind CSS v4', 'shadcn/ui', 'Radix UI', 'Lucide icons'] },
      { layer: 'Media & UX', items: ['next-video', 'Sonner toasts', 'Poppins + Roboto'] },
      { layer: 'State', items: ['React Context (auth)'] },
      { layer: 'Hosting', items: ['Vercel (static generation, Analytics)'] }
    ],
    sections: [
      {
        title: 'Design system',
        body: 'The theme is defined once in globals.css with Tailwind v4’s @theme: a #141414 background, #E50914 accent red and #FFB800 for ratings, with Poppins headings over Roboto body text. Components come from shadcn/ui so dialogs, tabs, selects and menus stay accessible by default.'
      }
    ],
    screenshots: [
      { src: '/the-labs/theta-movies/movie-detail.jpg', caption: 'Movie detail page with backdrop hero, rating and genres' },
      { src: '/the-labs/theta-movies/black-hole.jpg', caption: 'Watch page — the built-in video player streaming Interstellar' },
      { src: '/the-labs/theta-movies/home-carousels.jpg', caption: 'Trending and popular carousels on the home page' },
      { src: '/the-labs/theta-movies/genre-browse.jpg', caption: 'Genre browsing with filter chips' },
      { src: '/the-labs/theta-movies/collections.jpg', caption: 'Curated collections' },
      { src: '/the-labs/theta-movies/search.jpg', caption: 'Search across the catalogue' },
      { src: '/the-labs/theta-movies/mobile-movie-detail.jpg', caption: 'Detail page on mobile', mobile: true }
    ]
  },
  {
    id: 'nobita-house-3d',
    title: "Nobita's House 3D",
    description:
      'An interactive 3D diorama of Nobita’s house and the Japanese suburb around it, with Doraemon and friends gathered at the front gate — explore the block, change the time of day, and meet each character.',
    technologies: [
      'React 19',
      'TypeScript',
      'Three.js',
      'React Three Fiber',
      'Drei',
      'Zustand',
      'Motion',
      'Vite',
      'Vitest',
      'Vercel'
    ],
    keyFeatures: [
      'Explorable neighbourhood with orbit, zoom, and pan, and a camera that stops at walls instead of passing through them',
      'Four times of day (dawn, morning, sunset, night) that change the sky, lighting, shadows, fog, and clouds',
      'Night scenes with lit windows and street lamps, stars, a moon, and fireflies',
      'Six rigged, animated characters — click one and the camera flies over to open their info card',
      'Character studio with a lit turntable to play every motion clip, with speed and loop controls',
      'Background music, auto-rotate, a live performance panel, and a mobile-friendly layout'
    ],
    liveUrl: 'https://nobita-house.vercel.app/',
    githubUrl: 'https://github.com/lnanhkhoa/nobita-house-3d',
    status: 'Live',
    year: '2026',
    overview: [
      'A 3D web diorama of Nobita’s house and the Japanese suburb around it, with Doraemon, Nobita, Shizuka, Gian, Suneo and Dekisugi gathered around the front gate. You can orbit the block, change the time of day, click a character to meet them, or open the character studio to play every motion they carry.',
      'The house stands on a crossroads with seven neighbour lots and, across the road, the vacant lot with its three concrete pipes. The scene is built with three.js through React Three Fiber and targets 60 FPS on desktop.'
    ],
    highlights: [
      {
        title: 'Explorable neighbourhood',
        body: 'Drag to orbit, scroll to zoom and pan around the block. The camera stops at walls instead of passing through houses.'
      },
      {
        title: 'Four times of day',
        body: 'Dawn, morning, sunset and night each change the sky, sun, shadows, fog and clouds. At night the windows and street lamps light up, with stars, a moon and fireflies.'
      },
      {
        title: 'Six animated characters',
        body: 'Each character is rigged and animated — some sit on the wall, some stand and talk. Click one, or use the roster, and the camera flies over and opens their info card.'
      },
      {
        title: 'Character studio',
        body: 'A dedicated page puts one character on a lit turntable to play any clip — idle, walk, run, wave, dance, laugh and more — with speed, loop and turntable controls.'
      },
      {
        title: 'Performance you can see',
        body: 'A live FPS, draw-call and triangle panel sits alongside auto-rotate, a reset-view button and toggleable background music.'
      },
      {
        title: 'Works on phones',
        body: 'A dedicated phone layout moves the controls into a settings sheet so the diorama stays usable on small screens.'
      }
    ],
    stack: [
      { layer: 'UI', items: ['React 19', 'TypeScript'] },
      { layer: '3D', items: ['three.js', '@react-three/fiber', '@react-three/drei', 'camera-controls'] },
      { layer: 'State & animation', items: ['zustand', 'motion'] },
      { layer: 'Build', items: ['Vite', 'bun'] },
      { layer: 'Quality', items: ['Biome (lint + format)', 'Vitest'] },
      { layer: 'Assets', items: ['Hyper3D Rodin', 'Mixamo', 'Blender', 'gltf-transform'] },
      { layer: 'Hosting', items: ['Vercel'] }
    ],
    sections: [
      {
        title: 'How the models were made',
        body: 'The characters started as reference images, went through image-to-3D on Hyper3D Rodin, were rigged and animated with Mixamo, and were cleaned up in Blender. The house, streets, neighbour lots and plants are built procedurally by Blender Python scripts. Everything is then compressed with gltf-transform (dedup, weld, texture resize, meshopt) so the optimised GLB models ship with the repo.'
      },
      {
        title: 'Disclaimer',
        body: 'A non-commercial fan project for personal and portfolio use. Doraemon and all related characters are © Fujiko Pro / Shogakukan / TV Asahi. This project is not affiliated with or endorsed by the rights holders.'
      }
    ],
    screenshots: [
      { src: '/the-labs/nobita-house-3d/diorama-morning.jpg', caption: 'The diorama on a sunny morning, with everyone at the gate' },
      { src: '/the-labs/nobita-house-3d/diorama-dawn.jpg', caption: 'Dawn' },
      { src: '/the-labs/nobita-house-3d/diorama-sunset.jpg', caption: 'Sunset' },
      { src: '/the-labs/nobita-house-3d/diorama-night.jpg', caption: 'Night, with lit windows, moon and fireflies' },
      { src: '/the-labs/nobita-house-3d/neighbourhood-aerial.jpg', caption: 'The whole block: crossroads, neighbour houses and the vacant lot' },
      { src: '/the-labs/nobita-house-3d/character-card.jpg', caption: 'Camera close on Doraemon with his info card open' },
      { src: '/the-labs/nobita-house-3d/character-studio.jpg', caption: 'Doraemon waving on the character studio turntable' }
    ]
  },
  {
    id: 'nha-xe-phat-dat',
    title: 'Nhà Xe Phát Đạt',
    description:
      'The booking website for a family-run limousine bus line on the TP. Hồ Chí Minh ⇄ La Gi route — schedule, fares, fleet showcase and a quick booking form with call-back confirmation.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Radix UI',
      'next-intl'
    ],
    keyFeatures: [
      'Fixed departure schedule with per-direction tabs — La Gi → HCMC and HCMC → La Gi — showing departure and arrival windows',
      'Quick booking form: name, phone, direction, date, departure time, seat count and optional pickup point',
      'Call-back confirmation flow — a dispatcher phones to confirm within 5 minutes',
      'Fleet showcase with a swipeable gallery of the limousine interior',
      'Route section explaining the two pickup models: fixed point in HCMC, door-to-door in La Gi',
      'Vietnamese-first content with a language switcher, FAQ accordion and 24/7 hotline CTAs'
    ],
    liveUrl: 'https://nhaxephatdat.com/',
    status: 'Live',
    year: '2025',
    overview: [
      'Nhà Xe Phát Đạt is the public face of a real limousine bus business running daily between TP. Hồ Chí Minh and La Gi (Bình Thuận). Passengers land on a single-page site that answers the three questions that matter — when does the bus leave, how much is it, how do I book — without needing an account or a payment gateway.',
      'The booking flow is deliberately low-friction: a form collects name, phone, direction, date, departure time, seats and an optional pickup address, then a dispatcher calls back to confirm. Pickup logic differs per direction — a fixed point at Vòng xoay Dân Chủ in HCMC versus door-to-door service around La Gi — and the site explains that clearly instead of hiding it in fine print.'
    ],
    highlights: [
      {
        title: 'Schedule-first design',
        body: 'The timetable sits right under the hero: tabbed per direction, fixed daily departure slots with arrival windows, and a “Đặt ngay” button on every row that jumps straight into the booking form.'
      },
      {
        title: 'Booking without friction',
        body: 'No accounts, no payment step. Passengers pick a date, time and seat count, leave a phone number, and the office confirms by call — matching how the business actually operates.'
      },
      {
        title: 'Direction-aware pickup',
        body: 'HCMC departures use a fixed pickup point with optional Grab support; La Gi departures collect a full address for door-to-door pickup. The form and route section both surface this.'
      },
      {
        title: 'Fleet showcase',
        body: 'A swipeable gallery shows the leather-seat limousine interior — the product’s main selling point for a 2.5–3 hour ride.'
      },
      {
        title: 'Trust signals',
        body: 'A “why choose us” section covers safety, punctuality and amenities (WiFi, AC, water, insurance), followed by an FAQ accordion answering cancellation, luggage and payment questions.'
      },
      {
        title: 'Localisation',
        body: 'Vietnamese-first content served under locale-prefixed routes, with a language switcher in the footer.'
      }
    ],
    stack: [
      { layer: 'Framework', items: ['Next.js (App Router, Turbopack)', 'React', 'TypeScript'] },
      { layer: 'UI', items: ['Tailwind CSS', 'Radix UI primitives', 'Lucide icons'] },
      { layer: 'Content', items: ['Vietnamese-first copy', 'Locale-prefixed routing', 'FAQ accordion'] },
      { layer: 'Contact', items: ['Hotline CTAs', 'Zalo deep links', 'Call-back booking form'] }
    ],
    sections: [
      {
        title: 'Why it exists',
        body: 'A small bus line lives on phone calls. The site doesn’t try to replace the dispatcher — it makes the phone ring less for the wrong reasons: the schedule and fares are always visible, the booking form captures everything the dispatcher needs in one shot, and the FAQ absorbs the repeat questions.'
      }
    ],
    screenshots: [
      { src: '/the-labs/nha-xe-phat-dat/hero.jpg', caption: 'Hero — limousine positioning with hotline and booking CTAs' },
      { src: '/the-labs/nha-xe-phat-dat/schedule.jpg', caption: 'Fixed daily departures, tabbed per direction, with per-row booking' },
      { src: '/the-labs/nha-xe-phat-dat/booking.jpg', caption: 'Quick booking form — direction, date, time, seats and pickup point' },
      { src: '/the-labs/nha-xe-phat-dat/fleet.jpg', caption: 'Fleet showcase — swipeable limousine interior gallery' },
      { src: '/the-labs/nha-xe-phat-dat/route.jpg', caption: 'Route section — fixed pickup in HCMC, door-to-door in La Gi' },
      { src: '/the-labs/nha-xe-phat-dat/why-us.jpg', caption: 'Why choose us — safety, punctuality and on-board amenities' }
    ]
  }
]

export const findPersonalProject = (id) => personalProjects.find((project) => project.id === id)
