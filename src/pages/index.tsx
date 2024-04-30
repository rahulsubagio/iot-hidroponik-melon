// import Image from "next/image";
import moduleName from 'next/head';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1 className="text-3xl">Hello World!</h1>
    </main>
  );
}
