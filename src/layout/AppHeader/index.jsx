import Heading from '../../components/Heading';
import Select from '../../components/Select';

import style from './index.module.css';

import {
  selectedTheme,
  themeSelectOptions
} from '../../store/theme';

function handleSelect(e) {
  selectedTheme.value = e.target.value;
}

function AppHeader() {

  return (
    <header class={style.header}>
      <Heading text="Journal" level="1" />
      <Select
        name="themes"
        label="Choose color mode"
        value={selectedTheme.value}
        options={themeSelectOptions.value}
        handleSelect={handleSelect}
      />
    </header>
  );
}

export default AppHeader;
