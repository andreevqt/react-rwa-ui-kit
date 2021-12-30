import React from 'react';
import styled from 'styled-components';
import useTabs from './use-tabs';

export interface TabProps {
  value?: string,
  label: string,
}

const StyledTab = styled.div<{ active: boolean }>`
  border-bottom: 2px solid ${({ active, theme }) => active ? theme.accentColor.normal : 'transparent'};
  padding: ${({ theme }) => `${theme.base.spacing * 2}px ${theme.base.spacing * 6}px`};
  background-color: ${({ theme }) => theme.bgColor.normal};
  cursor: pointer;
`;

const Tab = ({
  value = '',
  label
}: TabProps) => {
  const { value: activeValue, onChange } = useTabs();
  return (
    <StyledTab
      active={activeValue === value}
      onClick={() => onChange(value)}
    >
      {label}
    </StyledTab>
  )
};

export default Tab;
