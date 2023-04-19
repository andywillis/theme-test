/* eslint-disable react/no-danger */
import { html } from 'htm/preact';

import Heading from '../Heading';
import Tags from '../Tags';

import style from './index.module.css';

function renderHTML(html) {
  return { __html: html };
}

function getPart(el) {

  switch (el.type) {

    case 'image': return html`
      <img
        key={el.id}
        class={style.image}
        src={el.src}
        alt={el.alt}
      />
    `;

    case 'heading': return html`
      <p
        class=${style.heading}
        key=${el.id}
      >${el.text}
      </p>
    `;

    case 'table': return html`
      <table
        class=${style.table}
        key=${el.id}
        className=${style.table}
        dangerouslySetInnerHTML=${renderHTML(el.html)}
      />
    `;

    case 'blockquote': return html`
      <p
        class=${style.blockquote}
        key=${el.id}
        dangerouslySetInnerHTML=${renderHTML(el.html)}
      />
    `;

    default: return html`
      <p
        class=${style.para}
        key=${el.id}
        dangerouslySetInnerHTML=${renderHTML(el.html)}
      />
    `;

  }

}

function Entry({ data: entry }) {

  const { title, date, body, tags } = entry;

  return html`
    <section class=${style.entry}>

      <header class=${style.header}>
        <${Heading} text=${title} level="2" />
        <${Heading} text=${date} level="4" />
      </header>

      ${body.map(getPart)}

      <${Tags} tags=${tags} />

    </section>
  `;

}

export default Entry;
