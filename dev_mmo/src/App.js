import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { MMOGamesProvider } from "./contexts/MMOGames/MMOGamesProvider";
import { Router } from "./routes/Router";
import { GlobaStyle } from "./themes/GlobalStyles";
import { MyThemesProvider } from "./contexts/MyThemes/MyThemesProvider";
import { MyThemesContext } from "./contexts/MyThemes/MyThemesContext";
import { Header } from "./components/shared/Header/Header";
import { Footer } from "./components/shared/Footer/Footer";

function App() {
  return (
    <>
      <MyThemesProvider>
        <GlobaStyle />
        <MMOGamesProvider>
          <MyThemesContext.Consumer>
            {(prop) => (
              <ThemeProvider theme={prop.temaAtual}>
                <BrowserRouter>
                  <Header />
                  <Router />
                </BrowserRouter>
                <Footer />
              </ThemeProvider>
            )}
          </MyThemesContext.Consumer>
        </MMOGamesProvider>
      </MyThemesProvider>
    </>
  );
}

export default App;
