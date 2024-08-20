import React from "react";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import RouterPublic from "./routes/publicRoute.jsx";
import Data from "./resources/data.js";
import Header from "./layouts/header.jsx";
import { SnackbarProvider } from "notistack";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  document.title = Data.title;
  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }}>
      <BrowserRouter>
        <Header />
        {/* Menu Option */}
        <RouterPublic />
          <Footer />
      </BrowserRouter>
    </SnackbarProvider>
  );
};

export default App;
