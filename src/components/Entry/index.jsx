/* eslint-disable react/no-danger */
import Heading from '../Heading';
import Tags from '../Tags';

import style from './index.module.css';

function Entry({ data: entry }) {

  const { title, date, body, tags } = entry;

  return (
    <section class={style.entry}>

      <header class={style.header}>
        <Heading text={title} level="2" />
        <Heading text={date} level="4" />
      </header>

      {body.map(el => {

        switch (el.type) {

          case 'image': return (
            <img
              key={el.id}
              class={style.image}
              src={el.src}
              alt={el.alt}
            />
          );

          case 'heading': return (
            <p
              class={style.heading}
              key={el.id}
            >{el.text}
            </p>
          );

          case 'table': return (
            <table
              class={style.table}
              key={el.id}
              className={style.table}
              dangerouslySetInnerHTML={{ __html: el.html }}
            />
          );

          case 'blockquote': return (
            <p
              class={style.blockquote}
              key={el.id}
              dangerouslySetInnerHTML={{ __html: el.html }}
            />
          );

          default: return (
            <p
              class={style.para}
              key={el.id}
              dangerouslySetInnerHTML={{ __html: el.html }}
            />
          );
        }

      })}

      <Tags tags={tags} />

    </section>
  );

}

export default Entry;
