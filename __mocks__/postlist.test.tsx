import { render, screen } from '@testing-library/react';
import PostList from '@/components/postlist';

describe('PostList', () => {
  const mockPostList = [{
    id: 1,
    title: 'Post 1',
    content: 'Content 1'
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Content 3'
  }
];

it('renders the post list correctly', () => {
  render(<PostList posts={mockPostList} />);

  for (const post of mockPostList) {
    const titleElement = screen.getByText(post.title);
    const contentElement = screen.getByText(post.content);

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  }

})});