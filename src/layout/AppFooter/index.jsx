import style from './index.module.css';

function AppFooter({ children }) {

  return (
    <footer class={style.footer}>
      {children}
    </footer>
  );
}

export default AppFooter;
