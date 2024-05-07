import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
import { useCustomContext } from "../state/state"
//import Product from "../components/Product"
import BackIcon from "../components/icons/BackIcon"
import ProducerDetail from "../components/ProducerDetail"

function Producer() {
  const { state } = useLocation()
  const context = useCustomContext()
  
  return (
    <section className="px-3">
      <hr className="mb-5" />
      <Link to="/">
        <BackIcon 
        style="w-10 h-10 text-gray-700 mb-4 p-2 bg-gray-100 rounded-full"
        />
      </Link>
      <div className="flex justify-center items-stretch py-1">
        {context.producers_API.map((producer) => {
          if (producer.id === state.producerId) {
            return (
              <ProducerDetail 
                producer={producer}
              />
              );
            }
          }
        )}
      </div>
    </section>
  )
}

export default Producer