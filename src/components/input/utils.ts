export const getColor = (props: any, defaultColor: string = 'inherit'): string =>
  props.state === 'invalid'
    ? props.theme.colors.alert
    : props.state === 'success'
      ? props.theme.colors.success
      : defaultColor;
