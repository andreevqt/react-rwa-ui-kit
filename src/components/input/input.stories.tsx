import React from 'react';

import { Input } from './input';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'defaultInput',
  type: 'text',
  label: `Заголовок`
};

export const Invalid = Template.bind({});

Invalid.args = {
  id: 'invalidInput',
  type: 'text',
  label: 'Заголовок',
  state: 'invalid',
};

export const Success = Template.bind({});

Success.args = {
  id: 'successInput',
  type: 'text',
  label: 'Заголовок',
  state: 'success',
};

export const Multiline = Template.bind({});

Multiline.args = {
  id: 'multiline',
  label: 'Содержание',
  multiline: true
};
