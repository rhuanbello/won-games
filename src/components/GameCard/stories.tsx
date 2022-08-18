import { Story, Meta } from '@storybook/react';
import GameCard, { GameCardsProps } from '.';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Red Dead Redemption 2',
    developer: 'Rockstar Games',
    img: 'img/red-dead-img.jpg',
    price: 'R$ 250,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const Default: Story<GameCardsProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const WithRibbon: Story<GameCardsProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
};
