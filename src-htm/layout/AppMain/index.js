import { html } from 'htm/preact';

import style from './index.module.css';

function AppMain({ children }) {

  return html`
    <main class=${style.main}>
      ${children}
    </main>
  `;
}

export default AppMain;
