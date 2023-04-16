import Heading from './components/Heading';
import Select from './components/Select';

import useTheme from './hooks/useTheme';

import { theme, themeOptions } from './store/theme';

export default function App() {
  
  useTheme(theme.value);
  
  function handleSelect(e) {
    theme.value = e.target.value;
  }

  return (
    <main>
      <Select
        value={theme.value}
        options={themeOptions.value}
        handleSelect={handleSelect}
      />
      <Heading text="Heading" />
    </main>
  );
}
