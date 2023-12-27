import costs from "../data/costs";

const costCalculator = (cities: Array<string>, country: string) => {
  const ratings: Array<number> = [];
  cities.forEach((city: string) => {
    const cost = costs.find((cost) => {
      return cost.city === city && cost.country === country;
    });

    if (!cost) {
      return null;
    }

    const { avgFlight, companionFare, avgHotel, avgFood } = cost;

    const flightCost = companionFare ? avgFlight / 2 : avgFlight;

    const totalCost = flightCost + avgHotel + avgFood;
    ratings.push(costRating(totalCost));
  });
  const average = ratings.reduce((a, b) => a + b) / ratings.length;
  return average;
};

const costRating = (cost: number) => {
  if (cost <= 200) {
    return 1;
  } else if (cost <= 400) {
    return 2;
  } else if (cost <= 600) {
    return 3;
  } else if (cost <= 800) {
    return 4;
  } else if (cost <= 1000) {
    return 5;
  } else if (cost <= 1200) {
    return 6;
  } else if (cost <= 1400) {
    return 7;
  } else if (cost <= 1600) {
    return 8;
  } else if (cost <= 1800) {
    return 9;
  }
  return 10;
};

export default costCalculator;
