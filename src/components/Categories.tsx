import { useCustomContext } from "../state/state"

function Categories() {
  const context = useCustomContext()
  
  return (
    <section className="mt-5 px-3">
      <h2
        className="mb-2 text-gray-700 font-medium"
      >Categories</h2>
      <div className="flex gap-1 overflow-x-auto">
        {context.categories_API.map((item, index) => (
            <div 
              key={index}
              className="p-3 bg-gray-800 text-white text-sm font-medium rounded whitespace-nowrap"
            >{item}</div>
          )
        )}
      </div>
    </section>
  )
}

export default Categories