import Link from "next/link";
import CoverImage from "./cover-image";
import Avatar from "./avatar";

function HeroPost({
  title,
  coverImage,
  // date,
  excerpt,
  author,
  slug,
}: Readonly<{
  title: string;
  coverImage: any;
  // date: string;
  excerpt: string;
  author: any;
  slug: string;
}>) {
  return (
    <section className="flex gap-x-6">
      <div className="mb-8 md:mb-16 w-3/6">
        <CoverImage title={title} slug={slug} url={coverImage.url} className="rounded-md" />
      </div>
      <div className="w-3/6 flex flex-col md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28 justify-center">
        <div className="author-container mb-2">
          {author?.map(
            (eachItem: {
              authorName: string;
              authorImage: { url: string };
            }) => (
              <Avatar
                key={eachItem.authorName}
                name={eachItem.authorName}
                picture={eachItem.authorImage?.url}
              />
            )
          )}
        </div>
        <div>
          <h3 className="mb-4 text-2xl lg:text-4xl leading-tight">{title}</h3>
        </div>
        <div>
          <p className="text-base mb-1 line-clamp-3 text-ellipsis">{excerpt}</p>
          <Link
            className="text-base text-cyan-600 font-bold tracking-tighter hover:underline"
            href={`/posts/${slug}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroPost;
