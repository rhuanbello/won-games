import { Story, Meta } from '@storybook/react';
import Banner, { BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Lorem ipsum dolor sit amet',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Learn More',
    buttonLink: '#'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Default: Story<BannerProps> = (args) => (
  <div
    style={{
      maxWidth: '104rem',
      margin: '0 auto'
    }}
  >
    <Banner {...args} />
  </div>
);

export const WithRibbon: Story<BannerProps> = (args) => (
  <div
    style={{
      maxWidth: '104rem',
      margin: '0 auto'
    }}
  >
    <Banner {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
};
