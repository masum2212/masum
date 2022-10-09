import React from "react";
import Create from "../components/Create";
import Read from "../components/Read";
import Update from "../components/Update";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Index = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/create" element={<Create></Create>}></Route>
            <Route path="/read" element={<Read></Read>}></Route>
            <Route path="/update" element={<Update></Update>}></Route>
        </Routes>
    </BrowserRouter>
  );
};

export default Index;
