import { Inter } from "next/font/google";
import Link from 'next/link'


const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main className="flex items-center justify-center p-12 flex-col">
      <Link href="./contactListA">Contact List UX A</Link>
      <Link href="./contactListB">Contact List UX B</Link>
    </main>
  );
}
