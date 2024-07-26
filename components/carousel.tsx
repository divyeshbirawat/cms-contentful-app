'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import useWindowResize from '../lib/customHooks/useWindowResize';

const Carousel = () => {
  const [carouselwrapper, setCarouselWrapper] = useState<HTMLElement | null>(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [carouselItems, setCarouselItems] = useState<NodeListOf<HTMLDivElement> | null>(null);
  const windowSize = useWindowResize();

  const handleLeftClick = () => {
    if (carouselItems?.length) {
      let nextCard = currentCard - 1;
      if (nextCard < 0) {
        nextCard = carouselItems.length - 1;
      }
      setCurrentCard(nextCard);
    }
  };

  const handleRightClick = () => {
    if (carouselItems?.length) {
      let nextCard = currentCard + 1;
      if (nextCard >= carouselItems.length) {
        nextCard = 0;
      }
      setCurrentCard(nextCard);
    }
  };


  useEffect(() => {
    const carouselNode = document.querySelector('.carousel-wrapper') as HTMLElement;
    const leftChevron = carouselNode?.querySelector('.leftChevron');
    const rightChevron = carouselNode?.querySelector('.rightChevron');
    
    if (carouselNode) {
      setCarouselWrapper(carouselNode);
      setCarouselItems(carouselNode.querySelectorAll('.carousel > div'));
      leftChevron?.addEventListener('click', handleLeftClick);
      rightChevron?.addEventListener('click', handleRightClick);
      
    }
    return () => {
      leftChevron?.removeEventListener('click', handleLeftClick);
      rightChevron?.removeEventListener('click', handleRightClick);
    }
  }, []);



  if (windowSize.width < 767 && carouselwrapper) {
  
    const leftChevron = (carouselwrapper as HTMLElement)?.querySelector('.leftChevron');
    const rightChevron = (carouselwrapper as HTMLElement)?.querySelector('.rightChevron');
    
    if (carouselwrapper) {
      leftChevron?.addEventListener('click', handleLeftClick);
      rightChevron?.addEventListener('click', handleRightClick);
    }
  } else {
    if (carouselwrapper && carouselItems && carouselItems?.length > 3) {
      const leftChevron = (carouselwrapper as HTMLElement)?.querySelector('.leftChevron');
      const rightChevron = (carouselwrapper as HTMLElement)?.querySelector('.rightChevron');
      leftChevron?.classList.remove('hidden');
      rightChevron?.classList.remove('hidden');
    }
  }


  return (
    <div className='carousel-wrapper w-[1179px] flex mx-auto'>
      <button className="leftChevron max-[767px]:block hidden">{"<"}</button>
      <div className='carousel w-full flex justify-center gap-x-8 overflow-x-scroll'>


        <div className='carousel-item  shrink-0 w-[380px] h-[380px]'>
          <img src='https://via.placeholder.com/300' alt='carousel item' />
        </div>
        <div className='carousel-item  shrink-0  w-[380px] h-[380px]'>
          <img src='https://via.placeholder.com/300' alt='carousel item' />
        </div>
        <div className='carousel-item   shrink-0 w-[380px] h-[380px]'>
          <img src='https://via.placeholder.com/300' alt='carousel item' />
        </div>
        <div className='carousel-item  shrink-0  w-[380px] h-[380px]'>
          <img src='https://via.placeholder.com/300' alt='carousel item' />
        </div>
        <div className='carousel-item  shrink-0  w-[380px] h-[380px]'>
          <img src='https://via.placeholder.com/300' alt='carousel item' />
        </div>

      </div>
      <button className="rightChevron max-[767px]:block hidden">{">"}</button>
    </div>
  )
}

export default Carousel
