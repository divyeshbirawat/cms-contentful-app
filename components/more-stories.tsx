'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Avatar from "./avatar";
import chevronLeft from '../public/assets/chevronLeft.svg';
import chevronRight from '../public/assets/chevronRight.svg';
import CoverImage from "./cover-image";

function PostPreview({
  title,
  coverImage,
  excerpt,
  author,
  slug,
}: Readonly<{
  title: string;
  coverImage: any;
  excerpt: string;
  author: any;
  slug: string;
}>) {

  return (
    <div className="related-article-card border border-xl p-4 rounded-md shadow w-[350px] flex-shrink-0">
      <div className="mb-2">
        <CoverImage title={title} slug={slug} url={coverImage.url} className="rounded-md" />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-base leading-relaxed mb-4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}

export default function MoreStories({ morePosts }: Readonly<{ morePosts: any[] }>) {
  const [carousel, setCarousel] = useState<HTMLDivElement | null>(null);

  useEffect(() =>{
    const carousel = document.querySelector('.carousel-box');
    setCarousel(carousel as HTMLDivElement);

  },[]);


  const handleLeftClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (carousel) {
      carousel.scrollLeft -= 380;
    }
  };

  const handleRightClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (carousel) {
      carousel.scrollLeft += 380;
    }
  };

  return (
    <section className="">
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Related Articles
      </h2>
      <div className="carousel-container flex">
        <Image
          className={'leftArrow cursor-pointer'}
          unoptimized={true}
          onClick={handleLeftClick}
          src={chevronLeft}
          loader={chevronLeft}
          priority
          alt="nextjs"
          height={50}
          width={50} />
        <div className="carousel-box flex overflow-scroll gap-x-8 md:gap-x-8 py-8 mb-32 scroll-smooth">
          {morePosts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.blogTitle}
              coverImage={post.banner}
              author={post.authorCollection[0]}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
        <Image
          className={'rightArrow cursor-pointer'}
          unoptimized={true}
          onClick={handleRightClick}
          src={chevronRight}
          loader={chevronRight}
          priority
          alt="nextjs"
          height={50}
          width={50} />
      </div>
    </section>
  );
}
