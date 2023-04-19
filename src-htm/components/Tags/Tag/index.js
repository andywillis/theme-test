import { html } from 'htm/preact';

import style from './index.module.css';

function Tag({ text }) {
  return html`
    <li class=${style.tag}>
      ${text}
    </li>
  `;
}

export default Tag;
