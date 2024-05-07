import BellIcon from "../components/icons/BellIcon"
import HeartIcon from "../components/icons/HeartIcon"
import CartIcon from "../components/icons/CartIcon"
import { useCustomContext } from "../state/state"

function Header() {
  const context = useCustomContext()
    
  return (
    <header className="p-3">
      <div className="flex justify-between items-center text-gray-700">
        <h1 
          className="basis-9/12 text-2xl font-bold"
        >Nigerian Skills <br /> Marketplace</h1>
        <div className="basis-3/12">
          <div className="flex justify-end items-center gap-3">
            <div className="relative">
              <div
                className="absolute flex justify-center items-center w-3 h-3 bg-red-500 text-white text-[9px] rounded-full"
              >0</div>
              <BellIcon
                style="w-6 h-6 text-gray-700"
              />
            </div>
            <div className="relative">
              <div
                className="absolute flex justify-center items-center w-3 h-3 bg-red-500 text-white text-[9px] rounded-full"
              >{context.favorites.length}</div>
              <HeartIcon
                style="w-6 h-6 text-gray-700"
              />
            </div>
            <div className="relative">
              <div
                className="absolute flex justify-center items-center w-3 h-3 bg-red-500 text-white text-[9px] rounded-full"
              >{context.cart.length}</div>
              <CartIcon
                style="w-6 h-6 text-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header