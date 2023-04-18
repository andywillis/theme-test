import Tag from './Tag';

import style from './index.module.css';

function Tags({ tags }) {
  return (
    <ul class={style.tags}>
      {tags.map(tag => {
        return <Tag key={tag.id} {...tag} />;
      })}
    </ul>
  );
}

export default Tags;
