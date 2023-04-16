import Heading from './components/Heading';

import useTheme from './hooks/useTheme';

import { theme } from './store/main';

export default function App() {
  
  useTheme(theme.value);
  
  function handleSelect(e) {
    theme.value = e.target.value;
  }

  return (
    <main>
      <select value={theme.value} onChange={handleSelect}>
        <option disabled selected>Choose theme</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <Heading text="Heading" />
    </main>
  );
}
