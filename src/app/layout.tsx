import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ExamPrep Pro - Online Learning Platform',
  description: 'An advanced exam preparation and testing platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' />
        {/* Add Monaco Editor Web Worker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.MonacoEnvironment = {
                getWorkerUrl: function (moduleId, label) {
                  return '/monaco-editor/editor.worker.js';
                }
              };
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
