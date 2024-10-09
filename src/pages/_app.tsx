import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import localFont from "next/font/local";

const getLoraFont = localFont({
  src: "./fonts/Lora-Medium.woff",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={getLoraFont.className}>
      <Component {...pageProps} />
    </main>
  );
}