import { effect } from '@preact/signals';

import { workingTheme } from '../store/theme';

function useTheme(selectedTheme) {
  effect(() => {
    Object.entries(workingTheme.value).forEach(([ key, value ]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [selectedTheme]);
}

export default useTheme;
