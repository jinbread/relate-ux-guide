import { Inter } from "next/font/google";
import ContactListItem from "../components/contactListItem"

const inter = Inter({ subsets: ["latin"] });
const name = ["Olivia Smith", "Kristoffer Johnsson", "Oscar Karlsson", "Thuy Nguyen", "Trieuvy Luu", "Fanny Carlsson", "Anna Karin"
]


export default function Home() {
  return (
    <main className="flex items-center justify-center p-12">
      <div className="grid grid-cols-2 gap-3">
      {name.map((item, index)=> {
        return <ContactListItem name={item} key={index} />
      })}
      </div>
    </main>
  );
}
