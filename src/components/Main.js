import { Inter } from "next/font/google";

import Navbar from "./Navbar.js";

const inter = Inter({ subsets: ["latin"] });

export default function Main({children}) {
  return (
    <main className={`flex min-h-screen flex-col items-center ${inter.className}`} >
        <Navbar/>
        <div className="flex flex-col flex-grow w-full">
            {children}
        </div>
    </main>
  );
}