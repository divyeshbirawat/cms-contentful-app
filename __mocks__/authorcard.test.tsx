import { render } from '@testing-library/react'
import { AuthorCard } from '@/components/author-card';

describe('AuthorCard', () => {
  it('renders the author name, title and picture correctly', () => {
    const author = {
      name: 'Mr Nobody',
      imageUrl: 'https://images.ctfassets.net/gw7b0sf7m3xt/78RtpeqIWdQj3sONSwsarJ/920da85bf537b0667aa6d337f463b288/1cuZovm.jpeg',
      title: 'Example Title',
    }

    const { getByAltText, getByText } = render(
      <AuthorCard author={author} />
    );

    const authorImage = getByAltText(author.name);
    const authorName = getByText(author.name);
    const authorTitle = getByText(author.title);

    expect(authorImage).toBeInTheDocument();
    expect(authorImage).toHaveAttribute('src', `${author.imageUrl}?w=640&q=75`);
    expect(authorName).toBeInTheDocument();
    expect(authorTitle).toBeInTheDocument();
  });
});