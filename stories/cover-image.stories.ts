import type { StoryObj } from '@storybook/react';
import CoverImage from '@/components/cover-image';

export default {
  title: 'Cover Image',
  component: CoverImage,
  argTypes: {
      title: { control: 'text' }, 
      slug: { control: 'text' },
      url: { control: 'text' },
  }
}

type Story = StoryObj<typeof CoverImage>;

export const Default: Story = {};

Default.args = {
  title: 'Example Title',
  slug: 'example-slug-1',
  url: 'https://random.imagecdn.app/500/150',
};

