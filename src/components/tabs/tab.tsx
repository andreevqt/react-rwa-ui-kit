import React from 'react';
import styled from 'styled-components';
import useTabs from './use-tabs';

export interface TabProps {
  value?: string,
  label: string,
}

const StyledTab = styled.div<{ active: boolean }>`
  border-bottom: 2px solid ${props => props.active ? props.theme.colors.accent : 'transparent'};
  padding: ${props => `${props.theme.spacing * 1}px ${props.theme.spacing * 3}px`};
  background-color: ${props => props.theme.colors.bg};
  cursor: pointer;
`;

const Tab = ({
  value = '',
  label
}: TabProps) => {
  const { value: activeValue, onChange } = useTabs();
  return (
    <StyledTab active={activeValue === value} onClick={() => onChange(value)}>
      {label}
    </StyledTab>
  )
};

export default Tab;
