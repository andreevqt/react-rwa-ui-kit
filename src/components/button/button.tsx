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
  border: none;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => `${theme.base.spacing * 2}px ${theme.base.spacing * 4}px`};
  border-radius: ${({ theme }) => theme.button.borderRadius};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};

  color: ${({ theme }) => theme.primaryColor.normal};
  background-color: ${({ theme }) => theme.accentColor.normal};

  &:hover, 
  &:focus {
    background-color: ${({ theme }) => theme.accentColor.normalHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.accentColor.normalActive};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.secondaryColor.normal};
    color: ${({ theme }) => theme.secondaryColor.dark};
  }
`;

export const StyledButtonIcon = styled.div`
  margin-right: ${({theme}) => theme.base.spacing}px;
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
