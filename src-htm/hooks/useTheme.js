import { effect } from '@preact/signals';

import { theme } from '../store';

function useTheme(selectedTheme) {
  effect(() => {
    Object.entries(theme.workingTheme.value).forEach(([ key, value ]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [selectedTheme]);
}

export default useTheme;
