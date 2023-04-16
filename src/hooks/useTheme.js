import { useLayoutEffect } from 'preact/hooks';

import { workingTheme } from '../store/theme';

function useTheme(selectedTheme) {
  useLayoutEffect(() => {
    Object.entries(workingTheme.value).forEach(([ key, value ]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [selectedTheme]);
}

export default useTheme;
