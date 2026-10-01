import React from 'react';
import { Sparkles, CloudRain, MapPin, ArrowRight, IndianRupee } from 'lucide-react';
import { AlternativePlans } from '../types/trip';

interface AlternativePlansCardProps {
  alternativePlans: AlternativePlans;
  onSelectAlternativeDestination: (destName: string) => void;
  isCheaperMode: boolean;
  isBadWeatherMode: boolean;
}

export const AlternativePlansCard: React.FC<AlternativePlansCardProps> = ({
  alternativePlans,
  onSelectAlternativeDestination,
  isCheaperMode,
  isBadWeatherMode
}) => {
  const { cheaperItineraryNotes, badWeatherBackupPlan, alternativeDestinations } = alternativePlans;

  return (
    <section className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span>Alternative Plans & Budget Backups</span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Cheaper itinerary adjustments, rain/monsoon contingencies & 3 budget-friendly alternative destinations
          </p>
        </div>
      </div>

      {/* Cheaper Version Adjustments */}
      <div
        className={`p-4 rounded-xl border transition-all ${
          isCheaperMode
            ? 'bg-amber-50/80 border-amber-300 ring-2 ring-amber-300/40'
            : 'bg-stone-50/70 border-stone-200'
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>How to Make This Trip Even Cheaper (Ultra-Budget Mode)</span>
          </h3>
          {isCheaperMode && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-600 text-white">
              ACTIVE IN ITINERARY
            </span>
          )}
        </div>
        <ul className="space-y-1.5 text-xs text-stone-700">
          {cheaperItineraryNotes.map((note, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-amber-600 font-bold shrink-0">✓</span>
              <span className="leading-relaxed">{note}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bad Weather / Monsoon Contingency */}
      <div
        className={`p-4 rounded-xl border transition-all ${
          isBadWeatherMode
            ? 'bg-blue-50/80 border-blue-300 ring-2 ring-blue-300/40'
            : 'bg-stone-50/70 border-stone-200'
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center gap-1.5">
            <CloudRain className="w-4 h-4 text-blue-600" />
            <span>Backup Plan: Bad Weather, Rain or Unexpected Closures</span>
          </h3>
          {isBadWeatherMode && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-600 text-white">
              ACTIVE
            </span>
          )}
        </div>

        <div className="space-y-2 text-xs text-stone-700 mb-3">
          <div className="font-semibold text-stone-800">Sheltered / Indoor Route:</div>
          <ul className="space-y-1 pl-4 list-disc text-stone-600">
            {badWeatherBackupPlan.rainyDayItinerary.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-200/80 text-xs">
          <span className="text-stone-500 font-medium">Indoor Spots:</span>
          {badWeatherBackupPlan.indoorAttractions.map((spot, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-white border border-stone-200 rounded text-stone-700"
            >
              {spot}
            </span>
          ))}
        </div>

        <div className="mt-2 text-[11px] text-blue-800 bg-blue-50/60 p-2 rounded border border-blue-200/50">
          🌧️ <span className="font-semibold">Weather Safety:</span> {badWeatherBackupPlan.rainSafetyTips}
        </div>
      </div>

      {/* 3 Alternative Destinations if Budget is Tight */}
      <div className="border-t border-stone-200 pt-5">
        <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-amber-600" />
          <span>3 Alternative Destinations Matching This Budget</span>
        </h3>
        <p className="text-xs text-stone-500 mb-4">
          If your destination feels tight or tickets are booked out, here are 3 equally stunning budget-friendly alternatives
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {alternativeDestinations.map((dest, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-1 mb-1">
                  <h4 className="font-bold text-sm text-stone-900">{dest.name}</h4>
                  <span className="text-xs font-extrabold text-stone-900 bg-white px-2 py-0.5 rounded border border-stone-200 shrink-0">
                    ₹{dest.estimatedCostPerPerson.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="text-[11px] text-stone-500 mb-2 italic">{dest.vibe}</div>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  <strong className="text-emerald-800">Why it's cheaper:</strong> {dest.whyCheaper}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onSelectAlternativeDestination(dest.name)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200/70 transition-colors cursor-pointer"
              >
                <span>Switch to {dest.name.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
