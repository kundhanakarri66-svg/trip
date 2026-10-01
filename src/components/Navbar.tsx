import React from 'react';
import { Compass, Sparkles, SlidersHorizontal, MapPin } from 'lucide-react';
import { TripPlan } from '../types/trip';

interface NavbarProps {
  curatedTrips: TripPlan[];
  selectedTripId: string;
  onSelectTrip: (id: string) => void;
  onOpenCustomModal: () => void;
  onOpenExploreModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  curatedTrips,
  selectedTripId,
  onSelectTrip,
  onOpenCustomModal,
  onOpenExploreModal
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-sm">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-stone-900 font-sans">
                  Yatri<span className="text-amber-600">Budget</span>
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/60">
                  ₹ INR
                </span>
              </div>
              <p className="text-xs text-stone-500 hidden sm:block">
                Authentic, Practical & Safe Budget Travel Planner for India
              </p>
            </div>
          </div>

          {/* Quick Curated Selector & CTA buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Trip Dropdown */}
            <div className="relative hidden md:block">
              <select
                aria-label="Select curated budget trip"
                value={selectedTripId}
                onChange={(e) => onSelectTrip(e.target.value)}
                className="text-xs font-medium bg-stone-100 hover:bg-stone-200/80 text-stone-800 py-2 pl-3 pr-8 rounded-lg border-0 cursor-pointer focus:ring-2 focus:ring-amber-500 transition-colors"
              >
                <option value="" disabled>
                  Popular Budget Itineraries
                </option>
                {curatedTrips.map((trip) => (
                  <option key={trip.id} value={trip.id}>
                    {trip.destination.split(',')[0]} (₹{trip.budgetBreakdown.totalCostPerPerson.toLocaleString('en-IN')})
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={onOpenExploreModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Explore Ideas</span>
            </button>

            <button
              onClick={onOpenCustomModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Plan Custom Trip</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
