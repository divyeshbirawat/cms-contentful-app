import type { StoryObj } from '@storybook/react';
import { AuthorCard } from '@/components/author-card';

export default {
  title: 'Author Card',
  component: AuthorCard,
}

type Story = StoryObj<typeof AuthorCard>;

export const Default: Story = {};

Default.args = {
  author: {
    name: 'Mr Nobody',
    slug: 'example-slug-1',
    title: 'Example Title',
    imageUrl: 'https://images.ctfassets.net/gw7b0sf7m3xt/6hayxhs9TtA3sncu1BoS93/4270cde8a35cd2d0172a4621f39d01b8/our-coaches-hero-banner_2.png',
  }
};

