import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import HeartIcon from "../components/icons/HeartIcon"
import HeartIconFav from "../components/icons/HeartIconFav"
import Favorite from "../components/Favorite"
import Rate from "../components/Rate"

function Product({ producer, product }) {

  return (
    <div className="flex flex-col text-gray-700 shadow rounded">
      <Link 
        to="product-desc" 
        state={{ 
          producerId:  producer.id, 
          productId: product.id
        }}
      >
        <img 
          //src={product.image} 
          src={"https://placehold.co/500x500/png"}
          alt={product.name} 
          className="w-full h-[309px] rounded-t"
        />
      </Link>
      <div className="w-[250px] px-3 pt-2 pb-4 space-y-1 rounded-b">
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">{product.name}</p>
          <Favorite product={product} />
        </div>
        <div
          className="flex justify-between items-center"
        >
          <Rate producer={producer} />
          <p
            className="text-xs font-bold"
          >{product.sold} sold</p>
        </div>
        <p className="text-lg font-medium">&#8358;{product.price}</p>
        <Link 
          to="producer" 
          state={{ 
            producerId:  producer.id, 
          }}
        >
          <div
            className="text-xs"
          >by <span
            className="text-orange-400 underline"
          >{producer.name}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Product