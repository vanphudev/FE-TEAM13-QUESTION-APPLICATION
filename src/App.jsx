import React from "react";
import "./styles/index.scss";
import {BrowserRouter} from "react-router-dom";
import RouterPublic from "./routes/publicRoute.jsx";
import Data from "./resources/data.js";
import Home from "./pages/home.jsx";

const App = () => {
   document.title = Data.title;
   return (
      <>
         <BrowserRouter>
            {/* Header */}
            {/* Menu Option */}
            <RouterPublic Home={Home} />
            {/* Footer  */}
         </BrowserRouter>
      </>
   );
};
export default App;
