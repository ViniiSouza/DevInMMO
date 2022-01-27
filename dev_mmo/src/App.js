import { BrowserRouter } from "react-router-dom";
import { MMOGamesProvider } from "./contexts/MMOGames/MMOGamesProvider";
import { Router } from "./routes/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <MMOGamesProvider>
          <Router />
        </MMOGamesProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
