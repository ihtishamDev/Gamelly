import Dashboard from "./(pages)/Dashboard/page"; 
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gamelly</title> 
        <link rel="icon" href="/pngwing.png" />
      </Head>

      <Dashboard />
    </div>
  );
}
