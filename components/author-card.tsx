import ContentfulImage from "../lib/contentful-image"
import Link from "next/link"

interface AuthorCardProps {
  className?: string;
  author?: {
    name: string;
    imageUrl: string;
    title: string;
  }
}



export const AuthorCard = ({className, author}: AuthorCardProps) => {
  return (
    <div className={`${className} relative`}>
      <div className="author-image-container w-[200px] aspect-square relative">
        <ContentfulImage alt={author?.name ?? ""} src={author?.imageUrl?? ""} fill className={"object-cover rounded-md"} />
      </div>
      <Link href="/author" aria-label={`${author?.name ?? ""}`} className="block w-fit mt-2 font-bold text-[#0075be]">
        {author?.name ?? ""}
      </Link>
      <p className="text-sm">{author?.title ?? ""}</p>
    </div>
  )
}
