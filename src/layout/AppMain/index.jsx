import style from './index.module.css';

function AppMain({ children }) {

  return (
    <main class={style.main}>
      {children}
    </main>
  );
}

export default AppMain;
