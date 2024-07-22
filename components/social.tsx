"use client"
import dynamic from 'next/dynamic';
import React, {useState} from 'react';

const SocialSharePopup = dynamic(() => import('./social-share-popup'), { ssr: false });

const Social = () => {
  const [showSocial, setShowSocial] = useState(false);

  const handleClick = () => {
    setShowSocial(prevState => !prevState);
  };

  return (
    <div className='relative'>
      <button onClick={handleClick} className='bg-slate-300 hover:bg-slate-400 transition-all rounded-md w-fit h-fit p-1'>Share</button>
      {showSocial && <SocialSharePopup />}
    </div>
  );
};

export default Social;