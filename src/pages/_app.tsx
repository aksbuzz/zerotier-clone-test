import '@/styles/globals.css';
import { karla } from '@/util/font';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${karla.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
