import { html } from 'htm/preact';

import Tag from './Tag';

import style from './index.module.css';

function Tags({ tags }) {
  return html`
    <ul class=${style.tags}>
      ${tags.map(tag => html`
        <${Tag} key=${tag.id} text=${tag.text} />;
      `)}
    </ul>
  `;
}

export default Tags;
