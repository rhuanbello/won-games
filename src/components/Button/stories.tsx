import { Story, Meta } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import Button from '.';

export default {
  title: 'Button',
  component: Button
} as Meta;

export const Default: Story = (args) => <Button {...args} />;

Default.args = {
  children: 'Buy now'
};

export const withIcon: Story = (args) => <Button {...args} />;

withIcon.args = {
  children: 'Buy now',
  size: 'small',
  icon: <AddShoppingCart />
};

export const asLink: Story = (args) => <Button {...args} />;

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
};
