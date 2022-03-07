import { StateLandingPage } from "./components/Pages/LandingPage/ContextLandingPage/StateLandingPage";
import "./App.css";
import { LandingPage } from "./components/Pages/LandingPage/LandingPage";
import { ContextProvider } from "./ComponentsB/Context";
import ProductRoutings from "./ProductRoutings";
import { MainRoutings } from "./MainRoutings";


function App() {
  return (
    <>
  
    <ContextProvider>
        <StateLandingPage>
          {/* <div className="App"> */}
          {/* <LandingPage /> */}
          <MainRoutings />
          {/* <ProductRoutings /> */}
          {/* </div> */}
        </StateLandingPage>
      </ContextProvider>
   
      
    </>
  );
}

export default App;
