import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  children?: React.ReactNode;
};

const StyledButton = styled.button`
  border: 1px solid transparent;
  padding: 10px 20px;
  background-color: ${props => props.theme.accent};
  cursor: pointer;
`;

export const Button = ({
  children,
  htmlType,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      type={htmlType}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
