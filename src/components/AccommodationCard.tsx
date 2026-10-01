import React from 'react';
import { Bed, ShieldCheck, MapPin, IndianRupee, Check, Info } from 'lucide-react';
import { AccommodationArea, AccommodationType } from '../types/trip';

interface AccommodationCardProps {
  recommendedAreas: AccommodationArea[];
  types: AccommodationType[];
  numTravelers: number;
}

export const AccommodationCard: React.FC<AccommodationCardProps> = ({
  recommendedAreas,
  types,
  numTravelers
}) => {
  return (
    <section className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <Bed className="w-5 h-5 text-amber-600" />
            <span>Accommodation & Safe Neighborhoods</span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Verified safe locations, verified budget options & genuine per-night rates
          </p>
        </div>
      </div>

      {/* Recommended Safe & Affordable Areas */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
          Recommended Safe & Affordable Areas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendedAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-stone-50/70 border border-stone-200 rounded-xl p-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                    <h4 className="text-sm font-bold text-stone-900">{area.areaName}</h4>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-800 rounded border border-emerald-200/60 shrink-0">
                    {area.safetyRating}
                  </span>
                </div>

                <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                  {area.whyStayHere}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs">
                <span className="text-stone-500">Available: {area.typesAvailable}</span>
                <div className="text-right">
                  <span className="text-stone-500 text-[11px]">Avg: </span>
                  <strong className="text-stone-900 font-extrabold">
                    ₹{area.approxPricePerNight.toLocaleString('en-IN')}
                  </strong>
                  <span className="text-stone-500 text-[10px]">/night</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accommodation Categories & Top Picks */}
      <div className="border-t border-stone-200 pt-5">
        <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
          Accommodation Categories & Safety Standards
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {types.map((type, idx) => (
            <div key={idx} className="border border-stone-200 rounded-xl p-4 bg-white shadow-2xs">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="text-sm font-bold text-stone-900">{type.category}</h4>
                <div className="text-right">
                  <div className="text-sm font-extrabold text-stone-900">
                    ₹{type.estimatedPerNightPerPerson.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-stone-500">per person / night</div>
                </div>
              </div>

              {/* Safety Notes */}
              <div className="bg-stone-50 rounded-lg p-2.5 mb-3 border border-stone-200/60 text-xs text-stone-600 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{type.safetyNotes}</span>
              </div>

              {/* Verified Brands / Picks */}
              <div>
                <div className="text-[11px] font-semibold text-stone-500 mb-1">
                  Recommended Stays & Chains:
                </div>
                <div className="flex flex-wrap gap-1">
                  {type.topPicksOrBrands.map((brand, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-xs px-2 py-0.5 bg-amber-50 text-amber-900 rounded font-medium border border-amber-200/50"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety & Luggage Tip */}
      <div className="mt-4 p-3 bg-stone-100/70 rounded-xl text-xs text-stone-600 flex items-start gap-2 border border-stone-200/60">
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <span>
          <strong>Pro-Tip for Hostels:</strong> Always bring a small brass or combination padlock (₹30-50). Most reputable backpacker hostels (Zostel, goSTOPS, Hosteller) provide under-bed metal lockers, but you must supply your own lock.
        </span>
      </div>
    </section>
  );
};
