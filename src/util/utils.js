export function determineRate(rate) {
  let ratingLevel = 0;
  for (let star = 5; star > 0; star--) {
    ratingLevel = Math.floor(rate / star);
    if (ratingLevel >= 20) {
      return star;
    } 
  }
  return 0;
}

export function generateRatingArray(ratingLevel) {
  const ratingArray = [];
  
  for (let i = 0; i < 5; i++) {
    if (i < ratingLevel) {
      ratingArray.push("filled star");
    } else {
      ratingArray.push("unfilled star");
    }
  }
  
  return ratingArray;
}

export function calculatePoints(score) {
    const points = (score / 100) * 5;
    return points.toFixed(1);
}