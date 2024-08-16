import React from "react";
import {Routes, Route} from "react-router-dom";

const RouterPublic = ({Home}) => {
   return (
      <>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
         </Routes>
      </>
   );
};

export default RouterPublic;
