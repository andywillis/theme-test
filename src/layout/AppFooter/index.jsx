import style from './index.module.css';

function AppFooter() {
  return (
    <footer className={style.footer}>
      &copy; Andy Willis {new Date().getFullYear()}
    </footer>
  );
}

export default AppFooter;
