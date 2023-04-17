import Heading from '../../components/Heading';
import Icon from '../../components/Icon';

import style from './index.module.css';

import {
  theme
} from '../../store';

function handleClick(e) {
  const { type } = e.target.dataset;
  theme.selectedTheme.value = type;
}

function AppHeader() {

  return (
    <header class={style.header}>
      <Heading text="Journal" level="1" />
      <section class={style.icons}>
        <Icon
          type="light"
          alt="Light mode"
          handleClick={handleClick}
          disabled={theme.selectedTheme.value === 'light'}
        />
        <Icon
          type="dark"
          alt="Dark mode"
          handleClick={handleClick}
          disabled={theme.selectedTheme.value === 'dark'}
        />
      </section>
    </header>
  );
}

export default AppHeader;
