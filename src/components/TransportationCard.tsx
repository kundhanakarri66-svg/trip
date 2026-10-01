import React from 'react';
import { Train, Bus, Plane, Clock, IndianRupee, ShieldCheck, CheckCircle2, AlertCircle, Compass } from 'lucide-react';
import { TransportOption, LocalTransportOption } from '../types/trip';

interface TransportationCardProps {
  cheapestRecommendation: string;
  localTransitAdvice: string;
  options: TransportOption[];
  localTransportOptions: LocalTransportOption[];
}

export const TransportationCard: React.FC<TransportationCardProps> = ({
  cheapestRecommendation,
  localTransitAdvice,
  options,
  localTransportOptions
}) => {
  const getModeIcon = (mode: string) => {
    const lower = mode.toLowerCase();
    if (lower.includes('train') || lower.includes('rail')) return <Train className="w-5 h-5 text-amber-600" />;
    if (lower.includes('bus') || lower.includes('rtc')) return <Bus className="w-5 h-5 text-emerald-600" />;
    if (lower.includes('flight') || lower.includes('air')) return <Plane className="w-5 h-5 text-blue-600" />;
    return <Compass className="w-5 h-5 text-stone-600" />;
  };

  return (
    <section className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
      {/* Section Title */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <Train className="w-5 h-5 text-amber-600" />
            <span>Transportation & Transit Plan</span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Cheapest practical intercity routes, class comparisons & low-cost local mobility
          </p>
        </div>
      </div>

      {/* Primary Cheapest Recommendation Callout */}
      <div className="mb-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-stone-800">
        <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-amber-700" />
          <span>Cheapest Practical Recommendation</span>
        </div>
        <p className="text-sm font-medium leading-relaxed text-amber-950">
          {cheapestRecommendation}
        </p>
      </div>

      {/* Transit Comparison Cards */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
          To-and-Fro Travel Comparison Matrix
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className={`rounded-xl border p-4 flex flex-col justify-between transition-all ${
                opt.isRecommended
                  ? 'border-amber-400 bg-amber-50/40 shadow-xs ring-1 ring-amber-300/50'
                  : 'border-stone-200 bg-stone-50/60'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-white shadow-2xs border border-stone-200">
                      {getModeIcon(opt.mode)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 leading-tight">
                        {opt.mode}
                      </h4>
                      <p className="text-[11px] text-stone-500">{opt.operatorDetails}</p>
                    </div>
                  </div>
                  {opt.isRecommended && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-600 text-white shrink-0">
                      BEST VALUE
                    </span>
                  )}
                </div>

                {/* Price and Travel Time */}
                <div className="my-3 py-2 border-y border-stone-200/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="text-stone-500 text-[11px]">Roundtrip Fare</div>
                    <div className="text-base font-extrabold text-stone-900">
                      ₹{opt.roundTripFarePerPerson.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] text-stone-400">(₹{opt.approxFarePerPerson}/one-way)</div>
                  </div>
                  <div className="text-right">
                    <div className="text-stone-500 text-[11px]">Travel Time</div>
                    <div className="font-semibold text-stone-800 flex items-center gap-1 justify-end">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span>{opt.travelTime}</span>
                    </div>
                  </div>
                </div>

                {/* Pros and Cons */}
                <div className="space-y-1.5 text-xs text-stone-600 mb-3">
                  <div className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span className="leading-snug">{opt.pros}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-amber-700 font-bold shrink-0">✕</span>
                    <span className="leading-snug">{opt.cons}</span>
                  </div>
                </div>
              </div>

              {/* Booking Tip */}
              <div className="pt-2.5 border-t border-stone-200 text-[11px] text-stone-500 bg-white/70 rounded p-2">
                <strong className="text-stone-700">Booking Tip:</strong> {opt.bookingTips}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local Transportation Advice */}
      <div className="border-t border-stone-200 pt-5">
        <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
          Economical Local Transportation
        </h3>
        <p className="text-xs text-stone-600 mb-4 leading-relaxed">
          {localTransitAdvice}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {localTransportOptions.map((local, idx) => (
            <div key={idx} className="bg-stone-50 rounded-xl p-3.5 border border-stone-200">
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="text-xs font-bold text-stone-900">{local.mode}</h4>
                <span className="text-xs font-bold text-stone-700">
                  {local.approxDailyCost === 0 ? '₹0 (Free)' : `~₹${local.approxDailyCost}/day`}
                </span>
              </div>
              <p className="text-xs text-stone-600 mb-2 leading-relaxed">
                {local.description}
              </p>
              <div className="text-[11px] font-medium text-amber-800 bg-amber-50 rounded px-2 py-1 border border-amber-200/50">
                💡 <span className="font-semibold">Local Tip:</span> {local.budgetTip}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
