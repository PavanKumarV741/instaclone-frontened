import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from "./component/form";
import Postview from "./component/postview";
import Landingpage from "./component/landingpage"

function App(){
  return(<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage/>}></Route>
        <Route path="/postview" element={<Postview/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}
export default App