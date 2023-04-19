import { Fragment } from 'preact/compat';
import { html } from 'htm/preact';

import AppHeader from './layout/AppHeader';
import AppMain from './layout/AppMain';
import AppFooter from './layout/AppFooter';

import Entry from './components/Entry';

import useTheme from './hooks/useTheme';

import {
  theme,
  journal
} from './store';

function App() {

  useTheme(theme.selectedTheme.value);

  return html`
    <${Fragment}>
      <${AppHeader} />
      <${AppMain}>
        ${journal.entries.value.map(entry => html`
          <${Entry} key=${entry.id} data=${entry} />
        `)}
      <//>
      <${AppFooter} />
    <//>
  `;

}

export default App;
