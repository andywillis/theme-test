import Code from './components/Code';
import Heading from './components/Heading';
import Select from './components/Select';

import useTheme from './hooks/useTheme';

import {
  selectedTheme,
  themeSelectOptions
} from './store/theme';

import style from './App.module.css';

const code = JSON.stringify([
  { name: 'Andy one two three four five six seven eight', age: 'bob' }
], null, 2);

function App() {

  useTheme(selectedTheme.value);

  function handleSelect(e) {
    selectedTheme.value = e.target.value;
  }

  return (
    <main class={style.main}>
      <Select
        value={selectedTheme.value}
        options={themeSelectOptions.value}
        handleSelect={handleSelect}
      />
      <Heading text="Spotmaps" level="1" />
      <Heading text="How Spotmaps was made in the very beginning" level="2" />
      <Heading text="Spotmaps" level="3" />
      <Heading text="Spotmaps" level="4" />
      <p>Once upon a time I learned Python.</p>
      <p>Once upon a time I learned Python.</p>
      <Code code={code} />
    </main>
  );

}

export default App;
