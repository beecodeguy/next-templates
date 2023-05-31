import CatCard from '@components/templates/cards/CatCard/CatCard';
import { mockCatCardProps } from '@components/templates/cards/CatCard/catCard.mocks';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CatCard> = {
  title: 'Apps/Components/Cards/CatCard',
  component: CatCard,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof CatCard>;

export const Cat: Story = {
  args: {
    ...mockCatCardProps.base,
  },
};
