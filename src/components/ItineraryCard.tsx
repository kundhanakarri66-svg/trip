import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  IndianRupee,
  Footprints,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Tag,
  CheckCircle2,
  Compass
} from 'lucide-react';
import { DayItinerary } from '../types/trip';

interface ItineraryCardProps {
  itinerary: DayItinerary[];
  isCheaperMode?: boolean;
}

export const ItineraryCard: React.FC<ItineraryCardProps> = ({
  itinerary,
  isCheaperMode = false
}) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [expandedAll, setExpandedAll] = useState<boolean>(true);

  const getTimeSlotColor = (slot: string) => {
    switch (slot) {
      case 'Morning':
        return 'bg-amber-50 text-amber-900 border-amber-200';
      case 'Afternoon':
        return 'bg-orange-50 text-orange-900 border-orange-200';
      case 'Evening':
        return 'bg-purple-50 text-purple-900 border-purple-200';
      case 'Night':
        return 'bg-indigo-50 text-indigo-900 border-indigo-200';
      default:
        return 'bg-stone-50 text-stone-900 border-stone-200';
    }
  };

  return (
    <section className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-600" />
            <span>Geographically Arranged Day-by-Day Itinerary</span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Sights grouped by geographical clusters to eliminate backtracking & minimize transit costs
          </p>
        </div>

        {/* Day selection tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {itinerary.map((day) => (
            <button
              key={day.dayNumber}
              onClick={() => setActiveDay(day.dayNumber)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all shrink-0 cursor-pointer ${
                activeDay === day.dayNumber
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              Day {day.dayNumber}
            </button>
          ))}
        </div>
      </div>

      {/* Active Day Content */}
      {itinerary
        .filter((day) => day.dayNumber === activeDay)
        .map((day) => (
          <div key={day.dayNumber} className="space-y-6">
            {/* Day Header Banner */}
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-0.5">
                  <span>Day {day.dayNumber} Focus</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-stone-600">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    {day.geographicalArea}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-900">{day.theme}</h3>
              </div>

              {/* Day Metrics */}
              <div className="flex items-center gap-4 text-xs font-medium text-stone-600 border-t md:border-t-0 md:border-l border-stone-200 pt-2 md:pt-0 md:pl-4">
                {day.walkingDistanceKm !== undefined && (
                  <div className="flex items-center gap-1.5">
                    <Footprints className="w-4 h-4 text-stone-400" />
                    <span>~{day.walkingDistanceKm} km walk</span>
                  </div>
                )}
                <div>
                  <span className="text-stone-400">Entry: </span>
                  <strong className="text-stone-900">
                    {day.dayTotalEntryFees === 0 ? '₹0 (Free)' : `₹${day.dayTotalEntryFees}`}
                  </strong>
                </div>
                <div>
                  <span className="text-stone-400">Transit: </span>
                  <strong className="text-stone-900">₹{day.dayTotalTransitCost}</strong>
                </div>
              </div>
            </div>

            {/* Activities Timeline */}
            <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-stone-200">
              {day.activities.map((act, actIdx) => (
                <div key={actIdx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-6 sm:-left-8 top-1.5 w-3 h-3 rounded-full bg-amber-600 ring-4 ring-white shadow-2xs" />

                  {/* Activity Card */}
                  <div className="bg-stone-50/60 rounded-xl border border-stone-200/90 p-4 hover:border-amber-400/80 transition-all">
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getTimeSlotColor(
                            act.timeSlot
                          )}`}
                        >
                          {act.timeSlot}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-stone-900">
                          {act.placeName}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2 text-xs">
                        {act.isFree ? (
                          <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                            Entry: ₹0 Free
                          </span>
                        ) : (
                          <span className="font-bold text-stone-800 bg-white px-2 py-0.5 rounded border border-stone-200">
                            Ticket: ₹{act.entryFeePerPerson}
                          </span>
                        )}
                        <span className="text-stone-400 text-[11px] flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {act.approxDuration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                      {act.description}
                    </p>

                    {/* Transit method from previous */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-stone-200/70 text-xs">
                      <div className="flex items-center gap-1.5 text-stone-500">
                        <Compass className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>
                          <strong>Reach by:</strong> {act.travelMethodFromPrevious}
                        </span>
                        {act.transitCost > 0 && (
                          <span className="text-stone-700 font-semibold">
                            (~₹{act.transitCost})
                          </span>
                        )}
                      </div>

                      {/* Budget tip */}
                      {act.budgetTip && (
                        <div className="text-[11px] font-medium text-amber-900 bg-amber-50/80 px-2 py-1 rounded border border-amber-200/50">
                          💡 {act.budgetTip}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </section>
  );
};
