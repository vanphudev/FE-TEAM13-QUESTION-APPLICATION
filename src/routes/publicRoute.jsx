import React from "react";
import {Routes, Route} from "react-router-dom";

const RouterPublic = ({Home}) => {
   return (
      <>
         <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/home' element={<Home />} />
         </Routes>
      </>
   );
};

export default RouterPublic;
