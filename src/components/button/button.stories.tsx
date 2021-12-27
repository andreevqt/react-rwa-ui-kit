import React from 'react';

import { Button, ButtonProps } from './button';
import Edit from '../../icons/edit'

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: `Отправить комментарий`
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  icon: <Edit/>,
  children: `Создать запись`
}

