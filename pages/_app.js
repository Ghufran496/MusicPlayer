import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
//import 'spotify-audio-element';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
