import { StateLandingPage } from "./components/Pages/LandingPage/ContextLandingPage/StateLandingPage";
import "./App.css";
import { LandingPage } from "./components/Pages/LandingPage/LandingPage";

function App() {
  return (
    <>
      <StateLandingPage>
        <div className="App">
          <LandingPage />
        </div>
      </StateLandingPage>
    </>
  );
}

export default App;
