import { createContext, useEffect, useState } from "react";
import "./App.css";
import "./Components/Styles/App.css";
import Contribute from "./Components/Contribute/Contribute";
import Footer from "./Components/Footer/Footer";
import Herosection from "./Components/Heropage/Herosection";
import Navbar from "./Components/Navbar";
import Recent from "./Components/Recentnft/Recent";
import Statues from "./Components/Statue/Statues";
import Preload from "./Components/Preload/Preload";
export const ThemeContext = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState("dark");
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 10000);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ darkMode, setDarkMode, clicked, setClicked }}
    >
      {!completed ? (
        <div className="contain">
          {!loading ? (
            <div className="loader">
              <Preload />
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      ) : (
        <>
          <div className="App" id={darkMode}>
            <Navbar />
            <Herosection />
            <Recent />
            <Contribute />
            <Statues />
            <Footer />
          </div>
        </>
      )}
    </ThemeContext.Provider>
  );
}

export default App;
