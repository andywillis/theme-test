import { useLayoutEffect } from 'preact/hooks';

import themeLight from '../themes/light.theme.js';
import themeDark from '../themes/dark.theme.js';
import themeBlue from '../themes/blue.theme.js';
import themeGreen from '../themes/green.theme.js';

const themes = {
  light: themeLight,
  dark: themeDark,
  blue: themeBlue,
  green: themeGreen
};

function useTheme(theme) {
  useLayoutEffect(() => {
    Object.entries(themes[theme]).forEach(([ key, value ]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [theme]);
}

export default useTheme;
