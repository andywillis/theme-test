import { useLayoutEffect } from 'preact/hooks';

import themeDefault from '../themes/default.theme';
import themeLight from '../themes/light.theme';
import themeDark from '../themes/dark.theme';
import themeBlue from '../themes/blue.theme';
import themeGreen from '../themes/green.theme';

const themes = {
  light: themeLight,
  dark: themeDark,
  blue: themeBlue,
  green: themeGreen
};

function useTheme(theme) {
  useLayoutEffect(() => {
    Object.entries({ ...themeDefault, ...themes[theme] }).forEach(([ key, value ]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [theme]);
}

export default useTheme;
