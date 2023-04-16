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
  { name: 'Andy', age: 'bob' }
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
      <Code code={code} />
    </main>
  );

}

export default App;
