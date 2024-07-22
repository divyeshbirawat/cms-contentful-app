import { draftMode } from "next/headers";
import HeroPost from "../components/heropost";
import MoreStories from "../components/more-stories";

import { getAllPosts } from "@/lib/api";
import PostList from "@/components/postlist";


async function getDummyPosts() {
  const res = await fetch(`https://dummyapi.online/api/blogposts`, { next: { revalidate: 60 } })
  let data = await res.json()
  const d = new Date();
  data[0]['testTime'] = d.getTime();
  return data;
}


export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts;

  const dummyposts = await getDummyPosts();

  // const getMegaMenuViaAPI = async () => {
  //   const res = await fetch('https://cdn.contentful.com/spaces/gw7b0sf7m3xt/environments/master/content_types/megaMenu?access_token=B82H_lzkHxpN9jwool4q3IcOx3AwN1JttCnaG_FI9uE', { next: { revalidate: 60 } })
  //   let data = await res.json()
  //   console.log(data,'this is megamenu data via api');
  // }
  // getMegaMenuViaAPI();

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
      <PostList posts={dummyposts} />
    </div>
  );
}
