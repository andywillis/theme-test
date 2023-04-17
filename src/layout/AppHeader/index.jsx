import Heading from '../../components/Heading';
import Select from '../../components/Select';

import style from './index.module.css';

import {
  theme
} from '../../store';

function handleSelect(e) {
  theme.selectedTheme.value = e.target.value;
}

function AppHeader() {

  return (
    <header class={style.header}>
      <Heading text="Journal" level="1" />
      <Select
        name="themes"
        label="Choose color mode"
        value={theme.selectedTheme.value}
        options={theme.themeSelectOptions.value}
        handleSelect={handleSelect}
      />
    </header>
  );
}

export default AppHeader;
