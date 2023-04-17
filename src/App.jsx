import AppHeader from './layout/AppHeader';
import AppMain from './layout/AppMain';
import AppFooter from './layout/AppFooter';

import Entry from './components/Entry';

import useTheme from './hooks/useTheme';

import {
  selectedTheme,
} from './store/theme';

function App() {

  useTheme(selectedTheme.value);

  return (
    <>
      <AppHeader />
      <AppMain>
        <Entry />
      </AppMain>
      <AppFooter />
    </>
  );

}

export default App;
