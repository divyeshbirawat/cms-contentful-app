import { draftMode } from "next/headers";
import HeroPost from "./heropost";
import MoreStories from "./more-stories";

import { getAllPosts } from "@/lib/api";


export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts;

  return (
    <div className="container mx-auto p-5">
      {heroPost && (
        <HeroPost
          title={heroPost.blogTitle}
          coverImage={heroPost.banner}
          author={heroPost.authorCollection.items}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
