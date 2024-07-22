import React from 'react';


const SocialSharePopup = () => {
  const handleShare = (platform: string) => {
    alert(`Sharing on ${platform}`);
  };

  return (
    <div className='bg-stone-200 absolute h-fit flex flex-col shadow-md rounded-sm py-4 items-start gap-x-2'>
      <button className='hover:bg-stone-300 px-4 w-full' onClick={() => handleShare('Facebook')}>Share on Facebook</button>
      <button className='hover:bg-stone-300 px-4 w-full' onClick={() => handleShare('Twitter')}>Share on Twitter</button>
      <button className='hover:bg-stone-300 px-4 w-full' onClick={() => handleShare('LinkedIn')}>Share on LinkedIn</button>
    </div>
  );
};

export default SocialSharePopup;