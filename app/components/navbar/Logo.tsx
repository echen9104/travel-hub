'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

  return (
    <p 
        className="text-black font-bold 
            text-2xl lg:text-3xl
        "
    >
        Travel
        <span className="text-rose-500">Hub</span>
    </p>
  )
}

export default Logo;