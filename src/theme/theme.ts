export type PrimaryColor = {
  normal: string,
}

export type AccentColor = {
  normal: string,
  normalHover: string,
  normalActive: string,
}

export type AlertColor = {
  normal: string,
}

export type SuccessColor = {
  normal: string,
}

export type SecondaryColor = {
  normal: string,
  dark: string,
}

export type BgColor = {
  normal: string,
}

export type BodyColor = {
  normal: string,
}

export type Base = {
  fontFamily: string,
  fontSize: string,
  borderRadius: string,
  spacing: number,
}

export type Button = {
  borderRadius: string,
}

export type Input = {
  borderRadius: string,
}

export type TTheme = {
  primaryColor: PrimaryColor,
  accentColor: AccentColor,
  alertColor: AlertColor,
  successColor: SuccessColor,
  secondaryColor: SecondaryColor,
  bgColor: BgColor,
  bodyColor: BodyColor,
  base: Base,
  button: Button,
  input: Input,
};
