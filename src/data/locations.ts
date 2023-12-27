import costCalculator from "../services/costCalculator";

type Location = {
  country: string;
  cities: Array<string>;
  travelTime: number;
  cost: number;
  safety: number;
  artCulture: number;
  viewsRelaxation: number;
  food: number;
  keywords: Array<string>;
}

const locations: Array<Location> = [
  {
    country: 'Mexico',
    cities: ['Guadalajara', 'Mexico City', 'Puerto Vallarta'],
    travelTime: 6,
    cost: 5,
    safety: 5,
    artCulture: 8,
    viewsRelaxation: 7,
    food: 10,
    keywords: ["spanish", "warm", "beach", "relaxing", "gluten-free"]
  },
  {
    country: 'Portugal',
    cities: ['Lisbon', 'Porto', 'Algarve'],
    travelTime: 10,
    cost: costCalculator(['Lisbon', 'Porto', 'Algarve'], 'Portugal'),
    safety: 9,
    artCulture: 7,
    viewsRelaxation: 8,
    food: 10,
    keywords: ["portuguese", "warm", "beach", "relaxing", "trains", "city", "art history", "countryside"]
  },
  {
    country: 'Japan',
    cities: ['Tokyo', 'Kyoto', 'Osaka'],
    travelTime: 10,
    cost: costCalculator(['Tokyo', 'Kyoto', 'Osaka'], 'Japan'),
    safety: 10,
    artCulture: 10,
    viewsRelaxation: 8,
    food: 10,
    keywords: ["japanese", "city", "sushi", "sake", "gluten-free"]
  },
  {
    country: 'Ireland',
    cities: ['Dublin', 'Galway', 'Cork'],
    travelTime: 8,
    cost: costCalculator(['Dublin', 'Galway', 'Cork'], 'Ireland'),
    safety: 10,
    artCulture: 8,
    viewsRelaxation: 10,
    food: 7,
    keywords: ["irish", "city", "beer", "pub", "hiking", "cold"]
  },
  {
    country: 'Italy',
    cities: ['Rome', 'Venice', 'Florence'],
    travelTime: 10,
    cost: costCalculator(['Rome', 'Venice', 'Florence'], 'Italy'),
    safety: 9,
    artCulture: 10,
    viewsRelaxation: 9,
    food: 10,
    keywords: ["italian", "city", "beach", "warm", "art history"]
  },
  {
    country: 'Belize',
    cities: ['San Pedro', 'Caye Caulker', 'Placencia'],
    travelTime: 8,
    cost: costCalculator(['San Pedro', 'Caye Caulker', 'Placencia'], 'Belize'),
    safety: 8,
    artCulture: 5,
    viewsRelaxation: 10,
    food: 7,
    keywords: ["spanish", "caribbean", "beach", "relaxing", "gluten-free", "warm"]
  },
  {
    country: 'Costa Rica',
    cities: ['San Jose', 'Monteverde', 'Tamarindo'],
    travelTime: 8,
    cost: costCalculator(['San Jose', 'Monteverde', 'Tamarindo'], 'Costa Rica'),
    safety: 8,
    artCulture: 5,
    viewsRelaxation: 10,
    food: 7,
    keywords: ["spanish", "caribbean", "beach", "relaxing", "gluten-free", "warm"]
  }
]

export default locations;