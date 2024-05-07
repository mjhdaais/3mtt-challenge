import { useState, useEffect } from "react";
import { calculatePoints, determineRate, generateRatingArray } from "../util/utils";
import StarIcon from "../components/icons/StarIcon"
import StarIconFav from "../components/icons/StarIconFav"

function Rate({ producer }) {
  const [ratePoints, setRatePoints] = useState(0);
  const [ratingStars, setRatingStars] = useState([]);

  useEffect(() => {
    if (producer) {
      const determinedRate = determineRate(producer.rating);
      const ratingArray = generateRatingArray(determinedRate);
      setRatePoints(calculatePoints(producer.rating));
      setRatingStars(ratingArray || []);
    }
  }, [producer]);

  return (
    <div className="flex items-center gap-2">
      <p>{ratePoints}</p>
      <div className="flex items-center">
        {ratingStars.map((item, index) => (
          item === "filled star" ?
            (<StarIconFav key={index} style="w-4 h-4 text-lime-500" />) :
            (<StarIcon key={index} style="w-4 h-4 text-gray-700" />)
        ))}
      </div>
      <p>({producer && producer.rating}%)</p>
    </div>
  );
}

export default Rate;
