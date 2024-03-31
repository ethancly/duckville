import Image from "next/image";
import Link from 'next/link';

import DUCK from "./duck-sm.png"


export default function Navbar() {
    return (
      <nav className="w-full">
        <div className="container mx-auto flex items-center justify-between px-2">
          {/* Logo */}
        <Image className="w-10" src={DUCK}/>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link href="/" className="hover:cursor-pointer">Home</Link>
            <Link href="/pond">Pond</Link>
            <Link href="/register">Register</Link>
            <Link href="/agenda">Agenda</Link>
          </div>
        </div>
      </nav>
    );
}
