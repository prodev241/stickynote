import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
// import { Component } from "react";
import Component from './components/component.jsx'
import ViewAll from "./pages/ViewAll.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Component />} />
             <Route path="view" element={<ViewAll />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
