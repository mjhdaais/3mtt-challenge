import Product from "../components/Product"
import Search from "../components/Search"
import Categories from "../components/Categories"
import { useCustomContext } from "../state/state"

function Bestsellers() {
  const context = useCustomContext()
  
  return (
    <>
      <Search />
      <Categories />
      <section className="my-8 px-3">
        <h2
          className="mb-2 text-gray-700 font-medium"
      >Best Sellers</h2>
        <div className="flex gap-3 py-1 overflow-x-auto">
          {context.producers_API.map((producer) => (
            producer.products.map(product => (
              <Product 
                key={product.id} 
                producer={producer} 
                product={product}
              />
            ))
          ))}
        </div>
      </section>
    </>
  )
}

export default Bestsellers