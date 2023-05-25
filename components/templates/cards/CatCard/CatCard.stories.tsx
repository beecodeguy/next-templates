import { Meta, StoryObj } from '@storybook/react';
import CatCard from './CatCard';
import { mockCatCardProps } from './catCard.mocks';

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
