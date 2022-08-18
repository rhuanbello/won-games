import { Story, Meta } from '@storybook/react';
import Hightlight, { HighlightProps } from '.';

export default {
  title: 'Hightlight',
  component: Hightlight,
  args: {
    title: 'Red Dead is back',
    subtitle: 'Come see the new Red Dead Redemption 2',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta;

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Hightlight {...args} />
  </div>
);

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Hightlight {...args} />
  </div>
);

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
};
