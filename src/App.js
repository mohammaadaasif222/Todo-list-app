import React from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
        <SideBar />
        <Main />
        </div>
      </div>
    </>
  );
}

export default App;
