import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
import { ClerkProvider } from '@clerk/nextjs';


export const metadata: Metadata = {
  title: 'ExpenseTracker AI - Smart Financial Management',
  description:
    'AI-powered expense tracking app with intelligent insights, smart categorization, and personalized financial recommendations',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body 
      >
          <ClerkProvider>
            <Navbar />
            {children}
            <Footer />
          </ClerkProvider>
        
      </body>
    </html>
  );
}