import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: {
    default: 'Innovance Tech AI — Engineering Scalable Digital Systems',
    template: '%s | Innovance Tech AI',
  },
  description:
    'Innovance Tech AI — Engineering scalable digital systems. We build high-performance mobile and web architectures for startups and growing businesses with 14+ years of experience.',
  keywords: [
    'software development',
    'web applications',
    'mobile apps',
    'React',
    'Flutter',
    'Node.js',
    'scalable systems',
    'Innovance Tech AI',
  ],
  authors: [{ name: 'Innovance Tech AI' }],
  openGraph: {
    type: 'website',
    title: 'Innovance Tech AI — Engineering Scalable Digital Systems',
    description:
      'We build high-performance mobile and web architectures for startups and growing businesses. 14+ years of engineering excellence.',
    url: 'https://inovancetech.com/',
    siteName: 'Innovance Tech AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovance Tech AI — Engineering Scalable Digital Systems',
    description:
      'We build high-performance mobile and web architectures for startups and growing businesses. 14+ years of engineering excellence.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
