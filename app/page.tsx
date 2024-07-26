import { draftMode } from "next/headers";
import HeroPost from "../components/heropost";
import MoreStories from "../components/more-stories";

import { getAllPosts } from "@/lib/api";
import PostList from "@/components/postlist";
import { Block } from "@/components/block";
import { AuthorCard } from "@/components/author-card";
import Carousel from "@/components/carousel";
import GridContainer from "@/components/grid-container";


async function getDummyPosts() {
  const res = await fetch(`https://dummyapi.online/api/blogposts`, { next: { revalidate: 60 } })
  let data = await res.json();
  data = data.splice(0,5);
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

  const authorData = [{
    name: 'author1',
    imageUrl: 'https://images.ctfassets.net/gw7b0sf7m3xt/6hayxhs9TtA3sncu1BoS93/4270cde8a35cd2d0172a4621f39d01b8/our-coaches-hero-banner_2.png',
    title:'CFA Author'
  },{
    name: 'author1',
    imageUrl: 'https://images.ctfassets.net/gw7b0sf7m3xt/6hayxhs9TtA3sncu1BoS93/4270cde8a35cd2d0172a4621f39d01b8/our-coaches-hero-banner_2.png',
    title:'CFA Author'
  },{
    name: 'author1',
    imageUrl: 'https://images.ctfassets.net/gw7b0sf7m3xt/6hayxhs9TtA3sncu1BoS93/4270cde8a35cd2d0172a4621f39d01b8/our-coaches-hero-banner_2.png',
    title:'CFA Author'
  }];

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
      <Block height={700} width={'100%'} color={'#000'} backgroundColor={'#e0e0e0'}>
        <div className="px-[118px] py-16 mx-auto flex flex-col items-center">
          <h1>Our Experts</h1>
          <div className="block">
            <GridContainer className="flex flex-row flex-wrap gap-8 justify-center my-16">
              {
              authorData && authorData.map(author =>
              <AuthorCard className="" author={author} />
              )
              }
            </GridContainer>
          </div>
          
        </div>
      </Block>
      <PostList posts={dummyposts} />

      <Carousel />
    </div>
  );
}
