import { useContext } from 'react';
import TabsContext, { ITabsContext } from './tabs-context';

const useTabs = (): ITabsContext => {
  return useContext<ITabsContext>(TabsContext);
};

export default useTabs;
