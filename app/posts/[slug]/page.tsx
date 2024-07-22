import dynamic from "next/dynamic";
import { draftMode } from "next/headers";

import MoreStories from "@/components/more-stories";
import Avatar from "@/components/avatar";
import CoverImage from "@/components/cover-image";

import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";
import Social from "@/components/social";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  return (
    <div className="container mx-auto px-5">
      <article>
        <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
          {post.blogTitle}
        </h1>
        <div className="hidden md:mb-12 md:block">
        {post.authorCollection.items?.map((eachItem: { authorName: string, authorImage: { url: string } }) => 
          (<Avatar key={eachItem.authorName} name={eachItem.authorName} picture={eachItem.authorImage?.url} />)
        )}
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage title={post.title} url={post.banner.url} />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 block md:hidden">
          {post.authorCollection.items?.map((eachItem: { authorName: string, authorImage: { url: string } }) => 
            (<Avatar key={eachItem.authorName} name={eachItem.authorName} picture={eachItem.authorImage?.url} />)
          )}
          </div>
          <div className="mb-6 text-lg">
            <Social />
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="prose">
            <Markdown content={post.blogContent} />
          </div>
        </div>
      </article>
      <hr className="border-accent-2 mt-28 mb-24" />
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
