import { BrowserRouter } from "react-router-dom";
import { MMOGamesProvider } from "./contexts/MMOGames/MMOGamesProvider";
import { Router } from "./routes/Router";
import { GlobaStyle } from "./themes/GlobalStyles";

function App() {
  return (
    <>
      <GlobaStyle />
      <BrowserRouter>
        <MMOGamesProvider>
          <Router />
        </MMOGamesProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
