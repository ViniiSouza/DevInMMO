import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { MMOGamesProvider } from "./contexts/MMOGames/MMOGamesProvider";
import { Router } from "./routes/Router";
import { GlobaStyle } from "./themes/GlobalStyles";
import { defaultTheme } from "./themes/themes";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobaStyle />
        <BrowserRouter>
          <MMOGamesProvider>
            <Router />
          </MMOGamesProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
