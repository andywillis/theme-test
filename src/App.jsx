import Entry from './components/Entry';
import AppHeader from './layout/AppHeader';
import AppMain from './layout/AppMain';
import AppFooter from './layout/AppFooter';
import Heading from './components/Heading';

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
        <Entry>
          <header>
            <Heading text="Parkes Operation Center (Apollo 11)" level="2" />
            <Heading text="Tuesday, 26 July 2022" level="4" />
          </header>
          <p>Just finished watching <a href="https://en.wikipedia.org/wiki/The_Dish">&quot;The Dish&quot;</a> - the fictional account of the Parkes Observatory and the team that worked there during the Apollo mission. But because it was based on the actual events the film-makers used fictional characters.</p>
        </Entry>
      </AppMain>
      <AppFooter />
    </>
  );

}

export default App;
