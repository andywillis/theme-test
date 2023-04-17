/* eslint-disable react/no-danger */
import Heading from '../Heading';

import style from './index.module.css';

function Entry({ data: entry }) {

  const { title, date, body } = entry;

  return (
    <section class={style.entry}>

      <header class={style.header}>
        <Heading text={title} level="2" />
        <Heading text={date} level="4" />
      </header>

      {body.map(el => {

        switch (el.type) {

          case 'image': return (
            <img key={el.id} src={el.src} alt={el.alt} />
          );

          case 'heading': return (
            <p key={el.id}>{el.text}</p>
          );

          case 'table': return (
            <table
              key={el.id}
              className={style.table}
              dangerouslySetInnerHTML={{ __html: el.html }}
            />
          );

          case 'blockquote': return (
            <p
              key={el.id}
              dangerouslySetInnerHTML={{ __html: el.html }} />
          );

          default: return (
            <p
              key={el.id}
              dangerouslySetInnerHTML={{ __html: el.html }}
            />
          );
        }

      })}

    </section>
  );

}

export default Entry;
