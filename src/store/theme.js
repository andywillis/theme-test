import { signal } from '@preact/signals';

// eslint-disable-next-line import/prefer-default-export
export const theme = signal('blue');

export const themeOptions = signal([
  { value: 'light', text: 'Light' },
  { value: 'dark', text: 'Dark' },
  { value: 'blue', text: 'Blue' },
  { value: 'green', text: 'Green' }
]);
