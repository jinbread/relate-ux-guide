import { Inter } from "next/font/google";
import Link from 'next/link'


const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main className="flex items-center justify-center p-12">
      <Link href="./contactList">Contact List UX</Link>
    </main>
  );
}
