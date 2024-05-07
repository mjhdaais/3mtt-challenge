import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
import { useCustomContext } from "../state/state"
import Desc from "../components/Desc"
import BackIcon from "../components/icons/BackIcon"

function ProductDesc() {
  const { state } = useLocation()
  const context = useCustomContext()
  
  return (
    <section className="mb-4 px-3">
      <hr className="mb-5" />
      <Link to="/">
        <BackIcon 
        style="w-10 h-10 text-gray-700 mb-4 p-2 bg-gray-100 rounded-full"
        />
      </Link>
      <div className="flex justify-center items-stretch py-1">
        {context.producers_API.map((producer) => (
          producer.products.map(product => {
            if (producer.id === state.producerId && product.id === state.productId) {
              return (
                <Desc 
                  key={product.id} 
                  producer={producer} 
                  product={product}
                />
              );
            }
          })
        ))}
      </div>
    </section>
  )
}

export default ProductDesc