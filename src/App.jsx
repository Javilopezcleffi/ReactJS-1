import {Navbar} from "./components/layout/navbar/Navbar";
import {ProductList} from "./components/pages/product/ProductList";
import {Counter} from "./components/common/counter/Counter";
import { useState } from "react";

const App = () => {
const [nombre, setNombre]=useState("pepe")
const [isDark, setIsDark]= useState("false")


  return (
<> 
<h1>App</h1>
<Navbar/>
<ProductList nombre={setNombre} edad= {22} />
<Counter/>
<button onClick={()=> setIsDark(!isDark)}> Cambiar {isDark ? "cambiar a claro": "cambiar a modo oscuro"} </button>
</>
  )
}


export default App
