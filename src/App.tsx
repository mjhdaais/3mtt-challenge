import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Bestsellers from "./components/Bestsellers"
import ProductDesc from "./components/ProductDesc"
import Producer from "./components/Producer"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Bestsellers /> } />
        <Route path="product-desc" element={ <ProductDesc /> } />
        <Route path="producer" element={ <Producer /> } />
      </Routes>
    </>
  )
}

export default App