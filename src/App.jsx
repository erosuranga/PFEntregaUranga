import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import "./App.css";
import Button from "./components/button";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greetings={"Bienvenidos a Nuestra Tienda"} />
      <div>
        <Button
          color="red"
          label="mi boton"
          callback={() => console.log("click")}
        />
      </div>
    </>
  );
}

export default App;
