import style from './index.module.css';

function Code({ code }) {
  return (
    <pre>
      <code class={style.code}>{code}</code>
    </pre>
  );
}

export default Code;
