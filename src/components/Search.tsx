import SearchIcon from "../components/icons/SearchIcon"

// TODO
// Apply focus:border-gray-700 focus:border-2 
// on the outter DIV when focus on search field

function Search() {
  return (
    <section className="px-3 pb-3">
      <div className="flex justify-between items-center px-1 border border-gray-200 rounded">
        <SearchIcon style="basis-1/12 w-6 h-6 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search the creative world..."
          className="basis-11/12 p-2 border-none outline-none"
          />
      </div>
    </section>
  )
}

export default Search