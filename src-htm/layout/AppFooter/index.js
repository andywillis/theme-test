import { html } from 'htm/preact';

import style from './index.module.css';

function AppFooter() {
  return html`
    <footer className=${style.footer}>
      &copy; Andy Willis ${new Date().getFullYear()}
    </footer>
  `;
}

export default AppFooter;
