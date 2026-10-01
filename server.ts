import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { CURATED_TRIPS, DESTINATION_SUGGESTIONS } from './src/data/curatedTrips.ts';
import { TripPlan, DestinationSuggestion } from './src/types/trip.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json({ limit: '10mb' }));

const PORT = Number(process.env.PORT) || 3000;
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  ai = new GoogleGenAI({ apiKey });
}

// Fallback generator when Gemini API is not available or encounters issues
function generateFallbackTrip(params: any): TripPlan {
  const {
    startingLocation = 'Bengaluru',
    destination = 'Hampi',
    durationDays = 3,
    numTravelers = 2,
    travelDates = 'Upcoming Weekend',
    totalBudget = 9000,
    budgetPerPerson = 4500,
    interests = ['Historical & Forts', 'Photography'],
    travelStyle = 'Low-budget but safe & comfortable',
    preferredTransportation = 'Train',
    accommodationPreference = 'Hostel / Budget Guesthouse'
  } = params;

  // Check if we have a closely matched curated trip
  const curatedMatch = CURATED_TRIPS.find(
    (t) =>
      t.destination.toLowerCase().includes(destination.toLowerCase()) ||
      destination.toLowerCase().includes(t.destination.toLowerCase().split(',')[0].toLowerCase())
  );

  if (curatedMatch && Math.abs(curatedMatch.durationDays - durationDays) <= 1) {
    // Adapt curated trip
    const perPerson = budgetPerPerson || Math.round(totalBudget / Math.max(1, numTravelers));
    return {
      ...curatedMatch,
      startingLocation: startingLocation || curatedMatch.startingLocation,
      numTravelers: Number(numTravelers),
      travelDates: travelDates || curatedMatch.travelDates,
      budgetPerPerson: perPerson,
      totalBudget: perPerson * Number(numTravelers),
      interests: interests.length > 0 ? interests : curatedMatch.interests,
      travelStyle,
      accommodationPreference,
      preferredTransportation
    };
  }

  // Create an authentic, calculated budget plan
  const perPerson = Math.max(2000, budgetPerPerson || Math.round(totalBudget / Math.max(1, numTravelers)));
  const days = Math.max(2, Math.min(10, Number(durationDays) || 3));
  const travelers = Math.max(1, Number(numTravelers) || 2);

  // Reasonable Indian travel unit costs:
  const trainRoundtripCost = Math.round(Math.min(perPerson * 0.28, 900));
  const lodgingCostPerNight = Math.round(Math.min(perPerson * 0.22 / Math.max(1, days - 1), 600));
  const totalLodging = lodgingCostPerNight * Math.max(1, days - 1);
  const foodPerDay = Math.round(Math.min(perPerson * 0.25 / days, 380));
  const totalFood = foodPerDay * days;
  const localTransitTotal = Math.round(days * 90);
  const entryFeesTotal = Math.round(days * 50);
  const miscTotal = Math.round(days * 45);
  const calculatedCostPerPerson = trainRoundtripCost + totalLodging + totalFood + localTransitTotal + entryFeesTotal + miscTotal;
  const bufferCost = Math.round(calculatedCostPerPerson * 0.12);
  const finalCostPerPerson = calculatedCostPerPerson + bufferCost;

  const itineraryDays = [];
  for (let d = 1; d <= days; d++) {
    itineraryDays.push({
      dayNumber: d,
      theme: d === 1 ? `Arrival, Iconic Heritage & Local Bazaars` : d === days ? `Scenic Viewpoint, Souvenir Picks & Departure` : `Deep Exploration & Off-the-Beaten-Path Treasures`,
      geographicalArea: `${destination} - Zone ${d}`,
      activities: [
        {
          timeSlot: 'Morning' as const,
          placeName: `${destination} Prime Cultural Landmark & Heritage Walk`,
          description: `Early morning exploration of the main historical/natural landmark of ${destination} before crowds arrive. Beautiful golden light for photography.`,
          approxDuration: '2.5 hours',
          entryFeePerPerson: d === 1 ? 25 : 0,
          isFree: d !== 1,
          travelMethodFromPrevious: 'Walk / Shared Auto',
          transitCost: 20,
          budgetTip: 'Reach by 7:30 AM to beat both heat and ticket lines.'
        },
        {
          timeSlot: 'Afternoon' as const,
          placeName: `Authentic Local Thali Lunch & Regional Museum / Craft Center`,
          description: `Savor an unlimited traditional regional meal served on banana leaf or stainless thali. Visit local artisan cooperative.`,
          approxDuration: '2 hours',
          entryFeePerPerson: 15,
          isFree: false,
          travelMethodFromPrevious: 'Local bus / walk',
          transitCost: 15,
          budgetTip: 'Eat where local office workers and shopkeepers queue up for fresh, low-cost meals.'
        },
        {
          timeSlot: 'Evening' as const,
          placeName: `Scenic Sunset Point & Street Food Alley`,
          description: `Watch the sunset over panoramic hills, riverfront or coastline. Enjoy evening tea, regional street fritters and sweets.`,
          approxDuration: '2.5 hours',
          entryFeePerPerson: 0,
          isFree: true,
          travelMethodFromPrevious: 'Walk / Shared auto',
          transitCost: 25,
          budgetTip: 'Free public viewpoint; avoid paid commercial sunset terraces.'
        },
        {
          timeSlot: 'Night' as const,
          placeName: `Night Market Walk & Wholesome Dinner`,
          description: `Stroll through the lit market streets; pick up spices or handicrafts directly from artisan stalls. Wholesome dinner at local mess.`,
          approxDuration: '1.5 hours',
          entryFeePerPerson: 0,
          isFree: true,
          travelMethodFromPrevious: 'Walk',
          transitCost: 0
        }
      ],
      dayTotalEntryFees: d === 1 ? 40 : 15,
      dayTotalTransitCost: 60,
      walkingDistanceKm: 4.5
    });
  }

  return {
    id: `custom-${Date.now()}`,
    title: `${destination} Budget Explorer`,
    tagline: `Authentic ${days}-day practical itinerary maximizing scenic highlights, local food & minimal transit cost`,
    destination,
    startingLocation,
    durationDays: days,
    numTravelers: travelers,
    travelDates,
    budgetPerPerson: perPerson,
    totalBudget: perPerson * travelers,
    interests: interests.length > 0 ? interests : ['Nature', 'Historical Places', 'Local Food'],
    travelStyle,
    accommodationPreference,
    preferredTransportation,
    destinationSuitability: {
      verdict: finalCostPerPerson <= perPerson ? 'Fits Budget Comfortably' : 'Requires Smart Budgeting',
      reason: `${destination} is accessible via Indian Railways Sleeper class and state RTC buses. Local public transit and authentic eateries keep daily costs under ₹${foodPerDay + 100}/day.`,
      feasibilityStatus: finalCostPerPerson <= perPerson ? 'fits_budget' : 'tight_budget'
    },
    transportation: {
      cheapestRecommendation: `Indian Railways Sleeper Class (SL) or State RTC Ordinary/Semi-Deluxe Bus directly from ${startingLocation} to ${destination}. Overnight journeys are ideal to save hotel bills!`,
      localTransitAdvice: `Use shared autos (₹15-30/seat), local municipal buses, or walk geographically clustered attractions. Avoid hiring private full-day cabs.`,
      options: [
        {
          mode: 'Indian Railways (Sleeper Class)',
          operatorDetails: `Direct Express train between ${startingLocation} and ${destination}`,
          approxFarePerPerson: Math.round(trainRoundtripCost / 2),
          roundTripFarePerPerson: trainRoundtripCost,
          travelTime: '8h - 12h (Overnight)',
          pros: 'Cheapest safe mode, reserved sleeping berth, saves a hotel night each way.',
          cons: 'Must book 30-45 days ahead or take Tatkal.',
          bookingTips: 'Book on IRCTC app at 11:00 AM for Sleeper Tatkal if waitlisted.',
          isRecommended: true
        },
        {
          mode: 'State RTC Express Bus',
          operatorDetails: 'Government Roadways (Ordinary / Semi-Deluxe)',
          approxFarePerPerson: Math.round(trainRoundtripCost * 0.75),
          roundTripFarePerPerson: Math.round(trainRoundtripCost * 1.5),
          travelTime: '9h - 13h',
          pros: 'Frequent departures, easy walk-in boarding without long waiting lists.',
          cons: 'Can be bumpy on winding ghat/state roads.',
          bookingTips: 'Book through official state RTC website for seat selection.',
          isRecommended: false
        }
      ],
      localTransportOptions: [
        {
          mode: 'Shared Autos & E-Rickshaws',
          approxDailyCost: 60,
          description: 'Runs along all arterial routes connecting railway stations, bus stands, and key sights.',
          budgetTip: 'Confirm the per-seat shared fare before stepping into the vehicle.'
        },
        {
          mode: 'Walking Geographically Grouped Circuits',
          approxDailyCost: 0,
          description: 'Each day is planned in a single zone to keep transit strictly on foot.',
          budgetTip: 'Comfortable walking shoes save ₹200-400 daily in auto charges.'
        }
      ]
    },
    accommodation: {
      recommendedAreas: [
        {
          areaName: `${destination} Central Heritage Quarter / Station Outskirts`,
          safetyRating: '9.2/10 (Centrally located, well-patrolled, traveler friendly)',
          approxPricePerNight: lodgingCostPerNight,
          whyStayHere: 'Walking distance to local transport hubs, authentic affordable breakfast stalls, and well-lit roads.',
          typesAvailable: 'Backpacker Hostels (Zostel, goSTOPS, Hosteller), Family Homestays, and Budget Guesthouses'
        }
      ],
      types: [
        {
          category: 'Backpacker Hostel Bunk Bed',
          estimatedPerNightPerPerson: lodgingCostPerNight,
          safetyNotes: 'CCTV monitored, security lockers provided, 24/7 front desk and keycard access.',
          topPicksOrBrands: ['Hosteller', 'goSTOPS', 'Zostel', 'Local Backpacker Inns']
        },
        {
          category: 'Budget Homestay / Family Lodge',
          estimatedPerNightPerPerson: Math.round(lodgingCostPerNight * 1.3),
          safetyNotes: 'Local resident host, quiet residential streets, home-cooked food options.',
          topPicksOrBrands: ['Local verified homestays']
        }
      ]
    },
    itinerary: itineraryDays,
    foodPlan: {
      dailyBreakdown: {
        breakfast: { cost: Math.round(foodPerDay * 0.2), suggestions: 'Local tiffins (Idli-Vada / Poha / Poori-Sabzi / Parathas) with tea.' },
        lunch: { cost: Math.round(foodPerDay * 0.35), suggestions: 'Unlimited regional vegetarian thali with lentils, seasonal vegetables, flatbreads, and rice.' },
        eveningSnacks: { cost: Math.round(foodPerDay * 0.12), suggestions: 'Chai with local fritters (samosa, pakoda, or bajji).' },
        dinner: { cost: Math.round(foodPerDay * 0.33), suggestions: 'Simple dhaba dinner: dal fry, jeera rice, roti, or regional specialty curry.' },
        totalDailyCost: foodPerDay
      },
      mustTryDishes: [
        {
          name: 'Traditional Regional Thali',
          description: 'Balanced, wholesome meal cooked with fresh regional spices, seasonal greens, and accompaniments.',
          approxCost: Math.round(foodPerDay * 0.35),
          bestPlacesToTry: 'Local family messes and bhojanalayas near the main market'
        },
        {
          name: 'Iconic Regional Morning Tiffin',
          description: 'Freshly prepared breakfast served piping hot with chutneys and sambar or spiced yogurt.',
          approxCost: Math.round(foodPerDay * 0.2),
          bestPlacesToTry: 'Crowded morning stalls near the temple or bus stand'
        }
      ],
      budgetFoodHacks: [
        'Eat at restaurants with crowds of local families rather than empty tourist cafes.',
        'Refill RO purified water at your hostel to save ₹60/day on packaged plastic bottles.',
        'Enjoy local seasonal street food in the evening instead of ordering expensive starters at hotels.'
      ]
    },
    budgetBreakdown: {
      items: [
        { category: 'To-and-Fro Travel (Train Sleeper / State Bus)', costPerPerson: trainRoundtripCost, totalCost: trainRoundtripCost * travelers, notes: `Roundtrip ticket from ${startingLocation} to ${destination}`, isFlexible: false },
        { category: `Accommodation (${days - 1} Nights in Hostel/Lodge)`, costPerPerson: totalLodging, totalCost: totalLodging * travelers, notes: `Clean, rated bunk bed or twin room split`, isFlexible: true },
        { category: `Food & Dining (${days} Days @ ₹${foodPerDay}/day)`, costPerPerson: totalFood, totalCost: totalFood * travelers, notes: 'Breakfast, thali lunch, tea snacks & dinner', isFlexible: true },
        { category: 'Local Transportation (Shared Autos & Bus)', costPerPerson: localTransitTotal, totalCost: localTransitTotal * travelers, notes: 'Shared autos, public buses and walking circuits', isFlexible: true },
        { category: 'Monument Entry Tickets & Permits', costPerPerson: entryFeesTotal, totalCost: entryFeesTotal * travelers, notes: 'Official ASI/State monument QR-code tickets', isFlexible: false },
        { category: 'Miscellaneous & Sundries', costPerPerson: miscTotal, totalCost: miscTotal * travelers, notes: 'Shoe tokens, locker lock, mobile charging, water refills', isFlexible: true },
        { category: 'Emergency Buffer Cushion (12%)', costPerPerson: bufferCost, totalCost: bufferCost * travelers, notes: 'Safety reserve for unplanned auto ride or medical needs', isFlexible: true }
      ],
      totalTripCost: finalCostPerPerson * travelers,
      totalCostPerPerson: finalCostPerPerson,
      minimumBarebonesCost: Math.round(finalCostPerPerson * 0.78),
      comfortableCost: Math.round(finalCostPerPerson * 1.25),
      recommendedBuffer: bufferCost,
      withinUserBudget: finalCostPerPerson <= perPerson,
      savingsOrDeficit: perPerson - finalCostPerPerson
    },
    moneySavingTips: [
      {
        title: 'Overnight Journey Dual Benefit',
        description: `Boarding an overnight train or bus from ${startingLocation} lets you wake up fresh in ${destination} while eliminating 2 nights of hotel expenses.`,
        estimatedSavings: `₹${lodgingCostPerNight * 2} per person`
      },
      {
        title: 'Shared Transport Stands',
        description: 'Always look for the shared auto/tempo stands right outside major railway stations instead of private auto counters.',
        estimatedSavings: '₹300 - ₹500 per day'
      },
      {
        title: 'QR Code Ticket Booking at Monuments',
        description: 'Book your monument tickets using the official ASI QR codes at the gate on your smartphone; it gives a ₹5 - ₹25 discount over cash tickets.',
        estimatedSavings: '₹50 per person'
      }
    ],
    safetyAndPracticalInfo: {
      safetyTips: [
        'Keep national emergency helpline 112 and local police contact details saved offline.',
        'Solo/female travelers: Avoid deserted streets after 9:30 PM; use only recognized shared transit or verified rides.',
        'Carry a personal combination lock for hostel bunk lockers.',
        'Stay hydrated with clean RO filtered water or tender coconut water.'
      ],
      weatherAndBestTime: 'Check seasonal climate before heading out; winter (Oct - Mar) is universally pleasant across most of India.',
      advanceBookingsNeeded: [
        'IRCTC Train ticket or State RTC bus seat (opens 60-120 days ahead)',
        'Hostel bed during weekends or festival holidays'
      ],
      essentialPackingList: [
        { item: 'Comfortable walking shoes with good traction', category: 'Clothing', importance: 'High' },
        { item: '10,000 mAh Power bank', category: 'Tech', importance: 'High' },
        { item: 'Quick-dry microfiber towel', category: 'Toiletries', importance: 'High' },
        { item: 'Refillable stainless steel water bottle', category: 'Essentials', importance: 'High' },
        { item: 'Basic first-aid kit (Band-Aids, ORS, paracetamol)', category: 'Safety & Medical', importance: 'High' },
        { item: 'Small padlock for hostel lockers', category: 'Essentials', importance: 'High' }
      ],
      scamsAndTrapsToAvoid: [
        {
          scam: 'Auto drivers stating that your pre-booked hotel is closed or unsafe',
          prevention: 'Call the hotel directly on their published phone number; do not believe unsolicited driver claims.'
        },
        {
          scam: 'Unofficial touts selling "VIP entry passes" outside temples or heritage gates',
          prevention: 'Official entry tickets are sold only at designated government counters or via official ASI QR codes.'
        }
      ]
    },
    alternativePlans: {
      cheaperItineraryNotes: [
        'Travel strictly by Indian Railways Sleeper class instead of 3AC or private buses.',
        'Stay at local dharamsalas or ashram guesthouses (₹250-400/night).',
        'Eat at subsidized community bhojanalayas, bringing daily food costs to ₹200/day.'
      ],
      badWeatherBackupPlan: {
        rainyDayItinerary: [
          'Explore local indoor museums, art galleries, and covered historical sanctums.',
          'Visit traditional handicraft emporiums and spice markets under shaded awnings.',
          'Relax at a cozy local cafe with hot chai and regional treats.'
        ],
        indoorAttractions: ['Central Regional Museum', 'Heritage Craft Cooperative', 'Old Town Covered Bazaar'],
        rainSafetyTips: 'Keep a lightweight rain poncho in your daypack; watch out for slick stone stairs during rain.'
      },
      alternativeDestinations: [
        {
          name: 'Gokarna Coastal Trail',
          vibe: 'Secluded beaches, cliff trek, ancient temple, chill shacks',
          estimatedCostPerPerson: 4200,
          whyCheaper: 'Free cliff walks, cheap sleeper trains, and budget beach hostels.',
          idealDays: 3
        },
        {
          name: 'Rishikesh & Haridwar',
          vibe: 'River rafting on the Ganges, evening aartis & Beatles Ashram',
          estimatedCostPerPerson: 3800,
          whyCheaper: '₹185 Jan Shatabdi train fare from Delhi; free ghat ceremonies.',
          idealDays: 3
        },
        {
          name: 'Pondicherry & Auroville',
          vibe: 'French colonial White Town, car-free seaside promenade & bicycle culture',
          estimatedCostPerPerson: 3500,
          whyCheaper: '₹140 state bus from Chennai; ₹80/day bicycle rental.',
          idealDays: 3
        }
      ]
    }
  };
}

// API to generate complete travel plan
app.post('/api/plan-trip', async (req, res) => {
  try {
    const {
      startingLocation = '',
      destination = '',
      numTravelers = 1,
      durationDays = 3,
      travelDates = '',
      totalBudget = 0,
      budgetPerPerson = 0,
      preferredTransportation = 'Train',
      accommodationPreference = 'Hostel',
      interests = [],
      travelStyle = 'Low-budget but safe & comfortable'
    } = req.body;

    // If Gemini AI client is ready, let's call Gemini 3.8 Flash
    if (ai) {
      try {
        const prompt = `You are India's top budget travel planner. Create an authentic, realistic, deeply detailed, safe, and genuinely low-budget tourism trip in Indian Rupees (₹) for the following traveler details:
Starting Location: ${startingLocation || 'India'}
Destination: ${destination || 'Best suitable budget destination'}
Number of Travelers: ${numTravelers}
Trip Duration: ${durationDays} days
Travel Dates: ${travelDates || 'Flexible'}
Total Maximum Budget: ₹${totalBudget || (budgetPerPerson ? budgetPerPerson * numTravelers : 8000)}
Budget Per Person: ₹${budgetPerPerson || (totalBudget ? Math.round(totalBudget / numTravelers) : 4000)}
Preferred Travel Style: ${travelStyle}
Main Interests: ${interests.join(', ') || 'Nature, History, Local Food'}
Preferred Transportation: ${preferredTransportation}
Accommodation Preference: ${accommodationPreference}

Strict Requirements:
1. Genuinely practical and low-budget for India. Use real current Indian prices:
   - Indian Railways Sleeper (SL) / 2S / 3AC fares.
   - State RTC Buses (KSRTC, UPSRTC, HRTC, MSRTC, SETC, etc.).
   - Backpacker hostels (Zostel, goSTOPS, Hosteller, local guesthouses, ashrams/dharamsalas).
   - Local shared autos (₹15-30/seat), city buses, or walking circuits.
   - Real authentic local food prices (South Indian tiffin ₹50-80, thali meal ₹90-150, tea ₹10-15, dinner dhaba ₹110-180).
   - Real ASI monument entrance tickets (₹25-50 for Indian citizens, not foreign tourist rates).
2. Geographically cluster each day's itinerary so the traveler walks or takes minimal shared transit without costly backtracking.
3. Distinguish free vs paid sights (many temples, beaches, ghats, and viewpoints are ₹0 free).
4. Provide a detailed itemized budget breakdown with to-and-fro travel, accommodation, food, local transit, entry fees, miscellaneous, and a 10-15% emergency buffer.
5. Provide money-saving insider hacks, safety tips (solo/women traveler safety, night precautions), scams/tourist traps to avoid, packing checklist, weather advice, a "cheaper version" note, bad weather backup plan, and 3 alternative destinations.

Respond with ONLY valid JSON adhering strictly to this TypeScript schema:
{
  "id": "string",
  "title": "string",
  "tagline": "string",
  "destination": "string",
  "startingLocation": "string",
  "durationDays": number,
  "numTravelers": number,
  "travelDates": "string",
  "budgetPerPerson": number,
  "totalBudget": number,
  "interests": ["string"],
  "travelStyle": "string",
  "accommodationPreference": "string",
  "preferredTransportation": "string",
  "destinationSuitability": {
    "verdict": "string",
    "reason": "string",
    "feasibilityStatus": "fits_budget" | "tight_budget" | "exceeds_budget"
  },
  "transportation": {
    "cheapestRecommendation": "string",
    "localTransitAdvice": "string",
    "options": [
      {
        "mode": "string",
        "operatorDetails": "string",
        "approxFarePerPerson": number,
        "roundTripFarePerPerson": number,
        "travelTime": "string",
        "pros": "string",
        "cons": "string",
        "bookingTips": "string",
        "isRecommended": boolean
      }
    ],
    "localTransportOptions": [
      {
        "mode": "string",
        "approxDailyCost": number,
        "description": "string",
        "budgetTip": "string"
      }
    ]
  },
  "accommodation": {
    "recommendedAreas": [
      {
        "areaName": "string",
        "safetyRating": "string",
        "approxPricePerNight": number,
        "whyStayHere": "string",
        "typesAvailable": "string"
      }
    ],
    "types": [
      {
        "category": "string",
        "estimatedPerNightPerPerson": number,
        "safetyNotes": "string",
        "topPicksOrBrands": ["string"]
      }
    ]
  },
  "itinerary": [
    {
      "dayNumber": number,
      "theme": "string",
      "geographicalArea": "string",
      "activities": [
        {
          "timeSlot": "Morning" | "Afternoon" | "Evening" | "Night",
          "placeName": "string",
          "description": "string",
          "approxDuration": "string",
          "entryFeePerPerson": number,
          "isFree": boolean,
          "travelMethodFromPrevious": "string",
          "transitCost": number,
          "budgetTip": "string"
        }
      ],
      "dayTotalEntryFees": number,
      "dayTotalTransitCost": number,
      "walkingDistanceKm": number
    }
  ],
  "foodPlan": {
    "dailyBreakdown": {
      "breakfast": { "cost": number, "suggestions": "string" },
      "lunch": { "cost": number, "suggestions": "string" },
      "eveningSnacks": { "cost": number, "suggestions": "string" },
      "dinner": { "cost": number, "suggestions": "string" },
      "totalDailyCost": number
    },
    "mustTryDishes": [
      {
        "name": "string",
        "description": "string",
        "approxCost": number,
        "bestPlacesToTry": "string"
      }
    ],
    "budgetFoodHacks": ["string"]
  },
  "budgetBreakdown": {
    "items": [
      {
        "category": "string",
        "costPerPerson": number,
        "totalCost": number,
        "notes": "string",
        "isFlexible": boolean
      }
    ],
    "totalTripCost": number,
    "totalCostPerPerson": number,
    "minimumBarebonesCost": number,
    "comfortableCost": number,
    "recommendedBuffer": number,
    "withinUserBudget": boolean,
    "savingsOrDeficit": number
  },
  "moneySavingTips": [
    {
      "title": "string",
      "description": "string",
      "estimatedSavings": "string"
    }
  ],
  "safetyAndPracticalInfo": {
    "safetyTips": ["string"],
    "weatherAndBestTime": "string",
    "advanceBookingsNeeded": ["string"],
    "essentialPackingList": [
      { "item": "string", "category": "Essentials" | "Clothing" | "Tech" | "Toiletries" | "Safety & Medical", "importance": "High" | "Medium" }
    ],
    "scamsAndTrapsToAvoid": [
      { "scam": "string", "prevention": "string" }
    ]
  },
  "alternativePlans": {
    "cheaperItineraryNotes": ["string"],
    "badWeatherBackupPlan": {
      "rainyDayItinerary": ["string"],
      "indoorAttractions": ["string"],
      "rainSafetyTips": "string"
    },
    "alternativeDestinations": [
      {
        "name": "string",
        "vibe": "string",
        "estimatedCostPerPerson": number,
        "whyCheaper": "string",
        "idealDays": number
      }
    ]
  }
}`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
            temperature: 0.3
          }
        });

        if (response.text) {
          const parsed = JSON.parse(response.text);
          return res.json({ success: true, plan: parsed, source: 'gemini' });
        }
      } catch (geminiErr) {
        console.warn('Gemini API call failed or timed out, using fallback generator:', geminiErr);
      }
    }

    // Fallback deterministic calculation
    const fallbackPlan = generateFallbackTrip(req.body);
    return res.json({ success: true, plan: fallbackPlan, source: 'fallback' });
  } catch (error: any) {
    console.error('Error generating trip plan:', error);
    res.status(500).json({ error: error.message || 'Failed to generate trip plan' });
  }
});

// API to suggest destinations based on starting location and preferences
app.post('/api/suggest-destinations', async (req, res) => {
  try {
    const { startingLocation = '', budget = 5000, durationDays = 3, interests = [] } = req.body;

    // Filter or adjust pre-built suggestions
    let suggestions = [...DESTINATION_SUGGESTIONS];

    // Mark feasibility dynamically based on budget
    suggestions = suggestions.map((s) => {
      let feasibility: 'Fits Budget' | 'Tight Budget' | 'Stretch Budget' = 'Fits Budget';
      if (budget < s.estimatedBudgetPerPerson * 0.85) {
        feasibility = 'Stretch Budget';
      } else if (budget < s.estimatedBudgetPerPerson * 1.1) {
        feasibility = 'Tight Budget';
      }
      return {
        ...s,
        feasibility
      };
    });

    res.json({ success: true, suggestions });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', hasGeminiKey: Boolean(apiKey && apiKey !== 'MY_GEMINI_API_KEY') });
});

// Dev server vs Production setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`YatriBudget server running on port ${PORT}`);
  });
}

startServer();
