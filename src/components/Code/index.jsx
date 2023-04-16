import style from './index.module.css';

function Code({ code }) {
  return (
    <div class={style.container}>
      <pre>
        <code class={style.code}>{code}</code>
      </pre>
    </div>
  );
}

export default Code;
