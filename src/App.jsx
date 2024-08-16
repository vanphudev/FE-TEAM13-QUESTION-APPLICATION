import React from "react";
import "./styles/index.scss";
import {BrowserRouter} from "react-router-dom";
import RouterPublic from "./routes/publicRoute.jsx";
import Data from "./resources/data.js";
import Home from "./pages/home.jsx";
import Header from "./layouts/header.jsx";

const App = () => {
   document.title = Data.title;
   return (
      <>
         <BrowserRouter>
         <Header />
            {/* Menu Option */}
            <RouterPublic Home={Home} />
            <div className='app'>
               <h1>{Data.title}</h1>
               <p>{Data.description}</p>
            </div>
            {/* Footer  */}
         </BrowserRouter>
      </>
   );
};
export default App;
