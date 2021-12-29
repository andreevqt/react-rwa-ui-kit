import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import Alert from '../../icons/alert';
import Check from '../../icons/check';

const getColor = (props: any, defaultColor: string = 'inherit'): string =>
  props.state === 'invalid'
    ? props.theme.alertColor.normal
    : props.state === 'success'
      ? props.theme.successColor.normal
      : defaultColor;

type State = 'invalid' | 'success' | 'default';

const StyledInputWrapper = styled.div`
  display: block;
  label {
    display: inline-block;
    padding-left: ${({ theme }) => `${theme.spacing * 2}px`};
    margin-bottom: ${({ theme }) => `${theme.spacing / 2}px`};
  }
`;

const StyledInput = styled.div<{ state: State }>`
  position: relative;
  input, textarea {
    display: block;
    width: 100%;
    border-width: 2px;
    border-style: solid;
    border-color: ${(props) => getColor(props, 'transparent')};
    border-radius: ${({ theme }) => theme.base.borderRadius};
    background-color: ${({ theme }) => theme.primaryColor.normal};
    color: ${({ theme }) => theme.bodyColor.normal};    
    padding: ${({ theme }) => `${theme.base.spacing * 1}px ${theme.base.spacing * 2}px`};
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.accentColor.normal};
    }
    &::placeholder {
      color: ${({ theme }) => theme.secondaryColor.dark};
    }
  }
`;

const StyledInfo = styled.div<{ invalid?: boolean }>`
  color: ${({ invalid, theme }) => invalid ? theme.alertColor.normal : theme.successColor.normal};
  margin-top: ${({ theme }) => `${theme.base.spacing / 2}px`};
  padding-left: ${({ theme }) => `${theme.base.spacing * 2}px`};
`;

const StyledIcon = styled.div<{ state?: State }>`
  position: absolute;
  color: ${props => getColor(props)};
  right: ${({ theme }) => `${theme.base.spacing * 2}px`};
  top: calc(50% - 24px / 2);
  font-size: 0;
`;

export interface InputProps {
  id: string,
  name: string,
  placeholder?: string,
  label?: string,
  state?: State,
  type?: 'text' | 'password' | 'email' | 'search',
  value?: string,
  onChange?: (e: SyntheticEvent) => void,
  rows: number,
  cols: number,
  multiline?: boolean,
  successMessage?: (value?: string) => string,
  invalidMessage?: (value?: string) => string,
}

export const Input = ({
  id,
  name,
  value,
  label,
  multiline = false,
  type = 'text',
  placeholder = 'Введите значение',
  rows = 4,
  cols = 50,
  state = 'default',
  successMessage = (_value) => 'Изменения сохранены!',
  invalidMessage = (_value) => 'Ошибка!',
}: InputProps) => {

  return (
    <StyledInputWrapper>
      <label htmlFor={id}>{label}</label>
      <StyledInput state={state}>{
        multiline ? <textarea id={id} name={name} rows={rows} cols={cols} placeholder={placeholder} />
          : <input id={id} name={name} placeholder={placeholder} type={type} />
      }<StyledIcon state={state}>{state === 'invalid'
        ? <Alert />
        : state === 'success'
          ? <Check />
          : null}
        </StyledIcon>
      </StyledInput>{
        (state === 'invalid') ? <StyledInfo invalid>{invalidMessage(value)} </StyledInfo>
          : (state === 'success') ? <StyledInfo>{successMessage(value)} </StyledInfo>
            : null
      }
    </StyledInputWrapper>
  );
};
