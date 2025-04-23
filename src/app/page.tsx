import Dashboard from "./(pages)/Dashboard/page"; // Assuming filename is page.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gamelly</title> {/* Optional: Sets the tab title */}
        <link rel="icon" href="/pngwing.png" /> {/* This sets the icon */}
      </Head>

      <Dashboard />
    </div>
  );
}
