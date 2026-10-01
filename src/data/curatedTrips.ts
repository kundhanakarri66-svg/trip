import { TripPlan, DestinationSuggestion } from '../types/trip';

export const POPULAR_STARTING_CITIES = [
  'Bengaluru (Bangalore)',
  'Delhi NCR',
  'Mumbai',
  'Pune',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Ahmedabad',
  'Jaipur',
  'Chandigarh',
  'Kochi'
];

export const INTEREST_OPTIONS = [
  { id: 'beaches', label: 'Beaches', icon: 'Waves' },
  { id: 'mountains', label: 'Mountains & Treks', icon: 'Mountain' },
  { id: 'nature', label: 'Nature & Waterfalls', icon: 'Trees' },
  { id: 'temples', label: 'Temples & Spiritual', icon: 'Landmark' },
  { id: 'historical', label: 'Historical & Forts', icon: 'Castle' },
  { id: 'adventure', label: 'Adventure Sports', icon: 'Compass' },
  { id: 'food', label: 'Local Food & Street Bazaars', icon: 'Utensils' },
  { id: 'shopping', label: 'Shopping & Handicrafts', icon: 'ShoppingBag' },
  { id: 'photography', label: 'Photography & Sunsets', icon: 'Camera' }
];

export const CURATED_TRIPS: TripPlan[] = [
  {
    id: 'bengaluru-gokarna-3d',
    title: 'Gokarna Coastal Trail & Beach Trek',
    tagline: 'Scenic 5-beach cliff trek, secluded coves, ancient temple vibes & seaside shacks',
    destination: 'Gokarna, Karnataka',
    startingLocation: 'Bengaluru (Bangalore)',
    durationDays: 3,
    numTravelers: 2,
    travelDates: 'Flexible (October to March best)',
    budgetPerPerson: 4200,
    totalBudget: 8400,
    interests: ['Beaches', 'Nature & Waterfalls', 'Temples & Spiritual', 'Photography'],
    travelStyle: 'Low-budget but safe & comfortable',
    accommodationPreference: 'Hostel / Budget Homestay',
    preferredTransportation: 'Overnight Sleeper Train / KSRTC Bus',
    destinationSuitability: {
      verdict: 'Perfect Budget Match',
      reason: 'Gokarna is 40-50% cheaper than North Goa, highly safe for backpackers and pairs walkable cliff treks with free beach access and ₹120 South Kanara fish/veg thalis.',
      feasibilityStatus: 'fits_budget'
    },
    transportation: {
      cheapestRecommendation: 'KSRTC Non-AC Sleeper Bus or Panchaganga Express (Train #16595) to Gokarna Road Station. Taking the overnight journey saves 2 hotel night charges!',
      localTransitAdvice: 'Walk the beach trails for ₹0. For town-to-beach hops, use shared autos from Gokarna bus stand (₹20-30 per seat) instead of hiring private autos.',
      options: [
        {
          mode: 'Train - Panchaganga SF Express (SL Class)',
          operatorDetails: 'Train #16595 / #16596 (Yesvantpur to Gokarna Road)',
          approxFarePerPerson: 425,
          roundTripFarePerPerson: 850,
          travelTime: '12h 15m (Overnight 18:50 - 07:15)',
          pros: 'Cheapest comfortable way, clean berths, saves night stay, peaceful coastal morning view.',
          cons: 'Gokarna Road railway station is 9 km from town (shared auto is ₹30-40).',
          bookingTips: 'Book on IRCTC 45-60 days ahead or grab Tatkal at 11 AM one day prior.',
          isRecommended: true
        },
        {
          mode: 'State RTC Bus (KSRTC Non-AC Sleeper / Rajahamsa)',
          operatorDetails: 'KSRTC Direct overnight from Majestic / Shantinagar',
          approxFarePerPerson: 750,
          roundTripFarePerPerson: 1500,
          travelTime: '10h 30m',
          pros: 'Drops directly at Gokarna Bus Stand in the center of town. Reliable timetable.',
          cons: 'Slightly bumpy through Western Ghats hairpins.',
          bookingTips: 'Book directly on ksrtc.in 7 days before to get 5% roundtrip discount.',
          isRecommended: false
        },
        {
          mode: 'Train (3AC Class)',
          operatorDetails: 'Panchaganga Express 3rd AC',
          approxFarePerPerson: 1140,
          roundTripFarePerPerson: 2280,
          travelTime: '12h 15m',
          pros: 'Air conditioned, provided bed linen, quieter night sleep.',
          cons: 'Doubles transport budget compared to Sleeper class.',
          bookingTips: 'Tatkal quota opens at 10:00 AM.',
          isRecommended: false
        }
      ],
      localTransportOptions: [
        {
          mode: 'Beach Cliff Trekking (Foot)',
          approxDailyCost: 0,
          description: 'The iconic 5-beach trail connects Kudle, Om, Half Moon, and Paradise beaches on foot.',
          budgetTip: 'Start early morning by 7:00 AM with 2 liters of water to avoid midday heat and auto fares.'
        },
        {
          mode: 'Shared Auto & Local KSRTC Mini-Bus',
          approxDailyCost: 60,
          description: 'Shared auto from Gokarna Bus Stand to Kudle hilltop or Om Beach drop point.',
          budgetTip: 'Never hire a private auto alone at the main stand; wait 3 minutes for co-travelers to split fare.'
        }
      ]
    },
    accommodation: {
      recommendedAreas: [
        {
          areaName: 'Kudle Beach Hilltop & Main Town Outskirts',
          safetyRating: '9.4/10 (Well lit, traveler hub, tourist police presence)',
          approxPricePerNight: 550,
          whyStayHere: 'Walking distance to both Kudle beach and local town eateries. Great backpacker community.',
          typesAvailable: 'Hostel dorms (Zostel, HosteLaVie, Tripper) & budget shacks'
        },
        {
          areaName: 'Car Street & Main Temple Town',
          safetyRating: '9.0/10 (Family safe, vibrant market, 500m to beach)',
          approxPricePerNight: 450,
          whyStayHere: 'Traditional Brahmin homestays and budget lodges with ₹60 unlimited tiffin/meals right outside.',
          typesAvailable: 'Homestays, Dharamsalas & guesthouses'
        }
      ],
      types: [
        {
          category: 'Backpacker Hostel Dorm (Bunk bed)',
          estimatedPerNightPerPerson: 450,
          safetyNotes: 'Includes security lockers (bring your own lock), CCTV, keycard access, and female-only dorm options.',
          topPicksOrBrands: ['Zostel Gokarna', 'Tripper Hostel', 'goSTOPS Gokarna']
        },
        {
          category: 'Basic Beach Homestay / Cottage',
          estimatedPerNightPerPerson: 650,
          safetyNotes: 'Clean, verified family homestays behind Middle Beach and Kudle.',
          topPicksOrBrands: ['Shree Sai Guesthouse', 'Namaste Yoga Farm budget rooms']
        }
      ]
    },
    itinerary: [
      {
        dayNumber: 1,
        theme: 'Arrival, Ancient Temples & Kudle Sunset',
        geographicalArea: 'Town Center & Kudle Beach',
        activities: [
          {
            timeSlot: 'Morning',
            placeName: 'Mahabaleshwar Temple & Kotiteertha Tank',
            description: 'Visit the 4th-century classical Dravidian style Shiva temple housing the sacred Atmalinga. Take a reflective stroll around the holy Kotiteertha holy tank.',
            approxDuration: '2 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk from Town Bus Stand (600m)',
            transitCost: 0,
            budgetTip: 'Dress respectfully (dhoti/pants; no shorts). Entry is completely free; beware of unauthorized priests asking for ₹500 pooja fees.'
          },
          {
            timeSlot: 'Afternoon',
            placeName: 'Traditional South Kanara Thali Lunch & Check-in',
            description: 'Relish an authentic piping hot banana-leaf meal with rasam, sambar, buttermilk, and local red rice.',
            approxDuration: '1.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk 5 mins to Pai Hotel or Mahalakshmi Mess',
            transitCost: 0,
            budgetTip: 'Eat at Pai Restaurant near Car Street for ₹90 unlimited meal.'
          },
          {
            timeSlot: 'Evening',
            placeName: 'Kudle Beach Sunset & Cliff Walk',
            description: 'Walk up the easy hill trail to Kudle Beach. Dip your feet in calm waves and watch one of the best Arabian Sea golden hour sunsets.',
            approxDuration: '3 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk 1.5 km over the scenic paved hill path',
            transitCost: 0,
            budgetTip: 'Carry your own snacks and tender coconut (₹40) instead of paying ₹250 for cafe milkshakes.'
          },
          {
            timeSlot: 'Night',
            placeName: 'Stargazing at Kudle & Budget Dinner',
            description: 'Quiet night walk along the shore listening to the waves; delicious woodfired thin crust pizza or local dal khichdi at beachside shacks.',
            approxDuration: '2 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk on beach',
            transitCost: 0
          }
        ],
        dayTotalEntryFees: 0,
        dayTotalTransitCost: 30,
        walkingDistanceKm: 4.5
      },
      {
        dayNumber: 2,
        theme: 'The Legendary 5-Beach Cliff Trek',
        geographicalArea: 'Om Beach to Paradise Beach Trail',
        activities: [
          {
            timeSlot: 'Morning',
            placeName: 'Om Beach Sunrise & Rock Scrambling',
            description: 'Experience the naturally Om-shaped coastline. Explore the rocky outcrops and watch local fishermen launching traditional boats.',
            approxDuration: '2.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk 20 mins from Kudle cliff to Om Beach',
            transitCost: 0,
            budgetTip: 'Refill your water bottles before starting the trail.'
          },
          {
            timeSlot: 'Afternoon',
            placeName: 'Half Moon Beach & Paradise Beach Trek',
            description: 'Trek through panoramic coastal scrub trails over rocky cliffs. Reach secluded Half Moon Beach and boulder-strewn Paradise Beach accessible only by boat or foot.',
            approxDuration: '3.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Coastal trail hike (40 mins)',
            transitCost: 0,
            budgetTip: 'Do not pay ₹300-500 for tourist ferry boats unless you are unable to walk. The hiking trail is free, marked, and scenic.'
          },
          {
            timeSlot: 'Evening',
            placeName: 'Sunset Point at Belekan Cliff & Return',
            description: 'Stunning cliffside view where Arabian waves crash against black granite. Walk up to Belekan village and catch a shared auto back.',
            approxDuration: '2 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Hike to Belekan road head',
            transitCost: 40,
            budgetTip: 'Take shared auto from Belekan to town for ₹30-40 per person.'
          },
          {
            timeSlot: 'Night',
            placeName: 'Car Street Night Market & Local Gadbad Ice Cream',
            description: 'Browse local seashell crafts, incense, and herbal oils. Treat yourself to famous Mangalorean Gadbad ice cream or fresh falooda.',
            approxDuration: '1.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Shared auto drop in town',
            transitCost: 0
          }
        ],
        dayTotalEntryFees: 0,
        dayTotalTransitCost: 40,
        walkingDistanceKm: 7.2
      },
      {
        dayNumber: 3,
        theme: 'Mirjan Fort Heritage or Vibhooti Falls & Departure',
        geographicalArea: 'Mirjan / Western Ghats fringe',
        activities: [
          {
            timeSlot: 'Morning',
            placeName: 'Mirjan Fort (16th Century Laterite Citadel)',
            description: 'Explore the moss-covered, historic laterite ramparts, secret passages, and watchtowers of Queen Chennabhairadevi (the Pepper Queen).',
            approxDuration: '2.5 hours',
            entryFeePerPerson: 25,
            isFree: false,
            travelMethodFromPrevious: 'Local KSRTC bus from Gokarna to Mirjan cross (₹22) + 10 min walk',
            transitCost: 22,
            budgetTip: 'ASI ticket is only ₹25 on online QR code (₹50 if cash). Local government bus costs only ₹22 versus ₹800 taxi.'
          },
          {
            timeSlot: 'Afternoon',
            placeName: 'Traditional Coastal Lunch & Souvenir Pickups',
            description: 'Savor local Neer Dosa with spicy tomato chutney and filter coffee. Pick up famous Sirsi cashews and spices at wholesale cooperative shops.',
            approxDuration: '2 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Return bus to Gokarna town',
            transitCost: 22,
            budgetTip: 'Buy spices from Sahakari Bhandar (Government cooperative) on Car Street at 40% discount vs beach shops.'
          },
          {
            timeSlot: 'Evening',
            placeName: 'Middle Beach Sunset Stroll & Train Boarding',
            description: 'Dip toes in the water at Main Beach, freshen up at hostel, collect luggage, and head to Gokarna Road Station for the overnight journey back to Bengaluru.',
            approxDuration: '2.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Shared auto to Gokarna Road Railway Station',
            transitCost: 40,
            budgetTip: 'Pack dinner (egg biryani or parotta kurma) from town for ₹120 instead of purchasing pricey train food.'
          }
        ],
        dayTotalEntryFees: 25,
        dayTotalTransitCost: 84,
        walkingDistanceKm: 3.8
      }
    ],
    foodPlan: {
      dailyBreakdown: {
        breakfast: { cost: 70, suggestions: 'Tatte Idli, Masala Dosa, or Mangalore Buns with piping hot filter coffee at Pai Hotel / Dattaprasad.' },
        lunch: { cost: 110, suggestions: 'Unlimited Kannada vegetarian / fish curry thali with red boiled rice, sambar, rasam, and sol kadhi.' },
        eveningSnacks: { cost: 40, suggestions: 'Mirchi Bajji (chili fritters) with sweet chai at beach stall or tender coconut.' },
        dinner: { cost: 130, suggestions: 'Wood-fired pizza slice, veg fried rice, or Neer Dosa with spicy veg korma at local shacks.' },
        totalDailyCost: 350
      },
      mustTryDishes: [
        {
          name: 'Mangalore Buns (Sweet Banana Poori)',
          description: 'Fluffy, mildly sweet fermented banana bread deep fried to golden perfection, served with spicy coconut chutney.',
          approxCost: 40,
          bestPlacesToTry: 'Shri Krishna Bhavan or Prema Restaurant near Car Street'
        },
        {
          name: 'South Kanara Seafood / Veg Thali',
          description: 'Authentic coastal lunch on banana leaf with fresh fish fry or spiced vegetable curries and soothing sol kadhi.',
          approxCost: 120,
          bestPlacesToTry: 'Pai Restaurant or Mahalaxmi Mantapa Mess'
        },
        {
          name: 'Neer Dosa with Gassi',
          description: 'Delicate, paper-thin rice crepes that melt in your mouth, paired with rich coconut gravy.',
          approxCost: 80,
          bestPlacesToTry: 'Prema Restaurant'
        }
      ],
      budgetFoodHacks: [
        'Eat breakfast and lunch on Car Street where locals eat; beach shacks charge 2.5x more for the same dal and roti.',
        'Carry a refillable water bottle: hostels offer RO filtered water for ₹5 or free, saving ₹60/day on plastic bottles.',
        'Avoid alcohol on beach shacks where beer costs ₹220+; government MRP outlets in town sell at statutory retail rate.'
      ]
    },
    budgetBreakdown: {
      items: [
        { category: 'To-and-Fro Train (Sleeper Class)', costPerPerson: 850, totalCost: 1700, notes: 'Panchaganga Express Sleeper class roundtrip tickets', isFlexible: false },
        { category: 'Accommodation (2 Nights in Backpacker Dorm)', costPerPerson: 900, totalCost: 1800, notes: '₹450/night bunk bed in clean rated hostel (Zostel/Tripper)', isFlexible: true },
        { category: 'Food & Drinks (3 Days @ ₹350/day)', costPerPerson: 1050, totalCost: 2100, notes: 'Authentic local tiffins, thalis, beach snacks, tea & water', isFlexible: true },
        { category: 'Local Transportation (Shared Autos & Buses)', costPerPerson: 220, totalCost: 440, notes: 'Station transfers, shared autos, and KSRTC bus to Mirjan Fort', isFlexible: true },
        { category: 'Entry Fees & Monument Tickets', costPerPerson: 25, totalCost: 50, notes: 'Mirjan Fort entry (Beaches and temples are free)', isFlexible: false },
        { category: 'Miscellaneous & Temple Coconut', costPerPerson: 200, totalCost: 400, notes: 'Shoe keeping, tender coconut, laundry soap, locker lock', isFlexible: true },
        { category: 'Emergency Buffer Cushion (12%)', costPerPerson: 400, totalCost: 800, notes: 'Safety reserve for unplanned auto fare or medical needs', isFlexible: true }
      ],
      totalTripCost: 7290,
      totalCostPerPerson: 3645,
      minimumBarebonesCost: 2950,
      comfortableCost: 4600,
      recommendedBuffer: 600,
      withinUserBudget: true,
      savingsOrDeficit: 555
    },
    moneySavingTips: [
      {
        title: 'Overnight Sleeper Train Hack',
        description: 'Take the overnight Panchaganga train leaving at 7 PM. You sleep on the train both directions, effectively getting a 3-day holiday while paying only for 2 nights accommodation.',
        estimatedSavings: '₹1,000 per person'
      },
      {
        title: 'Hike the 5-Beach Trail Instead of Boat Taxis',
        description: 'Motorboat drivers at Om Beach demand ₹350 to ₹600 per head to take you to Paradise Beach. The cliff walking trail is completely free, safe during daylight, and offers world-class panoramic ocean viewpoints.',
        estimatedSavings: '₹500 per person'
      },
      {
        title: 'Town Food vs Beach Shack Price Divide',
        description: 'Car Street eateries (Pai Hotel, Dattaprasad) serve hearty ₹80-100 meals. The exact same meal at Kudle or Om beach shacks costs ₹250-320 due to tourist markups.',
        estimatedSavings: '₹450 over 3 days'
      },
      {
        title: 'ASI Monument Online Booking',
        description: 'Book the Mirjan Fort ticket using the QR code at the gate on your smartphone for ₹25 instead of ₹50 cash counter rate.',
        estimatedSavings: '₹25 per person'
      }
    ],
    safetyAndPracticalInfo: {
      safetyTips: [
        'Do not swim at Om Beach or Kudle after sunset or when red flags are raised; Arabian Sea riptides can be treacherous near rocks.',
        'Solo female travelers: Stick to Kudle and Town beaches after dark. Paradise Beach is secluded with poor cell network, so return to Kudle before twilight (6:30 PM).',
        'Carry a small ₹30 padlock for hostel dorm lockers to safeguard your laptop and documents.',
        'Keep emergency helpline 112 and Gokarna Police Station (+91 8386 256333) saved offline.'
      ],
      weatherAndBestTime: 'October to March offers pleasant sunny days (28°C - 32°C) and cool coastal breezes (20°C at night). Avoid monsoon (June-August) for trekking as rocks become dangerously slippery.',
      advanceBookingsNeeded: [
        'IRCTC Sleeper train ticket (opens 60 days ahead; very high demand on Friday nights)',
        'Hostel dorm bed (book at least 10-14 days before, especially during weekend trips)'
      ],
      essentialPackingList: [
        { item: 'Sturdy trekking sandals / sneakers with grip', category: 'Clothing', importance: 'High' },
        { item: 'Lightweight microfiber quick-dry towel', category: 'Toiletries', importance: 'High' },
        { item: '10,000+ mAh Power bank (trails have no charging)', category: 'Tech', importance: 'High' },
        { item: 'Waterproof pouch / dry bag for mobile & wallet', category: 'Essentials', importance: 'High' },
        { item: 'High SPF Sunscreen & wide-brim hat', category: 'Essentials', importance: 'Medium' },
        { item: 'Basic first aid: Band-Aids, ORS hydration packs, D-Cold', category: 'Safety & Medical', importance: 'High' },
        { item: 'Small numeric padlock for hostel bunk locker', category: 'Essentials', importance: 'High' }
      ],
      scamsAndTrapsToAvoid: [
        {
          scam: 'Auto drivers at Gokarna Road Station claiming "no buses or shared autos running"',
          prevention: 'Walk 100 meters out of the station gate to find shared tempo autos charging ₹30-40 per person, or check KSRTC station connection bus.'
        },
        {
          scam: 'Priests demanding ₹500 - ₹1,000 for "special darshan" or "flower basket" at Mahabaleshwar',
          prevention: 'General queue is free. Buy simple ₹10-20 flower basket outside if you wish; decline unsolicited guides firmly.'
        },
        {
          scam: 'Boat operators claiming the trail between Om and Paradise is closed or dangerous',
          prevention: 'The trail is open year-round outside torrential monsoon storms. Ask fellow hostel backpackers who walked it that morning.'
        }
      ]
    },
    alternativePlans: {
      cheaperItineraryNotes: [
        'Camp or stay at Car Street basic guesthouses (₹300/night instead of ₹450 hostel dorm).',
        'Switch strictly to non-AC KSRTC rural bus for Mirjan and station transit, keeping local transport under ₹120 total.',
        'Stick entirely to vegetarian South Indian mess meals, reducing daily food expenditure to ₹240/day.'
      ],
      badWeatherBackupPlan: {
        rainyDayItinerary: [
          'Visit Kotiteertha and indoor corridors of Mahabaleshwar and Tamra Gauri temples.',
          'Explore ancient library and cultural bookstores on Car Street with hot chai.',
          'Chilled afternoon reading and board games in hostel common area with sea view.',
          'Visit Kumta heritage town by train (15 mins, ₹15 ticket) for authentic sandalwood and horn carving workshops.'
        ],
        indoorAttractions: ['Mahabaleshwar Temple sanctum', 'Kumta Handicraft Artisans Center', 'Car Street Ayurvedic cafes'],
        rainSafetyTips: 'Never attempt the beach cliff trails in heavy downpours as laterite clay turns into slick mud. Stay off slippery rocks near the sea.'
      },
      alternativeDestinations: [
        {
          name: 'Udupi & Malpe Beach',
          vibe: 'Pristine coastal temples, St. Mary Island basalt columns, unmatched ₹60 Mitra Samaj tiffin',
          estimatedCostPerPerson: 3400,
          whyCheaper: 'Direct express trains every hour from Bangalore with Sleeper fare only ₹360; very cheap lodging near Sri Krishna Math.',
          idealDays: 3
        },
        {
          name: 'Varkala, Kerala',
          vibe: 'Dramatic red laterite cliffs, Arabian Sea surfing, bohemian cafes & mineral beach springs',
          estimatedCostPerPerson: 4600,
          whyCheaper: 'Direct overnight Kochuveli Express trains; affordable cliffside hostels with dorms under ₹450.',
          idealDays: 3
        },
        {
          name: 'Pondicherry & Auroville',
          vibe: 'French colonial architecture, Promenade sea walk, cycling routes, budget ashram stays',
          estimatedCostPerPerson: 3500,
          whyCheaper: 'Cheaper KSRTC bus fare from Bengaluru (₹350-500) and affordable Sri Aurobindo Ashram guesthouses (₹400/night).',
          idealDays: 3
        }
      ]
    }
  },
  {
    id: 'delhi-rishikesh-3d',
    title: 'Rishikesh & Haridwar Spiritual Adventure',
    tagline: 'Ganga ghat aarti, iconic suspension bridges, Beatles Ashram & white-water river rafting',
    destination: 'Rishikesh & Haridwar, Uttarakhand',
    startingLocation: 'Delhi NCR',
    durationDays: 3,
    numTravelers: 2,
    travelDates: 'Flexible (September to April best)',
    budgetPerPerson: 3800,
    totalBudget: 7600,
    interests: ['Adventure Sports', 'Temples & Spiritual', 'Nature & Waterfalls', 'Photography'],
    travelStyle: 'Low-budget but safe & comfortable',
    accommodationPreference: 'Backpacker Hostel / Ashram Guesthouse',
    preferredTransportation: 'Jan Shatabdi / Express Train or UTC Bus',
    destinationSuitability: {
      verdict: 'Outstanding Budget Value',
      reason: 'Under ₹4,000 gives you comfortable train transit, hostel stay in scenic Tapovan, Ganga river rafting, and world-famous free ghat evening aartis.',
      feasibilityStatus: 'fits_budget'
    },
    transportation: {
      cheapestRecommendation: 'Dehradun Shatabdi / Jan Shatabdi Express or UTC (Uttarakhand Roadways) bus from ISBT Kashmiri Gate directly to Haridwar/Rishikesh.',
      localTransitAdvice: 'Use shared "Vikram" (tempo autos) running between Haridwar, Rishikesh bus stand, and Tapovan for ₹20-30 per seat. Rent a bicycle in Tapovan or walk.',
      options: [
        {
          mode: 'Train - Dehradun Jan Shatabdi (2S Class)',
          operatorDetails: 'Train #12055 (New Delhi to Haridwar Junction)',
          approxFarePerPerson: 185,
          roundTripFarePerPerson: 370,
          travelTime: '4h 30m (Morning 06:45 - 11:15)',
          pros: 'Superfast, punctual, incredibly cheap (₹185 in 2S), panoramic Shivalik views.',
          cons: 'Stops at Haridwar; need a 45-min shared Vikram/bus to Rishikesh (₹40).',
          bookingTips: 'Book 2S/CC on IRCTC 20-30 days before; 2S seats fill fast.',
          isRecommended: true
        },
        {
          mode: 'Train - Yoga Express (Sleeper Class)',
          operatorDetails: 'Train #19031 direct to Yog Nagari Rishikesh (YNRK)',
          approxFarePerPerson: 220,
          roundTripFarePerPerson: 440,
          travelTime: '6h 15m',
          pros: 'Direct station in Rishikesh, no transfer needed in Haridwar.',
          cons: 'Runs at odd late-night hours.',
          bookingTips: 'Great if you want to travel overnight.',
          isRecommended: false
        },
        {
          mode: 'UTC State Bus (Ordinary / Janrath AC)',
          operatorDetails: 'Uttarakhand Transport from Kashmiri Gate ISBT',
          approxFarePerPerson: 360,
          roundTripFarePerPerson: 720,
          travelTime: '5h 30m',
          pros: 'Buses leave every 30 minutes 24x7; zero advance reservation anxiety.',
          cons: 'Highway toll & traffic delays near Meerut expressway during peak holidays.',
          bookingTips: 'Take UTC ordinary bus at ISBT counter for lowest fare.',
          isRecommended: false
        }
      ],
      localTransportOptions: [
        {
          mode: 'Shared Vikram / Electric Rickshaws',
          approxDailyCost: 60,
          description: 'Runs fixed routes connecting Haridwar, Rishikesh market, Ram Jhula, and Tapovan.',
          budgetTip: 'Hop on from main road stands and pay exact ₹15-30 fare like locals.'
        },
        {
          mode: 'Walking Across Suspension Bridges',
          approxDailyCost: 0,
          description: 'Crossing Ram Jhula and Janki Jhula on foot offers stunning Ganga vistas with zero expense.',
          budgetTip: 'Keep food items hidden inside backpacks to prevent playful langurs from snatching.'
        }
      ]
    },
    accommodation: {
      recommendedAreas: [
        {
          areaName: 'Tapovan (Upper Rishikesh)',
          safetyRating: '9.6/10 (Backpacker hub, vibrant cafes, excellent female solo safety)',
          approxPricePerNight: 450,
          whyStayHere: 'Walking distance to Laxman Jhula pedestrian area, yoga centers, organic bakeries, and rafting offices.',
          typesAvailable: 'Hostel dorms (Zostel, goSTOPS, Hosteller, Bunk Stay, Madpackers)'
        },
        {
          areaName: 'Swarg Ashram & Ram Jhula East Bank',
          safetyRating: '9.2/10 (Peaceful, spiritual, temple bells, strict vegetarian)',
          approxPricePerNight: 400,
          whyStayHere: 'Direct access to Parmarth Niketan Ganga Aarti and morning yoga sessions.',
          typesAvailable: 'Ashram rooms & traditional budget dharamsalas'
        }
      ],
      types: [
        {
          category: 'Backpacker Hostel Bunk Bed (Tapovan)',
          estimatedPerNightPerPerson: 420,
          safetyNotes: 'Secure keycard entry, lockers, rooftop cafes, filtered water dispensers, safe lockers.',
          topPicksOrBrands: ['Hosteller Rishikesh Tapovan', 'goSTOPS Rishikesh', 'Zostel Tapovan']
        },
        {
          category: 'Ashram Guesthouse (Swarg Ashram)',
          estimatedPerNightPerPerson: 350,
          safetyNotes: 'Peaceful, simple twin-bed rooms with attached bathroom, safe and gated.',
          topPicksOrBrands: ['Parmarth Niketan Guesthouse', 'Geeta Bhawan']
        }
      ]
    },
    itinerary: [
      {
        dayNumber: 1,
        theme: 'Haridwar Ghats, Sacred Dip & Transit to Tapovan',
        geographicalArea: 'Haridwar & Ram Jhula',
        activities: [
          {
            timeSlot: 'Morning',
            placeName: 'Har Ki Pauri Ghat & Brahma Kund Dip',
            description: 'Arrive at Haridwar station. Walk 1 km to the sacred Har Ki Pauri ghat. Witness early morning pilgrims, chiming bells, and take a refreshing holy dip in the crystal clear Ganges.',
            approxDuration: '2 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk from Haridwar Railway Station',
            transitCost: 0,
            budgetTip: 'Lock your footwear at official free shoe stands (give ₹5 voluntarily).'
          },
          {
            timeSlot: 'Afternoon',
            placeName: 'Famous Hoshiyar Puri Chole Poori Lunch & Transit to Tapovan',
            description: 'Indulge in Haridwar’s legendary piping hot bedmi poori with spiced aloo and pumpkin sabzi.',
            approxDuration: '1.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Shared Vikram to Rishikesh / Tapovan (₹40)',
            transitCost: 40,
            budgetTip: 'Full thali meal at Mohanji Puri Wale or Hoshiyar Puri costs under ₹90.'
          },
          {
            timeSlot: 'Evening',
            placeName: 'Parmarth Niketan Ganga Aarti at Sunset',
            description: 'Sit on the marble steps across Ram Jhula. Join hundreds in chanting, singing devotional hymns as giant fire torches are swirled against the dusk sky over the holy river.',
            approxDuration: '2.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Cross Ram Jhula pedestrian bridge on foot',
            transitCost: 0,
            budgetTip: 'Arrive 30 minutes early (5:15 PM) to grab front-row ghat seating for free.'
          },
          {
            timeSlot: 'Night',
            placeName: 'Chotiwala Restaurant or Beatles Cafe Street Dinner',
            description: 'Enjoy delicious Garhwali thali, lachha parathas, and hot badam milk in the lit bazaar.',
            approxDuration: '1.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk',
            transitCost: 0
          }
        ],
        dayTotalEntryFees: 0,
        dayTotalTransitCost: 40,
        walkingDistanceKm: 5.1
      },
      {
        dayNumber: 2,
        theme: 'White-Water Rafting & Secret Waterfalls',
        geographicalArea: 'Shivpuri to Muni Ki Reti & Neer Garh',
        activities: [
          {
            timeSlot: 'Morning',
            placeName: 'Ganga White-Water Rafting (16 km Shivpuri Stretch)',
            description: 'Ride adrenaline-pumping Grade III rapids like Roller Coaster, Golf Course, and Club House with certified safety guides, life jackets, and cliff jump.',
            approxDuration: '3.5 hours',
            entryFeePerPerson: 650,
            isFree: false,
            travelMethodFromPrevious: 'Operator shared jeep from Tapovan office to Shivpuri start',
            transitCost: 0,
            budgetTip: 'Book directly with local certified operators on Tapovan main street for ₹600-700 rather than hotel concierge who markup to ₹1,200.'
          },
          {
            timeSlot: 'Afternoon',
            placeName: 'Cafe Street Lunch & Smoothie Bowl',
            description: 'Rest and replenish with wood-fired sourdough pizza, shakshuka, or hearty dal tadka at budget backpacker cafes.',
            approxDuration: '1.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk back to Tapovan',
            transitCost: 0,
            budgetTip: 'Local dhabas behind the police chowki serve hot rajma chawal for ₹80.'
          },
          {
            timeSlot: 'Evening',
            placeName: 'Neer Garh Waterfall Hike',
            description: 'Hike up the jungle trail following tiered turquoise mountain pools and cold cascades under canopy trees.',
            approxDuration: '2.5 hours',
            entryFeePerPerson: 30,
            isFree: false,
            travelMethodFromPrevious: 'Shared auto from Tapovan (₹25) + scenic uphill hike',
            transitCost: 25,
            budgetTip: 'Forest entry is only ₹30. Hike all the way to waterfall #2 where it is clean and uncrowded.'
          },
          {
            timeSlot: 'Night',
            placeName: 'Triveni Ghat Evening Stroll & Kheer Treat',
            description: 'Feel the cool river wind on the ghats; enjoy hot jalebis and kulhad rabdi kheer (₹40).',
            approxDuration: '2 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Shared Vikram to Rishikesh center',
            transitCost: 20
          }
        ],
        dayTotalEntryFees: 680,
        dayTotalTransitCost: 45,
        walkingDistanceKm: 6.0
      },
      {
        dayNumber: 3,
        theme: 'The Beatles Ashram Heritage & Peaceful Return',
        geographicalArea: 'Chaurasi Kutia (Rajaji Forest) & Haridwar',
        activities: [
          {
            timeSlot: 'Morning',
            placeName: 'Beatles Ashram (Chaurasi Kutia) & Meditation Caves',
            description: 'Walk through the graffiti-filled meditation domes where The Beatles lived in 1968 and composed the White Album inside Rajaji Tiger Reserve forest.',
            approxDuration: '3 hours',
            entryFeePerPerson: 150,
            isFree: false,
            travelMethodFromPrevious: 'Walk from Ram Jhula along forest path (1.8 km)',
            transitCost: 0,
            budgetTip: 'Student ID card gives 50% discount on entry ticket! Bring your valid college ID if applicable.'
          },
          {
            timeSlot: 'Afternoon',
            placeName: 'Ayurvedic Herb Shopping & Rooftop Cafe Relaxation',
            description: 'Pick up pure Himalayan honey, local herbal teas, and essential oils. Relax at a Ganga-facing cafe with lemon-ginger-honey tea.',
            approxDuration: '2 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk across Janki Jhula',
            transitCost: 0,
            budgetTip: 'Buy authentic herbs from Garhwal Mandal Vikas Nigam (GMVN) outlet to avoid fake incense.'
          },
          {
            timeSlot: 'Evening',
            placeName: 'Return to Haridwar & Board Jan Shatabdi Train to Delhi',
            description: 'Take shared Vikram back to Haridwar Station. Board train #12056 at 18:30, reaching New Delhi by 22:50 PM in comfort.',
            approxDuration: '4.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Shared Vikram to Haridwar Station (₹40)',
            transitCost: 40,
            budgetTip: 'Pack Haridwar special Mathura Peda (₹80) as a delicious souvenir.'
          }
        ],
        dayTotalEntryFees: 150,
        dayTotalTransitCost: 40,
        walkingDistanceKm: 4.2
      }
    ],
    foodPlan: {
      dailyBreakdown: {
        breakfast: { cost: 65, suggestions: 'Aloo Paratha with curd & pickle or Haridwar Poori Bhaji with hot chai.' },
        lunch: { cost: 110, suggestions: 'Traditional North Indian thali (dal makhani, paneer/seasonal sabzi, rotis, rice) at Anandam or local mess.' },
        eveningSnacks: { cost: 35, suggestions: 'Ginger lemon tea, bun maska, or samosa chaat on Ram Jhula street.' },
        dinner: { cost: 130, suggestions: 'Freshly baked wood-oven pizza, Garhwali Kafuli & mandua roti, or thali in Tapovan.' },
        totalDailyCost: 340
      },
      mustTryDishes: [
        {
          name: 'Haridwar Bedmi Poori & Aloo',
          description: 'Crispy lentil-stuffed pooris served with tangy, hing-flavored spicy potato curry and sweet methi chutney.',
          approxCost: 70,
          bestPlacesToTry: 'Hoshiyar Puri or Mohan Ji Puri Wale at Haridwar'
        },
        {
          name: 'Garhwali Thali (Kafuli & Chainsoo)',
          description: 'Nutritious local spinach-fenugreek curry cooked in iron kadhai with roasted black gram gravy and red rice.',
          approxCost: 140,
          bestPlacesToTry: 'Local kitchen homestays or Rajasthani Mishtan Bhandar'
        },
        {
          name: 'Kulhad Rabdi & Jalebi',
          description: 'Slow-simmered rich creamy rabdi served in terracotta cups with piping hot, syrup-soaked crispy jalebis.',
          approxCost: 50,
          bestPlacesToTry: 'Chotiwala sweets counter near Ram Jhula'
        }
      ],
      budgetFoodHacks: [
        'Geeta Bhawan and Parmarth Niketan offer satvik community prasad/meals for a voluntary contribution of ₹50-70.',
        'Avoid fancy "Western fusion" cafes in Tapovan where simple pasta costs ₹320; stick to Indian thalis and dhabas.',
        'Carry your own insulated water bottle: clean Himalayan filtered RO water is freely available across major ashrams.'
      ]
    },
    budgetBreakdown: {
      items: [
        { category: 'To-and-Fro Train (Jan Shatabdi 2S)', costPerPerson: 370, totalCost: 740, notes: 'Direct high-speed Jan Shatabdi 2S reserved seating roundtrip', isFlexible: false },
        { category: 'Accommodation (2 Nights in Tapovan Hostel)', costPerPerson: 840, totalCost: 1680, notes: '₹420/night bunk bed in top rated hostel with WiFi and locker', isFlexible: true },
        { category: 'Ganga White-Water Rafting (16km Shivpuri)', costPerPerson: 650, totalCost: 1300, notes: 'Grade III rapids with licensed instructor, equipment & transport', isFlexible: true },
        { category: 'Food & Drinks (3 Days @ ₹340/day)', costPerPerson: 1020, totalCost: 2040, notes: 'Breakfasts, thali lunches, street sweets, chai & mineral refills', isFlexible: true },
        { category: 'Local Transportation (Shared Vikrams & Autos)', costPerPerson: 150, totalCost: 300, notes: 'Haridwar-Rishikesh-Tapovan transfers and Neer Garh drop', isFlexible: true },
        { category: 'Entry Fees (Beatles Ashram + Neer Garh)', costPerPerson: 180, totalCost: 360, notes: 'Beatles Ashram (₹150) + Neer Garh waterfall entry (₹30)', isFlexible: false },
        { category: 'Miscellaneous & Souvenirs', costPerPerson: 150, totalCost: 300, notes: 'Footwear tokens, ganga jal can, temple donation', isFlexible: true },
        { category: 'Emergency Buffer Cushion (10%)', costPerPerson: 350, totalCost: 700, notes: 'Safety fund for medicine or private taxi if shared auto delayed', isFlexible: true }
      ],
      totalTripCost: 7420,
      totalCostPerPerson: 3710,
      minimumBarebonesCost: 2850,
      comfortableCost: 4300,
      recommendedBuffer: 500,
      withinUserBudget: true,
      savingsOrDeficit: 90
    },
    moneySavingTips: [
      {
        title: 'Book Jan Shatabdi 2S Class on IRCTC',
        description: 'A 2S reserved seat on the Jan Shatabdi is just ₹185 each way, reaching in 4.5 hours with guaranteed seating. Private AC buses charge ₹600-900 for the same distance.',
        estimatedSavings: '₹800 per person'
      },
      {
        title: 'Book Rafting Directly in Tapovan',
        description: 'Never book rafting packages through online aggregators or Delhi agents who charge ₹1,400. Walk onto Badrinath Road in Tapovan where Uttarakhand Tourism certified counters offer the 16km Shivpuri route for ₹600-700.',
        estimatedSavings: '₹650 per person'
      },
      {
        title: 'Student ID for Beatles Ashram',
        description: 'Show your college/university ID card at the Beatles Ashram ticket counter to get the student ticket rate (₹75 instead of ₹150).',
        estimatedSavings: '₹75 per person'
      },
      {
        title: 'Ride Shared Vikrams, Not Private Cabs',
        description: 'Private autos demand ₹400 between Haridwar and Rishikesh. Shared 7-seater Vikrams run every minute from station chowk for exactly ₹40 per head.',
        estimatedSavings: '₹360 per ride'
      }
    ],
    safetyAndPracticalInfo: {
      safetyTips: [
        'River currents in the Ganges are extremely powerful with undercurrents. Never attempt swimming outside designated shallow ghats with chains.',
        'Watch out for monkeys near Ram Jhula and Laxman Jhula. Do not carry transparent polythene bags or keep bottles/food in your hand.',
        'Ensure your rafting agency provides US Coast Guard approved life jackets and has a safety kayaker accompanying the raft.',
        'Rishikesh is an official holy town: non-vegetarian food and alcohol are strictly banned by law within city limits.'
      ],
      weatherAndBestTime: 'October to April has pleasant sunny days (22°C - 28°C) and crisp nights (10°C - 16°C). Avoid July-August when rafting is closed due to monsoon river swells.',
      advanceBookingsNeeded: [
        'Jan Shatabdi train tickets (book 15-20 days ahead)',
        'Hostel bed in Tapovan during long weekends'
      ],
      essentialPackingList: [
        { item: 'Quick-dry synthetic T-shirt & shorts for rafting', category: 'Clothing', importance: 'High' },
        { item: 'Dry-bag / waterproof phone pouch for river', category: 'Tech', importance: 'High' },
        { item: 'Comfortable walking shoes with rubber grip', category: 'Clothing', importance: 'High' },
        { item: 'Light fleece / jacket (evenings get brisk near river)', category: 'Clothing', importance: 'High' },
        { item: 'Sunscreen and UV sunglasses (river glare is strong)', category: 'Essentials', importance: 'Medium' },
        { item: 'Student ID card (for entry discounts)', category: 'Essentials', importance: 'Medium' }
      ],
      scamsAndTrapsToAvoid: [
        {
          scam: 'People selling "Authentic Rudraksha" or "Himalayan gems" on ghats',
          prevention: '99% of beads sold on footbridges are wooden imitations or dyed plastic. Do not buy high-value items from street hawkers.'
        },
        {
          scam: 'Auto drivers at Haridwar claiming "Rishikesh roads are blocked due to VIP movement"',
          prevention: 'This is a classic pitch to steer you into expensive private car rentals. Walk to the main bus/Vikram stand; transit is regular.'
        },
        {
          scam: 'Unofficial "pandits" thrusting flowers into your hand and asking for ₹1,100 dakshina',
          prevention: 'Politely decline and place flowers directly in the river or in donation boxes managed by the trust.'
        }
      ]
    },
    alternativePlans: {
      cheaperItineraryNotes: [
        'Skip river rafting if on ultra-budget (saves ₹650), replacing it with free hiking to Patna Waterfall and Ganga sand beaches.',
        'Stay at Geeta Bhawan Ashram for ₹250/night with clean basic rooms.',
        'Eat at ashram community bhojanalayas for ₹50-60/meal.'
      ],
      badWeatherBackupPlan: {
        rainyDayItinerary: [
          'Attend indoor guided meditation and yoga sessions at Sivananda Ashram or Parmarth Niketan.',
          'Explore local bookshops, philosophy libraries, and classical sitar music stores in Swarg Ashram.',
          'Visit Bharat Mandir (the oldest 8th-century temple in Rishikesh core).',
          'Cozy up with chai and hot ginger soup in covered rooftop cafe with panoramic rain views over the Shivalik hills.'
        ],
        indoorAttractions: ['Bharat Mandir museum', 'Sivananda Ashram prayer halls', 'Swarg Ashram indoor libraries'],
        rainSafetyTips: 'River rafting is halted during heavy rain for safety. Waterfalls can experience sudden flash surges, so stay away from ravine trails.'
      },
      alternativeDestinations: [
        {
          name: 'Jaipur & Pushkar, Rajasthan',
          vibe: 'Royal forts, pink-hued bazaars, holy sacred lake, vibrant camel culture and cheap street food',
          estimatedCostPerPerson: 3600,
          whyCheaper: 'Direct ₹160 express train from Delhi Sarai Rohilla; composite fort tickets; budget dharamsalas in Pushkar.',
          idealDays: 3
        },
        {
          name: 'McLeod Ganj & Dharamshala',
          vibe: 'Tibetan Buddhist monasteries, Dalai Lama temple, Bhagsu waterfall, Kangra tea gardens',
          estimatedCostPerPerson: 4200,
          whyCheaper: 'HRTC overnight Volvo/ordinary buses; budget Tibetan guesthouses starting at ₹400/night.',
          idealDays: 3
        },
        {
          name: 'Nainital & Pangot',
          vibe: 'Emerald mountain lake, boating, Naina Devi temple, pine forest nature walks',
          estimatedCostPerPerson: 3900,
          whyCheaper: 'Kathgodam Shatabdi train + shared taxi keeps transit costs minimal.',
          idealDays: 3
        }
      ]
    }
  },
  {
    id: 'mumbai-hampi-4d',
    title: 'Hampi UNESCO Ruins & Boulder Paradise',
    tagline: 'Monumental 14th-century Vijayanagara empire, boulder-strewn hills, Tungabhadra coracle ride & Hippie Island',
    destination: 'Hampi & Hospet, Karnataka',
    startingLocation: 'Mumbai',
    durationDays: 4,
    numTravelers: 2,
    travelDates: 'Flexible (October to February best)',
    budgetPerPerson: 5200,
    totalBudget: 10400,
    interests: ['Historical & Forts', 'Temples & Spiritual', 'Photography', 'Nature & Waterfalls'],
    travelStyle: 'Low-budget but safe & comfortable',
    accommodationPreference: 'Hostel / Riverside Guesthouse',
    preferredTransportation: 'Overnight Train (CSMT to Hospet) or KSRTC Bus',
    destinationSuitability: {
      verdict: 'Spectacular UNESCO Budget Destination',
      reason: 'Bicycle rentals cost just ₹150/day to explore over 25 sq km of free open-air ruins, with delicious ₹100 banana-flower curries and riverside sunsets.',
      feasibilityStatus: 'fits_budget'
    },
    transportation: {
      cheapestRecommendation: 'HPT CSMT Express (#11139/40) or Garib Rath / Sleeper train direct from CSMT/Kalyan to Hospet Junction. Hospet to Hampi is 12 km (₹18 KSRTC local bus).',
      localTransitAdvice: 'Rent a geared bicycle (₹100-150/day) or a 100cc moped (₹300/day split by 2) to effortlessly navigate between the Sacred and Royal Enclosures.',
      options: [
        {
          mode: 'Train - Mumbai CSMT to Hospet Express (SL Class)',
          operatorDetails: 'Train #11139 (CSMT to Hospet Junction)',
          approxFarePerPerson: 430,
          roundTripFarePerPerson: 860,
          travelTime: '14h 20m (Overnight 21:20 - 11:45)',
          pros: 'Direct train, saves 2 nights of hotel accommodation, smooth track.',
          cons: 'Must book in advance due to weekend tourist rush.',
          bookingTips: 'Book on IRCTC 45 days prior or check Tatkal at 11:00 AM.',
          isRecommended: true
        },
        {
          mode: 'Overnight Private Sleeper Bus',
          operatorDetails: 'VRL / SRS Travels from Borivali / Sion to Hospet',
          approxFarePerPerson: 900,
          roundTripFarePerPerson: 1800,
          travelTime: '13h 00m',
          pros: 'Multiple pick-up points across Mumbai; comfortable berths.',
          cons: 'Double the cost of train; occasional highway delay near Pune.',
          bookingTips: 'Compare RedBus/AbhiBus with coupon codes.',
          isRecommended: false
        }
      ],
      localTransportOptions: [
        {
          mode: 'Bicycle Rental',
          approxDailyCost: 120,
          description: 'Geared mountain bicycles available right at Hampi Bazaar near Virupaksha.',
          budgetTip: 'Inspect brakes and tire pressure before paying. Saves ₹600/day on private auto tours!'
        },
        {
          mode: 'Local KSRTC Bus (Hospet to Hampi)',
          approxDailyCost: 36,
          description: 'Government red buses ply between Hospet Railway Station and Hampi Bazaar every 20 minutes for ₹18.',
          budgetTip: 'Do not pay ₹250 to auto drivers at Hospet station; walk 150m to bus stand.'
        }
      ]
    },
    accommodation: {
      recommendedAreas: [
        {
          areaName: 'Hampi Bazaar & Kamalapura',
          safetyRating: '9.3/10 (Safe, heritage zone, immediate access to temples)',
          approxPricePerNight: 500,
          whyStayHere: 'Directly at the foot of Virupaksha Temple, walking distance to Hemakuta hill sunsets and authentic South Indian messes.',
          typesAvailable: 'Homestays, heritage guesthouses & KSTDC Hotel Mayura Bhuvaneshwari'
        },
        {
          areaName: 'Anegundi & Sanapur (Across Tungabhadra)',
          safetyRating: '8.8/10 (Relaxed rural vibes, paddy fields, lakes)',
          approxPricePerNight: 550,
          whyStayHere: 'Scenic boulder surroundings, cozy backpacker cafes, close to Sanapur lake.',
          typesAvailable: 'Hostels (goSTOPS Hampi, Rocky Guesthouse) and mud cottages'
        }
      ],
      types: [
        {
          category: 'Backpacker Hostel Dorm (Bunk bed)',
          estimatedPerNightPerPerson: 480,
          safetyNotes: 'Airy dorms, lockers, common chill areas, verified hosts.',
          topPicksOrBrands: ['goSTOPS Hampi', 'Zostel Hampi (Sanapur)', 'Rolling Stone']
        },
        {
          category: 'Family Heritage Homestay (Hampi Bazaar)',
          estimatedPerNightPerPerson: 600,
          safetyNotes: 'Local family run, clean rooms with fan, attached western bathroom.',
          topPicksOrBrands: ['Padma Guesthouse', 'Shanti Homestay']
        }
      ]
    },
    itinerary: [
      {
        dayNumber: 1,
        theme: 'Sacred Center & Hemakuta Golden Hour',
        geographicalArea: 'Hampi Bazaar & Hemakuta Hill',
        activities: [
          {
            timeSlot: 'Morning',
            placeName: 'Arrival via Hospet & Virupaksha Temple',
            description: 'Take KSRTC bus from Hospet. Check-in to homestay, freshen up, and marvel at the 9-tiered 50-meter Gopuram of the functioning 7th-century Virupaksha Shiva Temple. Meet temple elephant Lakshmi.',
            approxDuration: '2.5 hours',
            entryFeePerPerson: 25,
            isFree: false,
            travelMethodFromPrevious: 'Local bus from Hospet (₹18)',
            transitCost: 18,
            budgetTip: 'Temple entry is ₹25. See the pinhole camera inverted shadow effect inside the inner sanctum wall.'
          },
          {
            timeSlot: 'Afternoon',
            placeName: 'Traditional Banana Leaf Thali Lunch & Sasivekalu Ganesha',
            description: 'Feast on unlimited jolada rotti (jowar flatbread) with spicy brinjal curry, sprouted moong, curd, and chutney.',
            approxDuration: '1.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk',
            transitCost: 0,
            budgetTip: 'Eat at Mango Tree or Suresh Restaurant for under ₹110.'
          },
          {
            timeSlot: 'Evening',
            placeName: 'Hemakuta Hill Sunset & Kadalekalu Ganesha',
            description: 'Scramble up the gentle granite slopes of Hemakuta Hill dotted with pre-Vijayanagara triple-chambered shrines. Watch a breathtaking panoramic sunset across the ruins.',
            approxDuration: '2.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk 5 mins from Bazaar',
            transitCost: 0,
            budgetTip: 'Hemakuta Hill entry is 100% free and has the best 360-degree sunset view in Hampi.'
          },
          {
            timeSlot: 'Night',
            placeName: 'Riverside Stroll & Dinner at Mango Tree',
            description: 'Relax on floor cushions listening to chill music; enjoy fresh wood-oven pita with hummus or local curries.',
            approxDuration: '2 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk',
            transitCost: 0
          }
        ],
        dayTotalEntryFees: 25,
        dayTotalTransitCost: 18,
        walkingDistanceKm: 3.5
      },
      {
        dayNumber: 2,
        theme: 'Bicycle Circuit: The Monumental Royal Center',
        geographicalArea: 'Kamalapura & Royal Enclosure',
        activities: [
          {
            timeSlot: 'Morning',
            placeName: 'Vijaya Vittala Temple & The Stone Chariot',
            description: 'Pedal along the scenic river pathway to the iconic Vittala temple complex. Admire the world-famous Stone Chariot (featured on the ₹50 banknote) and the 56 musical pillars.',
            approxDuration: '3 hours',
            entryFeePerPerson: 40,
            isFree: false,
            travelMethodFromPrevious: 'Cycle 3.5 km on paved scenic route',
            transitCost: 120,
            budgetTip: 'The ASI composite ticket (₹40 online) covers both Vittala Temple and Zenana Enclosure on the same calendar day! Do not buy separate tickets.'
          },
          {
            timeSlot: 'Afternoon',
            placeName: 'Lotus Mahal & Elephant Stables (Zenana Enclosure)',
            description: 'Explore the stunning Indo-Islamic palace architecture of Lotus Mahal, queen’s summer palace, and the grand domed stables that housed the royal ceremonial elephants.',
            approxDuration: '2 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Cycle 2.5 km',
            transitCost: 0,
            budgetTip: 'Valid on your morning Vittala ticket. Carry water and energy bars in your cycle basket.'
          },
          {
            timeSlot: 'Evening',
            placeName: 'Stepped Pushkarani & Queen’s Bath',
            description: 'Witness the geometric black schist marvel of the ancient stepped tank and the aquatic pavilions of the royal bath.',
            approxDuration: '2 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Cycle 1.5 km',
            transitCost: 0
          },
          {
            timeSlot: 'Night',
            placeName: 'Local Dosa Feast & Rest',
            description: 'Crisp ghee masala dosas and filter coffee in Hampi Bazaar.',
            approxDuration: '1.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Cycle back',
            transitCost: 0
          }
        ],
        dayTotalEntryFees: 40,
        dayTotalTransitCost: 120,
        walkingDistanceKm: 8.0
      },
      {
        dayNumber: 3,
        theme: 'Anegundi, Sanapur Lake & Tungabhadra Coracle',
        geographicalArea: 'North Bank & Sanapur',
        activities: [
          {
            timeSlot: 'Morning',
            placeName: 'Tungabhadra Coracle Ride & Anjanadri Hill',
            description: 'Cross the river or reach Anjanadri Hill (mythological birthplace of Lord Hanuman). Climb 575 whitewashed stone steps for an awe-inspiring vista of green paddy fields nestled between billion-year-old boulders.',
            approxDuration: '3.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Shared auto to Anjanadri foot (₹40)',
            transitCost: 40,
            budgetTip: 'Climb early morning by 6:30 AM before the sun heats up the granite steps.'
          },
          {
            timeSlot: 'Afternoon',
            placeName: 'Sanapur Lake Cliff Jumping & Coracle Whirl',
            description: 'Relax by the tranquil emerald waters of Sanapur Lake surrounded by balancing rocks. Experience a traditional circular woven coracle boat ride.',
            approxDuration: '2.5 hours',
            entryFeePerPerson: 100,
            isFree: false,
            travelMethodFromPrevious: 'Shared auto / hired moped (₹50)',
            transitCost: 50,
            budgetTip: 'Negotiate the coracle boat ride: split with 3 fellow travelers to pay ₹100 each instead of private rate of ₹500.'
          },
          {
            timeSlot: 'Evening',
            placeName: 'Anegundi Rural Village Stroll',
            description: 'Walk through Anegundi, an older historic settlement predating Hampi. Visit the local banana-fiber craft cooperative and Kishkinda heritage trust.',
            approxDuration: '2 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk / auto',
            transitCost: 30
          },
          {
            timeSlot: 'Night',
            placeName: 'Backpacker Cafe Live Music & Israeli Platter',
            description: 'Enjoy shakshuka, falafel platters, and lemon mint crush in a relaxed bohemian setting.',
            approxDuration: '2 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk',
            transitCost: 0
          }
        ],
        dayTotalEntryFees: 100,
        dayTotalTransitCost: 120,
        walkingDistanceKm: 5.5
      },
      {
        dayNumber: 4,
        theme: 'Matanga Hill Sunrise, Underground Shiva Temple & Departure',
        geographicalArea: 'Matanga Hill & Hospet',
        activities: [
          {
            timeSlot: 'Morning',
            placeName: 'Matanga Hill Sunrise Hike',
            description: 'Wake up at 5:15 AM for the ultimate Hampi experience. Climb the rocky stairs to the highest point in Hampi. Watch the morning mist rise off the Tungabhadra as dawn lights up ruins for miles around.',
            approxDuration: '2.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk from Bazaar (20 min climb)',
            transitCost: 0,
            budgetTip: 'Wear shoes with solid grip and carry a phone flashlight for the pre-dawn ascent.'
          },
          {
            timeSlot: 'Afternoon',
            placeName: 'Underground Virupaksha & Achyutaraya Temple',
            description: 'Walk through the grand ruins of Achyutaraya temple tucked behind the Courtesan’s street and the submerged sanctum of Prasanna Virupaksha.',
            approxDuration: '2.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk along Kampa Bhupa’s path',
            transitCost: 0,
            budgetTip: 'Completely free of charge, with virtually zero crowds compared to Vittala.'
          },
          {
            timeSlot: 'Evening',
            placeName: 'Pack up, KSRTC Bus to Hospet & Return Train',
            description: 'Collect backpacks from homestay, catch KSRTC bus back to Hospet Junction. Board the overnight CSMT express train home.',
            approxDuration: '3 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Local KSRTC bus to Hospet station (₹18)',
            transitCost: 18,
            budgetTip: 'Grab a hot masala dosa and parcel of lemon rice at Hotel Shanbhag outside Hospet station for your train dinner (₹100).'
          }
        ],
        dayTotalEntryFees: 0,
        dayTotalTransitCost: 18,
        walkingDistanceKm: 6.2
      }
    ],
    foodPlan: {
      dailyBreakdown: {
        breakfast: { cost: 75, suggestions: 'Jolada Rotti, Benne Dosa, or Idli-Vada with spicy chutney at Hampi Bazaar messes.' },
        lunch: { cost: 120, suggestions: 'North Karnataka Thali with jowar rottis, Yennegai (stuffed brinjal), Shenga (peanut) chutney powder, and buttermilk.' },
        eveningSnacks: { cost: 35, suggestions: 'Girmit (Karnataka spicy puffed rice snack), Mirchi Bajji, and filter coffee.' },
        dinner: { cost: 140, suggestions: 'Thali, curd rice, wood-fired thin-crust pizza, or Israeli falafel plate at traveler cafes.' },
        totalDailyCost: 370
      },
      mustTryDishes: [
        {
          name: 'Jolada Rotti Oota (Jowar Roti Meal)',
          description: 'Traditional North Karnataka meal featuring crisp unleavened sorghum flatbreads, spicy stuffed eggplant curry, and peanut chutney.',
          approxCost: 110,
          bestPlacesToTry: 'Sri Venkateshwara Mess near Virupaksha or Shanbhag at Hospet'
        },
        {
          name: 'Davangere Benne Dosa',
          description: 'Thick, porous golden dosa roasted with dollops of fresh white butter, served with spicy potato mash and coconut chutney.',
          approxCost: 70,
          bestPlacesToTry: 'Local breakfast stalls on Bazaar Street'
        },
        {
          name: 'Girmit & Mirchi Bajji',
          description: 'Tossed puffed rice with roasted gram, tamarind, raw onions and crisp deep-fried chili pakodas.',
          approxCost: 40,
          bestPlacesToTry: 'Street cart near Hampi Bus Stand'
        }
      ],
      budgetFoodHacks: [
        'Eat at local family-run "Mess" joints marked with Kannada signboards; they serve unlimited hygienic thalis for ₹90-110.',
        'Carry a 1-liter bottle and refill with RO filtered water at homestays or KSTDC hotel counter for free instead of buying single-use bottles in the sun.',
        'Supermarkets in Hospet offer peanut chikki and energy bars at MRP; buy snacks before boarding the bus to Hampi.'
      ]
    },
    budgetBreakdown: {
      items: [
        { category: 'To-and-Fro Train (Sleeper Class CSMT-HPT)', costPerPerson: 860, totalCost: 1720, notes: 'Mumbai to Hospet Junction roundtrip Sleeper tickets', isFlexible: false },
        { category: 'Accommodation (3 Nights in Backpacker Dorm)', costPerPerson: 1440, totalCost: 2880, notes: '₹480/night bed in top rated hostel with locker and power', isFlexible: true },
        { category: 'Food & Drinks (4 Days @ ₹370/day)', costPerPerson: 1480, totalCost: 2960, notes: 'Jowar meals, dosas, street snacks, chai & water refills', isFlexible: true },
        { category: 'Local Transportation (Cycles, Buses & Autos)', costPerPerson: 360, totalCost: 720, notes: '2 days bicycle rental (₹240) + local KSRTC buses & shared autos', isFlexible: true },
        { category: 'Monument Entry Fees & Coracle Ride', costPerPerson: 165, totalCost: 330, notes: 'ASI Composite ticket (₹40), Virupaksha (₹25), Coracle split (₹100)', isFlexible: false },
        { category: 'Miscellaneous & Temple Offerings', costPerPerson: 180, totalCost: 360, notes: 'Cycle lock deposit, mobile charging, shoe tokens', isFlexible: true },
        { category: 'Emergency Buffer Cushion (10%)', costPerPerson: 450, totalCost: 900, notes: 'Buffer for puncture repair, puncture-free tube, or auto taxi', isFlexible: true }
      ],
      totalTripCost: 9870,
      totalCostPerPerson: 4935,
      minimumBarebonesCost: 3800,
      comfortableCost: 5800,
      recommendedBuffer: 700,
      withinUserBudget: true,
      savingsOrDeficit: 265
    },
    moneySavingTips: [
      {
        title: 'ASI Single Composite Ticket Rule',
        description: 'The ₹40 ASI online ticket for Vittala Temple is valid for the Zenana Enclosure (Lotus Mahal & Elephant Stables) on the same date. Never buy two separate tickets.',
        estimatedSavings: '₹40 per person'
      },
      {
        title: 'Bicycle Rental vs Private Auto Tour',
        description: 'Auto drivers quote ₹1,200 to ₹1,500 per day for sightseeing. A geared bicycle costs just ₹120-150/day. The roads between ruins are mostly flat and a joy to pedal.',
        estimatedSavings: '₹900 over 2 days'
      },
      {
        title: 'KSRTC Local Bus over Hospet Auto Drivers',
        description: 'Auto drivers at Hospet station insist that no bus is available and demand ₹300. Walk 2 minutes to the main road; government buses run every 15 mins for ₹18.',
        estimatedSavings: '₹560 roundtrip for two'
      }
    ],
    safetyAndPracticalInfo: {
      safetyTips: [
        'Sanapur Lake has signs warning of crocodiles and submerged rocks. Only swim in designated clear spots or stick to coracle rides.',
        'Hampi heat can be deceptive even in winter. Drink at least 3 liters of water per day and wear a wide hat to prevent sunstroke while cycling.',
        'Carry a torch when hiking Matanga Hill for sunrise; the granite stairs have no artificial lighting.',
        'Lock your bicycles whenever leaving them outside monument gates; keep the receipt token safe.'
      ],
      weatherAndBestTime: 'November to February is the golden window with cool mornings (16°C) and pleasant afternoons (28°C-31°C). Avoid March to May when temperatures exceed 41°C.',
      advanceBookingsNeeded: [
        'Mumbai-Hospet train tickets (book 60 days ahead; very high demand)',
        'Hostel dorm or guesthouse room in Hampi Bazaar'
      ],
      essentialPackingList: [
        { item: 'Wide-brim sun hat or cotton scarf', category: 'Clothing', importance: 'High' },
        { item: 'Polarized sunglasses (harsh granite glare)', category: 'Essentials', importance: 'High' },
        { item: 'Sneakers or sandals with tough rubber sole', category: 'Clothing', importance: 'High' },
        { item: 'Lightweight cotton clothes (full sleeves help with sun)', category: 'Clothing', importance: 'High' },
        { item: 'Electrolyte / ORS sachets', category: 'Safety & Medical', importance: 'High' },
        { item: 'Power bank & headlamp / torch', category: 'Tech', importance: 'High' }
      ],
      scamsAndTrapsToAvoid: [
        {
          scam: 'Auto drivers outside Hospet station aggressively claiming Hampi has no accommodations left',
          prevention: 'Always book in advance online or walk into Hampi Bazaar directly. Do not let auto drivers divert you to random hotels in Hospet.'
        },
        {
          scam: 'Unauthorized "guides" at Vittala temple demanding ₹800 without ASI license',
          prevention: 'Look for government authorized ASI badges with photo ID, or use the official ₹20 ASI audio guide app on your smartphone.'
        }
      ]
    },
    alternativePlans: {
      cheaperItineraryNotes: [
        'Use standard single-speed bicycles (₹80/day instead of ₹150 geared ones).',
        'Stay at simple room dharamsalas near Virupaksha for ₹300/night.',
        'Skip the coracle ride and explore the Tungabhadra boulders on foot.'
      ],
      badWeatherBackupPlan: {
        rainyDayItinerary: [
          'Visit the Archaeological Museum at Kamalapura (underground models of Vijayanagara empire, entry ₹5).',
          'Explore sheltered temple pillared halls (Mandapas) with intricate ceiling carvings.',
          'Take shelter at traditional cafes and enjoy hot spicy rasam and bajji while watching boulders glistening in rain.'
        ],
        indoorAttractions: ['Kamalapura Archaeological Museum', 'Virupaksha Temple inner mandapa', 'Anegundi Craft Center'],
        rainSafetyTips: 'Wet granite boulders become dangerously slick like ice. Never attempt climbing Matanga Hill or Hemakuta boulders in the rain.'
      },
      alternativeDestinations: [
        {
          name: 'Aurangabad (Ajanta & Ellora Caves)',
          vibe: 'Rock-cut Buddhist and Hindu cave architecture, Kailash Temple monolithic wonder, Bibi Ka Maqbara',
          estimatedCostPerPerson: 4400,
          whyCheaper: 'Overnight train from Mumbai costs under ₹250; government MSRTC buses go directly to cave sites.',
          idealDays: 3
        },
        {
          name: 'Badami, Aihole & Pattadakal',
          vibe: 'Challukya rock-cut cave temples, Agastya lake sandstone cliffs, UNESCO temples',
          estimatedCostPerPerson: 4200,
          whyCheaper: 'Very low accommodation rates and minimal tourist commercialization.',
          idealDays: 3
        },
        {
          name: 'Gokarna Coastal Trail',
          vibe: 'Secluded beaches, cliff trek, ancient temple, chill shacks',
          estimatedCostPerPerson: 4800,
          whyCheaper: 'Direct Matsyagandha Express train from Mumbai (Sleeper ₹380).',
          idealDays: 3
        }
      ]
    }
  },
  {
    id: 'chennai-pondicherry-3d',
    title: 'Pondicherry & Auroville French Colony Escape',
    tagline: 'Colonial White Town architecture, seaside promenade, bicycle tours, Auroville Matrimandir & coastal cafes',
    destination: 'Pondicherry (Puducherry)',
    startingLocation: 'Chennai',
    durationDays: 3,
    numTravelers: 2,
    travelDates: 'Flexible (All year round / Oct-March best)',
    budgetPerPerson: 3500,
    totalBudget: 7000,
    interests: ['Historical & Forts', 'Beaches', 'Local Food & Street Bazaars', 'Photography'],
    travelStyle: 'Low-budget but safe & comfortable',
    accommodationPreference: 'Hostel / Ashram Guesthouse',
    preferredTransportation: 'East Coast Road (ECR) State Bus or Express Train',
    destinationSuitability: {
      verdict: 'Ideal Low-Budget Weekend Trip',
      reason: 'Just 3 hours from Chennai via scenic ECR for ₹120-150 bus fare, with free seaside strolls, ₹80 vintage bicycle rentals, and affordable Sri Aurobindo Ashram stays.',
      feasibilityStatus: 'fits_budget'
    },
    transportation: {
      cheapestRecommendation: 'Tamil Nadu SETC / PRTC ordinary or semi-deluxe bus via ECR (East Coast Road) from CMBT / Thiruvanmiyur (fare ~₹140). Alternatively, Chennai Egmore to Puducherry Express train for ~₹85.',
      localTransitAdvice: 'Rent a vintage single-speed bicycle (₹80-100/day) or walk. White Town is compact, flat, and extremely walkable.',
      options: [
        {
          mode: 'Government Bus (SETC / PRTC via ECR)',
          operatorDetails: 'Departs every 15-20 mins from Koyambedu / Thiruvanmiyur',
          approxFarePerPerson: 140,
          roundTripFarePerPerson: 280,
          travelTime: '3h 15m along scenic coastal highway',
          pros: 'Leaves every 15 minutes, breezy ECR route, drops inside Pondicherry bus stand.',
          cons: 'Can be crowded on Friday evenings.',
          bookingTips: 'Hop on at Thiruvanmiyur stop to avoid Chennai city traffic.',
          isRecommended: true
        },
        {
          mode: 'Train - Chennai Egmore to Puducherry Express',
          operatorDetails: 'Train #16115 (Chennai Egmore to Puducherry)',
          approxFarePerPerson: 85,
          roundTripFarePerPerson: 170,
          travelTime: '3h 45m',
          pros: 'Cheapest possible option, peaceful ride, terminates near White Town.',
          cons: 'Only 1-2 train departures daily.',
          bookingTips: 'Buy unreserved 2S ticket at Egmore station 30 mins before.',
          isRecommended: false
        }
      ],
      localTransportOptions: [
        {
          mode: 'Bicycle Rental (White Town)',
          approxDailyCost: 90,
          description: 'Explore the French and Tamil Quarters on classic roadsters with front baskets.',
          budgetTip: 'Rent from shops near Mission Street for ₹80/day instead of hotel desks.'
        },
        {
          mode: 'Local Bus to Auroville',
          approxDailyCost: 40,
          description: 'PRTC local town buses run between Pondicherry bus stand and Auroville junction.',
          budgetTip: 'Takes ₹15 ticket versus ₹400 demanded by private taxis.'
        }
      ]
    },
    accommodation: {
      recommendedAreas: [
        {
          areaName: 'Heritage Tamil Quarter / Mission Street',
          safetyRating: '9.5/10 (Safe, well lit, bustling with bakeries, 5 mins walk to French Quarter)',
          approxPricePerNight: 420,
          whyStayHere: 'Half the price of French Quarter hotels, yet only 3 blocks away. Authentic Chettinad and South Indian eateries nearby.',
          typesAvailable: 'Hostels (Micasa, Ostello, goSTOPS), budget guesthouses'
        },
        {
          areaName: 'Sri Aurobindo Ashram Guesthouses',
          safetyRating: '9.8/10 (Spiritual, immaculate cleanliness, sea-facing rooms available)',
          approxPricePerNight: 400,
          whyStayHere: 'Directly on Beach Road / Goubert Avenue, incredibly quiet and peaceful.',
          typesAvailable: 'Ashram guesthouses (Park Guesthouse, International Guesthouse)'
        }
      ],
      types: [
        {
          category: 'Backpacker Hostel Dorm (Bunk bed)',
          estimatedPerNightPerPerson: 420,
          safetyNotes: 'Air conditioned, personal lockers, female dorms, clean shared washrooms.',
          topPicksOrBrands: ['goSTOPS Pondicherry', 'Micasa Hostels', 'Nomad House']
        },
        {
          category: 'Sri Aurobindo Ashram Guesthouse',
          estimatedPerNightPerPerson: 400,
          safetyNotes: 'Secure gates, strict 10 PM curfew, serene meditative atmosphere.',
          topPicksOrBrands: ['Park Guesthouse (Beach Road)', 'Cottage Guesthouse']
        }
      ]
    },
    itinerary: [
      {
        dayNumber: 1,
        theme: 'French Heritage Walk, Promenade Sunset & Cafe Culture',
        geographicalArea: 'White Town (French Quarter) & Goubert Avenue',
        activities: [
          {
            timeSlot: 'Morning',
            placeName: 'Arrive & Stroll through Pastel French Quarter',
            description: 'Check in, pick up bicycles, and pedal past mustard-yellow colonial villas, bougainvillea-draped archways, and quiet cobblestone avenues named Rue Dumas and Rue Suffren.',
            approxDuration: '2.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk from bus stand to hostel (1 km)',
            transitCost: 0,
            budgetTip: 'Free self-guided walking map available from INTACH office on Rue Saint Louis.'
          },
          {
            timeSlot: 'Afternoon',
            placeName: 'Sri Aurobindo Ashram & French Bakery Lunch',
            description: 'Visit the peaceful flower-adorned Samadhi of Sri Aurobindo and The Mother. Afterwards, enjoy fresh baguettes, quiche, or croissants with cold coffee.',
            approxDuration: '2 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Cycle 5 mins',
            transitCost: 0,
            budgetTip: 'Ashram entry is free. Eat fresh croissants at Baker Street or local cafe for under ₹120.'
          },
          {
            timeSlot: 'Evening',
            placeName: 'Rock Beach / Promenade Seaside Golden Hour',
            description: 'Goubert Avenue is closed to motorized vehicles every evening from 6 PM to 7:30 AM! Enjoy the car-free ocean promenade, ocean breeze, and the French War Memorial.',
            approxDuration: '3 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk 100 meters',
            transitCost: 0,
            budgetTip: 'Enjoy ₹30 sundal (steamed seasoned chickpeas) and ₹40 filter coffee while watching waves crash against the black basalt sea wall.'
          },
          {
            timeSlot: 'Night',
            placeName: 'Chettinad Spicy Dinner in Heritage Tamil Quarter',
            description: 'Feast on authentic mutton or pepper mushroom kothu parotta and dosas on MG Road.',
            approxDuration: '1.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Cycle / walk',
            transitCost: 0
          }
        ],
        dayTotalEntryFees: 0,
        dayTotalTransitCost: 90,
        walkingDistanceKm: 4.8
      },
      {
        dayNumber: 2,
        theme: 'Auroville Universal Township & Serenity Beach',
        geographicalArea: 'Auroville & Coastal North',
        activities: [
          {
            timeSlot: 'Morning',
            placeName: 'Auroville Visitors Centre & Matrimandir Viewpoint',
            description: 'Take a local bus to Auroville. Walk through the shaded forest path to the viewing platform of the giant golden sphere (Matrimandir), a marvel of modern spiritual architecture.',
            approxDuration: '3.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Local PRTC bus (₹15) or shared auto',
            transitCost: 35,
            budgetTip: 'The Matrimandir viewing point pass is 100% free at the Visitors Centre. Watch the introductory documentary in the AC hall.'
          },
          {
            timeSlot: 'Afternoon',
            placeName: 'Organic Wood-Fired Pizza & Kombucha in Auroville',
            description: 'Lunch at famous Tanteida or solar kitchen cafe serving fresh garden vegetables and sourdough pizza.',
            approxDuration: '1.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk / local bike',
            transitCost: 0,
            budgetTip: 'Eat at Auroville Bakery for fresh pies and wholewheat bread at minimal cost.'
          },
          {
            timeSlot: 'Evening',
            placeName: 'Serenity Beach & Surf Watching',
            description: 'Watch local surfers riding coastal waves along the rock pier. Take a dip in safe shallows and relax on golden sand.',
            approxDuration: '2.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Shared auto to Serenity beach (₹25)',
            transitCost: 25,
            budgetTip: 'Serenity Beach entry is free. Sip fresh coconut water for ₹40.'
          },
          {
            timeSlot: 'Night',
            placeName: 'Gelato Walk & Night Cycling in White Town',
            description: 'Treat yourself to authentic Italian gelato at GMT Gelateria on the beach road while listening to the sea.',
            approxDuration: '1.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Cycle',
            transitCost: 0
          }
        ],
        dayTotalEntryFees: 0,
        dayTotalTransitCost: 60,
        walkingDistanceKm: 5.2
      },
      {
        dayNumber: 3,
        theme: 'Sacred Heart Basilica, Sunday Market & Return',
        geographicalArea: 'South White Town & Bus Terminal',
        activities: [
          {
            timeSlot: 'Morning',
            placeName: 'Basilica of the Sacred Heart of Jesus',
            description: 'Admire rare Gothic architecture, 28 stained-glass panels depicting saints, and soaring vaulted ceilings constructed by French missionaries in 1907.',
            approxDuration: '1.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Cycle 1 km',
            transitCost: 0,
            budgetTip: 'Entry is free. Keep phones on silent mode.'
          },
          {
            timeSlot: 'Afternoon',
            placeName: 'Pondicherry Museum & Goubert Market Shopping',
            description: 'View Arikamedu Roman trade excavation artifacts and French bronze statues (₹10 entry). Pick up handmade Auroville incense, candles, and leather bags at wholesale cooperatives.',
            approxDuration: '2.5 hours',
            entryFeePerPerson: 10,
            isFree: false,
            travelMethodFromPrevious: 'Walk',
            transitCost: 0,
            budgetTip: 'Museum entry is only ₹10. Buy incense directly from Sri Aurobindo Ashram sales emporium for authentic price.'
          },
          {
            timeSlot: 'Evening',
            placeName: 'Final Beach Stroll & ECR Bus back to Chennai',
            description: 'Return rental cycle, collect luggage, and board the evening ECR bus back to Chennai, reaching before 9:30 PM.',
            approxDuration: '3.5 hours',
            entryFeePerPerson: 0,
            isFree: true,
            travelMethodFromPrevious: 'Walk to Pondy Bus Stand',
            transitCost: 140,
            budgetTip: 'Grab a packet of hot South Indian mixture and vadai at bus stand stall for ₹50.'
          }
        ],
        dayTotalEntryFees: 10,
        dayTotalTransitCost: 140,
        walkingDistanceKm: 4.0
      }
    ],
    foodPlan: {
      dailyBreakdown: {
        breakfast: { cost: 65, suggestions: 'Medu Vada, Ghee Pongal, or Idli with three varieties of chutneys at Surguru or Adyar Ananda Bhavan.' },
        lunch: { cost: 110, suggestions: 'Authentic Tamil vegetarian meals on banana leaf with poriyal, kootu, rasam, and appalam.' },
        eveningSnacks: { cost: 35, suggestions: 'Filter coffee in davarah-tumbler with hot onion bajji or fresh French brioche.' },
        dinner: { cost: 130, suggestions: 'Chettinad Kothu Parotta, wood-fired pizza slice, or Creole baguette sandwich.' },
        totalDailyCost: 340
      },
      mustTryDishes: [
        {
          name: 'Pondicherry Baguette & Croissant',
          description: 'Flaky, buttery French pastries and crisp baguettes baked using traditional woodfire techniques.',
          approxCost: 60,
          bestPlacesToTry: 'Baker Street or Auroville Bakery'
        },
        {
          name: 'Chettinad Kothu Parotta',
          description: 'Flaky layered flatbread shredded and stir-fried on a searing griddle with eggs, chicken or paneer, spiced salna, and fresh curry leaves.',
          approxCost: 90,
          bestPlacesToTry: 'Hot Breads or street stalls on MG Road'
        },
        {
          name: 'Traditional Filter Coffee in Davarah',
          description: 'Strong, frothy chicory-infused South Indian decoction served piping hot in brass tumbler and bowl.',
          approxCost: 25,
          bestPlacesToTry: 'Surguru Restaurant or Indian Coffee House'
        }
      ],
      budgetFoodHacks: [
        'Eat South Indian tiffins in the Tamil Quarter (Mission St/Heritage town); French Quarter restaurants charge 3x for simple pasta.',
        'Sri Aurobindo Ashram dining hall offers hygienic, balanced satvik meals for ₹60 if coupons are purchased in advance from the bureau.',
        'Refill water bottles at your hostel or ashram to save ₹50/day.'
      ]
    },
    budgetBreakdown: {
      items: [
        { category: 'To-and-Fro ECR State Bus (SETC / PRTC)', costPerPerson: 280, totalCost: 560, notes: 'Direct coastal ECR express bus roundtrip from Chennai', isFlexible: false },
        { category: 'Accommodation (2 Nights in Hostel / Ashram)', costPerPerson: 840, totalCost: 1680, notes: '₹420/night bunk bed in clean rated hostel with AC and lockers', isFlexible: true },
        { category: 'Food & Dining (3 Days @ ₹340/day)', costPerPerson: 1020, totalCost: 2040, notes: 'Breakfasts, banana leaf lunches, French bakery treats, filter coffee', isFlexible: true },
        { category: 'Local Transportation (Bicycles & Buses)', costPerPerson: 290, totalCost: 580, notes: '3 days bicycle rental (₹240) + local bus to Auroville & return', isFlexible: true },
        { category: 'Entry Fees (Pondicherry Museum)', costPerPerson: 10, totalCost: 20, notes: 'Promenade, Auroville Matrimandir viewpoint, and beaches are free', isFlexible: false },
        { category: 'Souvenirs (Auroville Incense & Handmade Paper)', costPerPerson: 180, totalCost: 360, notes: 'Incense sticks and handmade bookmarks from ashram outlet', isFlexible: true },
        { category: 'Emergency Buffer Cushion (12%)', costPerPerson: 380, totalCost: 760, notes: 'Safety fund for punctures or emergency auto', isFlexible: true }
      ],
      totalTripCost: 6000,
      totalCostPerPerson: 3000,
      minimumBarebonesCost: 2350,
      comfortableCost: 3800,
      recommendedBuffer: 500,
      withinUserBudget: true,
      savingsOrDeficit: 500
    },
    moneySavingTips: [
      {
        title: 'Rent a Bicycle on Day 1',
        description: 'Auto drivers in Pondicherry do not use meters and charge ₹150 for even a 1 km ride. A rental bicycle costs just ₹80-90 for 24 hours and is the most charming way to see the town.',
        estimatedSavings: '₹500 per person'
      },
      {
        title: 'Take PRTC Bus to Auroville instead of Cabs',
        description: 'Private taxis ask ₹600-800 to drop at Auroville. Catch the PRTC town bus from the main stand for ₹15 to the junction, then take a shared auto for ₹20.',
        estimatedSavings: '₹450 per ride'
      },
      {
        title: 'Free Matrimandir Viewpoint Pass',
        description: 'Tour operators sell "guided Auroville tours" for ₹500. The Matrimandir viewing point pass is 100% free at the official Visitors Centre; never pay anyone for passes.',
        estimatedSavings: '₹500 per person'
      }
    ],
    safetyAndPracticalInfo: {
      safetyTips: [
        'Rock Beach / Promenade has dangerous underwater boulders and strong rip currents. Swimming is strictly prohibited along Goubert Avenue.',
        'Solo female travelers: White Town is very safe and well-patrolled; however, avoid unlit stretches of Serenity Beach and Auroville beach after 8:30 PM.',
        'Bicycles have simple padlocks; always lock your cycle to dedicated municipal bike rails on the promenade.',
        'Helpline numbers: Pondicherry Police Tourist Police: 112 / +91 413 2277701.'
      ],
      weatherAndBestTime: 'October to March is breezy and delightful (24°C - 30°C). April-June can be humid and hot (36°C+). Monsoon rains occur in October-November.',
      advanceBookingsNeeded: [
        'Hostel dorm bed during weekends',
        'If you wish to meditate inside the Matrimandir inner meditation chamber, booking must be made in person 2-3 days in advance at Auroville.'
      ],
      essentialPackingList: [
        { item: 'Light cotton shirts and breathable shorts', category: 'Clothing', importance: 'High' },
        { item: 'Sun hat and sunglasses for daytime cycling', category: 'Essentials', importance: 'High' },
        { item: 'Mosquito repellent lotion (Odomos) for Auroville greenery', category: 'Essentials', importance: 'High' },
        { item: 'Refillable steel water bottle', category: 'Essentials', importance: 'High' },
        { item: 'Compact umbrella or rain poncho', category: 'Essentials', importance: 'Medium' }
      ],
      scamsAndTrapsToAvoid: [
        {
          scam: 'Auto drivers charging flat ₹250 from bus stand to White Town',
          prevention: 'White Town is just 1.2 km away. Walk 12 minutes or take a shared battery rickshaw for ₹15.'
        },
        {
          scam: 'Counterfeit "Auroville Essential Oils" sold on Beach Road',
          prevention: 'Authentic Auroville products are sold exclusively at certified Boutiques (Auroville Visitors Centre, La Boutique d’Auroville).'
        }
      ]
    },
    alternativePlans: {
      cheaperItineraryNotes: [
        'Stay at Sri Aurobindo Ashram Guesthouses (₹350-400/night).',
        'Eat at ashram dining hall for lunch (₹60) and Udupi mess for dinner.',
        'Total trip cost can easily be brought down to ₹2,350 per person.'
      ],
      badWeatherBackupPlan: {
        rainyDayItinerary: [
          'Visit Pondicherry Museum and the French Institute library.',
          'Relax at covered French colonial cafes with hot chocolate and croissants.',
          'Explore indoor boutique art galleries and handicraft centers along Rue Romain Rolland.'
        ],
        indoorAttractions: ['Pondicherry Museum', 'French Institute of Pondicherry', 'Cluny Embroidery Centre'],
        rainSafetyTips: 'Promenade waves can breach sea walls during storm surges; stay behind the pedestrian railings.'
      },
      alternativeDestinations: [
        {
          name: 'Mahabalipuram (Mamallapuram)',
          vibe: 'UNESCO shore temple, monolithic Pancha Rathas, Krishna’s Butterball, beach cafes',
          estimatedCostPerPerson: 2200,
          whyCheaper: 'Only 55 km from Chennai; ₹50 bus fare; everything is reachable on foot.',
          idealDays: 2
        },
        {
          name: 'Yercaud Hill Station',
          vibe: 'Lush coffee estates, emerald lake boating, cool mountain weather without Ooty crowds',
          estimatedCostPerPerson: 3600,
          whyCheaper: 'Direct train to Salem + ₹40 ghat bus; low-cost budget lodges.',
          idealDays: 3
        },
        {
          name: 'Thanjavur & Kumbakonam',
          vibe: 'Grand Brihadeeswarar UNESCO Temple, bronze casting, South Indian temple heritage',
          estimatedCostPerPerson: 3200,
          whyCheaper: 'Very affordable train routes and famous ₹50 Thanjavur meals.',
          idealDays: 3
        }
      ]
    }
  }
];

export const DESTINATION_SUGGESTIONS: DestinationSuggestion[] = [
  {
    name: 'Gokarna, Karnataka',
    state: 'Karnataka',
    tagline: 'Secluded 5-beach cliff trek, spiritual temple town & coastal shacks',
    estimatedBudgetPerPerson: 4200,
    distanceOrTransitTime: 'Overnight Sleeper Train from Bengaluru / Mumbai',
    cheapestWayToReach: 'Panchaganga Express Sleeper class (₹425) or KSRTC Non-AC Bus',
    bestForInterests: ['Beaches', 'Nature & Waterfalls', 'Temples & Spiritual', 'Photography'],
    feasibility: 'Fits Budget',
    highlight: 'Walk the scenic cliff trail connecting Kudle, Om, and Paradise beach for ₹0'
  },
  {
    name: 'Rishikesh & Haridwar',
    state: 'Uttarakhand',
    tagline: 'River rafting on the Ganges, evening aartis & Beatles Ashram',
    estimatedBudgetPerPerson: 3800,
    distanceOrTransitTime: '4.5 hours Jan Shatabdi from Delhi NCR',
    cheapestWayToReach: 'Jan Shatabdi Express 2S (₹185) or UTC Ordinary Bus',
    bestForInterests: ['Adventure Sports', 'Temples & Spiritual', 'Nature & Waterfalls'],
    feasibility: 'Fits Budget',
    highlight: 'Grade III white-water river rafting for ₹650 & free Ganga sunset aarti'
  },
  {
    name: 'Hampi UNESCO Ruins',
    state: 'Karnataka',
    tagline: '14th-century Vijayanagara empire ruins, granite boulder hills & coracle rides',
    estimatedBudgetPerPerson: 5200,
    distanceOrTransitTime: 'Overnight train from Mumbai / Bengaluru / Hyderabad',
    cheapestWayToReach: 'Direct Sleeper Train to Hospet (₹430) + ₹18 KSRTC local bus',
    bestForInterests: ['Historical & Forts', 'Temples & Spiritual', 'Photography'],
    feasibility: 'Fits Budget',
    highlight: 'Rent a bicycle for ₹120/day to explore 25 sq km of monuments'
  },
  {
    name: 'Pondicherry & Auroville',
    state: 'Tamil Nadu / UT',
    tagline: 'French colonial White Town, car-free seaside promenade & bicycle culture',
    estimatedBudgetPerPerson: 3500,
    distanceOrTransitTime: '3 hours scenic ECR bus from Chennai',
    cheapestWayToReach: 'SETC / PRTC State Bus via ECR (₹140)',
    bestForInterests: ['Historical & Forts', 'Beaches', 'Local Food & Street Bazaars', 'Photography'],
    feasibility: 'Fits Budget',
    highlight: 'Cycle through mustard-yellow French villas and free Promenade sunsets'
  },
  {
    name: 'Jaipur & Pushkar',
    state: 'Rajasthan',
    tagline: 'Majestic hill forts, pink-hued bazaars, sacred lake & royal palaces',
    estimatedBudgetPerPerson: 4200,
    distanceOrTransitTime: '4.5 hours Shatabdi / Double Decker from Delhi',
    cheapestWayToReach: 'Sleeper / 2S Express Train from Delhi (₹160-220)',
    bestForInterests: ['Historical & Forts', 'Local Food & Street Bazaars', 'Shopping & Handicrafts', 'Photography'],
    feasibility: 'Fits Budget',
    highlight: 'Composite fort ticket saves 60% on Amer, Nahargarh, and Hawa Mahal'
  },
  {
    name: 'Varkala & Alleppey',
    state: 'Kerala',
    tagline: 'Dramatic red cliff beaches, Arabian sunset & ₹25 government backwater ferry',
    estimatedBudgetPerPerson: 4600,
    distanceOrTransitTime: 'Overnight train from Bengaluru / Chennai / Kochi',
    cheapestWayToReach: 'Sleeper class train directly to Varkala Sivagiri Station (₹380)',
    bestForInterests: ['Beaches', 'Nature & Waterfalls', 'Local Food & Street Bazaars'],
    feasibility: 'Fits Budget',
    highlight: 'Ride the State Water Transport ferry through Kerala backwaters for only ₹25'
  },
  {
    name: 'Darjeeling & Mirik',
    state: 'West Bengal',
    tagline: 'Kanchenjunga sunrise, emerald tea gardens, steam toy train & steaming momos',
    estimatedBudgetPerPerson: 5500,
    distanceOrTransitTime: 'Overnight train from Kolkata to NJP + shared jeep',
    cheapestWayToReach: 'Padatik / Kamrup Express Sleeper to NJP (₹360) + shared jeep (₹250)',
    bestForInterests: ['Mountains & Treks', 'Nature & Waterfalls', 'Photography', 'Local Food & Street Bazaars'],
    feasibility: 'Fits Budget',
    highlight: 'Tiger Hill sunrise view of Mount Kanchenjunga & ₹60 authentic thukpa'
  }
];
