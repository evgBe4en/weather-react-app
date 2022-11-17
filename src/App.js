import "./App.css";
import Input from "./components/Input";
import CardList from "./components/CardList";
import { useCitiesList } from "./hooks/useCitiesList";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleCity from "./components/SingleCity";
import VidBgMainTheme from "./videoBackgrongs/VidBgMainTheme";

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <VidBgMainTheme />
                  <div className="mainWrapper">
                    <Input />
                    <CardList citiesList={state.citiesList} />
                  </div>
                </>
              }
            />
            <Route path="/city/:city" element={<SingleCity />} />
          </Routes>
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
