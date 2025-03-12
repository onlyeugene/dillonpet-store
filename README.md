# Dillon Pet Kennel & Store

A modern Next.js web application for a pet store featuring dog products, services, and an interactive user interface.

## 🌟 Features

- Responsive design with mobile-first approach
- Interactive UI animations using AOS and Framer Motion
- Product showcase with hover effects
- Services presentation with animated arrows
- Testimonial carousel using Swiper
- Special offers section with animations
- Custom navigation with smooth transitions

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [AOS](https://michalsnik.github.io/aos/) - Scroll animations
- [Swiper](https://swiperjs.com/) - Touch slider
- [Lucide React](https://lucide.dev/) - Icons
- [Zustand](https://zustand-demo.pmnd.rs/) - State management

## 📁 Project Structure

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/dog_website.git
```

2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

og_website/
├── app/
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout component
│ └── page.tsx # Home page component
│
├── components/
│ ├── navigation/ # Navigation components
│ │ ├── navigation-link.tsx
│ │ ├── transition-link.tsx
│ │ └── user-menu.tsx
│ │
│ ├── ui/ # Reusable UI components
│ │ ├── button.tsx
│ │ └── input.tsx
│ │
│ ├── animation.ts # Animation configurations
│ ├── container.tsx # Container layout component
│ ├── footer.tsx # Footer component
│ ├── hero-details.tsx # Hero section details
│ ├── hero-first.tsx # Primary hero section
│ ├── hero-products.tsx # Products showcase section
│ ├── hero-services.tsx # Services showcase section
│ ├── services.tsx # Services component
│ ├── special-offers.tsx # Special offers section
│ └── testimonials.tsx # Testimonials carousel
│
├── lib/
│ └── db.ts # Database utilities and mock data
│
├── public/
│ ├── fonts/ # Custom font files
│ ├── landing/ # Landing page assets
│ └── profiles/ # Profile images
│
├── .env.local # Environment variables
├── package.json # Project dependencies and scripts
├── README.md # Project documentation
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔧 Environment Variables

Create a `.env.local` file in the root directory and add any required environment variables:

```env
NEXT_PUBLIC_API_KEY=your_api_key
```

## 📝 Scripts
- `dev` - Start development server
- `build` - Build production application
- `start` - Start production server
- `lint` - Run ESLint

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work - [YourGithub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting solutions
- All contributors who have helped with the project

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
