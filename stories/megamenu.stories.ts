import { Meta, StoryObj } from '@storybook/react';

import MegaMenu from '../components/megamenu';

export default {
  title: 'MegaMenu',
  component: MegaMenu,
} as Meta;

const mockMegaMenuList = [
  {
    megaMenuItemCollection: {
      items: [
        { id: 1, __typename: 'Blog', slug: 'first-blog', blogTitle: 'The First Blog' },
        { id: 2, __typename: 'Author', slug: 'john-doe', authorName: 'John Doe' },
      ]
    }
  }
];

type Story = StoryObj<typeof MegaMenu>;

export const Primary: Story = {
  args: {
    megaMenuList: mockMegaMenuList
  },
};


