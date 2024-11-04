import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Footer from '@/components/layout/Footer';
import LoginHeaderButton from '@/components/auth/LoginHeaderButton';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-white shadow-sm z-10'>
        <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
          <div>{/* You can add a logo or site title here if needed */}</div>
          <LoginHeaderButton />
        </div>
      </header>
      <main className='flex-grow'>
        <section className='container mx-auto px-4 py-16'>
          <h1 className='text-4xl font-bold mb-6'>Welcome to My App</h1>
          <p className='text-xl mb-8'>
            This is a sample landing page for our Next.js application.
          </p>
          <div className='aspect-w-16 aspect-h-9 mb-8'>
            <iframe
              src='https://www.youtube.com/embed/dQw4w9WgXcQ'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='w-full h-full'
            ></iframe>
          </div>
          <Button asChild>
            <Link href='/dashboard'>Get Started</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
