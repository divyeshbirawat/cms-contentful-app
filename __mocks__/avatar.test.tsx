import { render } from '@testing-library/react'
import Avatar from '@/components/avatar';

describe('Avatar', () => {
  it('renders the name and picture correctly', () => {
    const name = 'Mr Nobody';
    const picture = 'https://images.ctfassets.net/gw7b0sf7m3xt/78RtpeqIWdQj3sONSwsarJ/920da85bf537b0667aa6d337f463b288/1cuZovm.jpeg';

    const { getByAltText, getByText } = render(
      <Avatar name={name} picture={picture} />
    );

    const avatarImage = getByAltText(name);
    const avatarName = getByText(name);

    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', `${picture}?w=96&q=75`);
    expect(avatarName).toBeInTheDocument();
  });
});