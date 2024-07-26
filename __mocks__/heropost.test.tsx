import { render, screen } from '@testing-library/react';
import HeroPost from '@/components/heropost';

describe('HeroPost', () => {
  const mockPost = {
    title: 'Mr Somebody',
    coverImage: { url: 'https://images.ctfassets.net/gw7b0sf7m3xt/78RtpeqIWdQj3sONSwsarJ/920da85bf537b0667aa6d337f463b288/1cuZovm.jpeg' },
    excerpt: 'test excerpt',
    author: [
      {
        authorName: 'Mr Nobody',
        authorImage: { url: 'https://images.ctfassets.net/gw7b0sf7m3xt/78RtpeqIWdQj3sONSwsarJ/920da85bf537b0667aa6d337f463b288/1cuZovm.jpeg' },
      },
    ],
    slug: 'test-slug',
  };

  it('renders the post correctly', () => {
    render(<HeroPost {...mockPost} />);

    const titleElement = screen.getByText(mockPost.title);
    const excerptElement = screen.getByText(mockPost.excerpt);
    const readMoreLink = screen.getByRole('link', { name: /read more/i });

    expect(titleElement).toBeInTheDocument();
    expect(excerptElement).toBeInTheDocument();
    expect(readMoreLink).toHaveAttribute('href', `/posts/${mockPost.slug}`);
  });

  it('renders the author correctly', () => {
    render(<HeroPost {...mockPost} />);

    const authorNameElement = screen.getByText(mockPost.author[0].authorName);
    const authorImageElement = screen.getByAltText(mockPost.author[0].authorName);

    expect(authorNameElement).toBeInTheDocument();
    expect(authorImageElement).toHaveAttribute('src', `${mockPost.author[0].authorImage.url}?w=96&q=75`);
  });
});