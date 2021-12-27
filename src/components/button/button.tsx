import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  icon?: React.ReactNode,
  children?: React.ReactNode;
};

export const StyledButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.accent};
  font-size: 16px;
  padding: 8px 16px;
  line-height: 1.5;
  border-radius: 20px;
  font-family: 'Gilroy';
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.accentDarken}
  }
`;

export const StyledButtonIcon = styled.div`
  margin-right: 5px;
  font-size: 0;
`;

export const Button = ({
  children,
  htmlType,
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
      {children}
    </StyledButton>
  );
};
