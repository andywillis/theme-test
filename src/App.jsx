import AppHeader from './layout/AppHeader';
import AppMain from './layout/AppMain';
import AppFooter from './layout/AppFooter';

import Entry from './components/Entry';

import useTheme from './hooks/useTheme';

import {
  theme,
  journal
} from './store';

function App() {

  useTheme(theme.selectedTheme.value);

  return (
    <>
      <AppHeader />
      <AppMain>
        {journal.entries.value.map(entry => {
          return <Entry key={entry.id} data={entry} />;
        })}
      </AppMain>
      <AppFooter />
    </>
  );

}

export default App;
