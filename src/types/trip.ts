export type FeasibilityStatus = 'fits_budget' | 'tight_budget' | 'exceeds_budget';

export interface TransportOption {
  mode: string;
  operatorDetails: string;
  approxFarePerPerson: number;
  roundTripFarePerPerson: number;
  travelTime: string;
  pros: string;
  cons: string;
  bookingTips: string;
  isRecommended: boolean;
}

export interface LocalTransportOption {
  mode: string;
  approxDailyCost: number;
  description: string;
  budgetTip: string;
}

export interface AccommodationArea {
  areaName: string;
  safetyRating: string;
  approxPricePerNight: number;
  whyStayHere: string;
  typesAvailable: string;
}

export interface AccommodationType {
  category: string;
  estimatedPerNightPerPerson: number;
  safetyNotes: string;
  topPicksOrBrands: string[];
}

export interface ItineraryActivity {
  timeSlot: 'Morning' | 'Afternoon' | 'Evening' | 'Night';
  placeName: string;
  description: string;
  approxDuration: string;
  entryFeePerPerson: number;
  isFree: boolean;
  travelMethodFromPrevious: string;
  transitCost: number;
  budgetTip?: string;
}

export interface DayItinerary {
  dayNumber: number;
  theme: string;
  geographicalArea: string;
  activities: ItineraryActivity[];
  dayTotalEntryFees: number;
  dayTotalTransitCost: number;
  walkingDistanceKm?: number;
}

export interface FoodDish {
  name: string;
  description: string;
  approxCost: number;
  bestPlacesToTry: string;
}

export interface FoodPlan {
  dailyBreakdown: {
    breakfast: { cost: number; suggestions: string };
    lunch: { cost: number; suggestions: string };
    eveningSnacks: { cost: number; suggestions: string };
    dinner: { cost: number; suggestions: string };
    totalDailyCost: number;
  };
  mustTryDishes: FoodDish[];
  budgetFoodHacks: string[];
}

export interface BudgetItem {
  category: string;
  costPerPerson: number;
  totalCost: number;
  notes: string;
  isFlexible: boolean;
}

export interface BudgetBreakdown {
  items: BudgetItem[];
  totalTripCost: number;
  totalCostPerPerson: number;
  minimumBarebonesCost: number;
  comfortableCost: number;
  recommendedBuffer: number;
  withinUserBudget: boolean;
  savingsOrDeficit: number;
}

export interface MoneySavingTip {
  title: string;
  description: string;
  estimatedSavings: string;
}

export interface PackingItem {
  item: string;
  category: 'Essentials' | 'Clothing' | 'Tech' | 'Toiletries' | 'Safety & Medical';
  importance: 'High' | 'Medium';
}

export interface ScamWarning {
  scam: string;
  prevention: string;
}

export interface SafetyAndPracticalInfo {
  safetyTips: string[];
  weatherAndBestTime: string;
  advanceBookingsNeeded: string[];
  essentialPackingList: PackingItem[];
  scamsAndTrapsToAvoid: ScamWarning[];
}

export interface AlternativeDestination {
  name: string;
  vibe: string;
  estimatedCostPerPerson: number;
  whyCheaper: string;
  idealDays: number;
}

export interface AlternativePlans {
  cheaperItineraryNotes: string[];
  badWeatherBackupPlan: {
    rainyDayItinerary: string[];
    indoorAttractions: string[];
    rainSafetyTips: string;
  };
  alternativeDestinations: AlternativeDestination[];
}

export interface TripPlan {
  id: string;
  title: string;
  tagline: string;
  destination: string;
  startingLocation: string;
  durationDays: number;
  numTravelers: number;
  travelDates: string;
  budgetPerPerson: number;
  totalBudget: number;
  interests: string[];
  travelStyle: string;
  accommodationPreference: string;
  preferredTransportation: string;
  destinationSuitability: {
    verdict: string;
    reason: string;
    feasibilityStatus: FeasibilityStatus;
  };
  transportation: {
    cheapestRecommendation: string;
    localTransitAdvice: string;
    options: TransportOption[];
    localTransportOptions: LocalTransportOption[];
  };
  accommodation: {
    recommendedAreas: AccommodationArea[];
    types: AccommodationType[];
  };
  itinerary: DayItinerary[];
  foodPlan: FoodPlan;
  budgetBreakdown: BudgetBreakdown;
  moneySavingTips: MoneySavingTip[];
  safetyAndPracticalInfo: SafetyAndPracticalInfo;
  alternativePlans: AlternativePlans;
}

export interface DestinationSuggestion {
  name: string;
  state: string;
  tagline: string;
  estimatedBudgetPerPerson: number;
  distanceOrTransitTime: string;
  cheapestWayToReach: string;
  bestForInterests: string[];
  feasibility: 'Fits Budget' | 'Tight Budget' | 'Stretch Budget';
  highlight: string;
}

export interface TripFormData {
  startingLocation: string;
  destination: string;
  numTravelers: number;
  durationDays: number;
  travelDates: string;
  totalBudget: number;
  budgetPerPerson: number;
  travelStyle: string;
  interests: string[];
  preferredTransportation: string;
  accommodationPreference: string;
}
