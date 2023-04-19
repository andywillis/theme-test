import { createElement } from 'preact';
import classNames from 'classnames';

import style from './index.module.css';

function Heading({ level = 1, text }) {

  const cn = classNames([ style.heading, style[`h${level}`] ]);

  return createElement(
    `h${level}`,
    { class: cn },
    text
  );

}

export default Heading;
