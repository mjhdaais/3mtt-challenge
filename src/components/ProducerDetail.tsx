import Rate from "../components/Rate"
import BadgeIconFav from "../components/icons/BadgeIconFav"
import MapPinIcon from "../components/icons/MapPinIcon"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'


function ProducerDetail({ producer }) {
  return (
    <section 
      className="flex flex-col justify-center gap-6 w-full px-2 text-gray-700"
    >
      <div
        className="flex justify-center"
      >
        <img 
          //src={producer.image} 
          src={"https://placehold.co/400x400/png"}
          alt={producer.name} 
          className="w-[175px] h-[175px] border-4 border-gray-200 rounded-full"
        />
      </div>
      <div
        className="flex justify-between items-center"
      >
        <div
          className="flex items-center"
        >
          <p
            className="font-medium"
          >{producer.name}</p> 
          <p 
            className="px-2 pb-2 text-gray-700 font-medium"
          >.</p>
          <p
          className="text-xs text-gray-500"
          >{producer.skill}</p>
          <BadgeIconFav style="w-4 h-4 mx-2 text-blue-500" />
        </div>
        <div>
          <p
          className="text-xs text-blue-500 underline"
          >Galery</p>
        </div>
      </div>
      <div
        className="flex justify-between"
      >
        <Rate producer={producer} />
        <p
          className="font-medium text-gray-500"
        >324 sales</p>
      </div>
        <div>
          <p
            className="text-sm text-gray-500"
          >{producer.introduction}</p>
        </div>
        <div
          className="flex justify-between items-center"
        >
          <div
            className="flex items-center"
          >
            <MapPinIcon style="w-5 h-5 text-gray-700" />
            <p
              className="mx-1 text-sm"
            >{producer.location}</p>
          </div>
          <p
            className="mx-1 text-xs text-blue-500"
          >#{producer.tag}</p>
          {/*<FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTiktok} />*/}
        </div>
        
    </section>
  )
}

export default ProducerDetail