'use client'
import dynamic from 'next/dynamic';
import ContentfulImage from '@/lib/contentful-image';
import { Markdown } from "@/lib/markdown";
import { getAuthorBySlug } from '@/lib/api';

const AuthorPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {

  const authorData = await getAuthorBySlug(slug);

  return (
    <div>
      {authorData && (
      <div className='container mx-auto p-5'><div className='flex items-center justify-center'>
      <ContentfulImage src={authorData.authorImage.url} alt={authorData.authorName} width={64} height={64} className="rounded-full" style={{width: '64px', height: '64px'}} />
      <h1 className='ml-5 font-bold'>{authorData.authorName}</h1>
      </div>
      <div className="prose mx-auto p-5 w-full">
        <Markdown content={authorData.authorDescription} />
      </div>
      </div>
      )}
    </div>
  );
};

export default AuthorPage;