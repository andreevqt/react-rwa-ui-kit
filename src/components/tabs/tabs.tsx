import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import TabsContext from './tabs-context';

export interface TabsProps {
  value: string,
  onChange: ((value: string) => void),
  children?: React.ReactNode,
}

const StyledTabs = styled.div`
  display: flex;
`;

const Tabs = ({
  value,
  onChange,
  children
}: TabsProps) => {

  return (
    <TabsContext.Provider value={{ value, onChange }}>
      <StyledTabs>
        {children}
      </StyledTabs>
    </TabsContext.Provider>
  )
};

export default Tabs;
