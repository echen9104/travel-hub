'use client';

import { PuffLoader } from "react-spinners";
import React from 'react';

const Loader = () => {
  return (
    <div className="h-[70-vh] flex flex-col items-center justify-center">
      <PuffLoader
        size={100}
        color="red"
      />
    </div>
  )
}

export default Loader