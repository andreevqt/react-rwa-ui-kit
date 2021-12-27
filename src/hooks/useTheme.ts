import {useContext} from 'react';
import {TTheme} from '../theme/theme';
import {ThemeContext} from 'styled-components';

const useTheme = () : TTheme => {
  return useContext(ThemeContext);
};

export default useTheme;
