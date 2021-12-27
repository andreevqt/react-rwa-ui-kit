import React, { useState } from 'react';

import Tabs from './tabs';
import Tab from './tab';
import Edit from '../../icons/edit'

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Tabs',
  component: Tabs,
  subcomponents: { Tab }, //👈 Adds the ListItem component as a subcomponent
} as ComponentMeta<typeof Tabs>;

export const TabsGroup: ComponentStory<typeof Tab> = (args) => {
  const [tabValue, setTabValue] = useState('one');
  const onChange = (value: string) => {
    setTabValue(value);
  };

  return (
    <Tabs value={tabValue} onChange={onChange}>
      <Tab value="one" label="One" />
      <Tab value="two" label="Two" />
      <Tab value="three" label="Three" />
    </Tabs>
  );
};
