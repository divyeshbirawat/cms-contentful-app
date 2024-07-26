import { render } from '@testing-library/react';
import SocialSharePopup from '@/components/social-share-popup';

describe('SocialSharePopup', () => {
  it('renders the social share popup with alert on click', () => {
    const { getByText } = render(<SocialSharePopup />);
    const facebookButton = getByText('Share on Facebook');
    const twitterButton = getByText('Share on Twitter');
    const linkedInButton = getByText('Share on LinkedIn');

    facebookButton.click();
    expect(window.alert).toHaveBeenCalledWith('Sharing on Facebook');

    twitterButton.click();
    expect(window.alert).toHaveBeenCalledWith('Sharing on Twitter');

    linkedInButton.click();
    expect(window.alert).toHaveBeenCalledWith('Sharing on LinkedIn');

  })


});