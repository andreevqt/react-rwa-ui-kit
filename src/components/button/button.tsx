import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  label?: string,
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  icon?: React.ReactNode,
};

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.accent};
  border: none;
  border-radius: ${props => props.theme.uiElements.borderRadius};
  padding: ${props => `${props.theme.spacing * 1}px ${props.theme.spacing * 2}px`};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  &:hover, 
  &:focus {
    background-color: ${props => props.theme.colors.accent20};
  }
  &:active {
    background-color: ${props => props.theme.colors.accentLight};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.secondary20};
    color: ${props => props.theme.colors.secondary};
  }
`;

export const StyledButtonIcon = styled.div`
  margin-right: 5px;
  font-size: 0;
`;

export const Button = ({
  label = 'Click me!',
  htmlType = 'button',
  onClick,
  icon,
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      type={htmlType}
      disabled={disabled}
    >
      {icon && <StyledButtonIcon>{icon}</StyledButtonIcon>}
      {label}
    </StyledButton>
  );
};
