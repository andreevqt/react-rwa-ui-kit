import React from 'react';

import { Button, ButtonProps } from './button';
import Edit from '../../icons/edit'

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const WithoutIcon = Template.bind({});

WithoutIcon.args = {
  label: `Отправить комментарий`
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  icon: <Edit/>,
  label: `Создать запись`
}

