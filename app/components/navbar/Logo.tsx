'use client';

import { useRouter } from "next/navigation";
import { MdTravelExplore } from 'react-icons/md';

const Logo = () => {
  const router = useRouter();

return (
  <p 
    className="
      text-black font-bold 
      text-2xl lg:text-3xl flex
    "
  >
    <MdTravelExplore 
      className="
        mr-1 hidden md:block
        md:translate-y-1 lg:translate-y-0
      "
    />
    Travel
    <span className="text-rose-500">Hub</span>
  </p>
)
}

export default Logo;