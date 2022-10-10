import { BrowserRouter, Routes, Route } from "react-router-dom";

/////
import Navbar from "./components/navbar";
import ExpandingCards from "./components/01-ExpandingCards/ExpandingCards";
import ProgressSteps from "./components/02-ProgressSteps/ProgressSteps";
import RotatingNavigation from "./components/03-RotatingNavigation";
import HiddenSearchWidget from "./components/04-HiddenSearchWidget";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ExpandingCards />} />
        <Route path='/progress-steps' element={<ProgressSteps />} />
        <Route path='/rotating-navigation' element={<RotatingNavigation />} />
        <Route path='/hidden-search-widget' element={<HiddenSearchWidget />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
