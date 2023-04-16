import { signal, computed } from '@preact/signals';

import themeDefault from '../themes/default/default.theme';
import themeLight from '../themes/light.theme';
import themeDark from '../themes/dark.theme';

import { capitaliseWord } from '../helpers/strings';

// Set up

const availableThemes = {
  light: themeLight,
  dark: themeDark
};

// Signals

const selectedTheme = signal('light');

const themeSelectOptions = computed(() => {
  return Object.keys(availableThemes).map(key => {
    return { value: key, text: `${capitaliseWord(key)} Mode` };
  });
});

const workingTheme = computed(() => {
  return {
    ...themeDefault,
    ...availableThemes[selectedTheme.value]
  };
});

export {
  selectedTheme,
  themeSelectOptions,
  workingTheme
};
