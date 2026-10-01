import React, { useState } from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  Sun,
  CalendarCheck,
  Luggage,
  CheckSquare,
  Square,
  HelpCircle
} from 'lucide-react';
import { SafetyAndPracticalInfo, PackingItem } from '../types/trip';

interface SafetyInfoCardProps {
  info: SafetyAndPracticalInfo;
}

export const SafetyInfoCard: React.FC<SafetyInfoCardProps> = ({ info }) => {
  const [packedItems, setPackedItems] = useState<{ [key: string]: boolean }>({});

  const togglePacked = (item: string) => {
    setPackedItems((prev) => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const categories = Array.from(new Set(info.essentialPackingList.map((p) => p.category)));

  return (
    <section className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Safety, Weather & Practical Checklist</span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Essential precautions, advance booking warnings, scam avoidance & interactive packing list
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Safety Precautions & Rules */}
        <div className="bg-stone-50/70 rounded-xl p-4 border border-stone-200">
          <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Key Safety & Solo/Female Travel Guidelines</span>
          </h3>
          <ul className="space-y-2 text-xs text-stone-600">
            {info.safetyTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold shrink-0">•</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Weather & Best Season */}
        <div className="bg-stone-50/70 rounded-xl p-4 border border-stone-200">
          <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sun className="w-4 h-4 text-amber-600" />
            <span>Weather & Seasonal Advice</span>
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed mb-4">
            {info.weatherAndBestTime}
          </p>

          <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-1.5 pt-2 border-t border-stone-200">
            <CalendarCheck className="w-4 h-4 text-blue-600" />
            <span>Book in Advance (Mandatory)</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-stone-600">
            {info.advanceBookingsNeeded.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-600 font-bold shrink-0">⚠</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tourist Traps & Scams to Avoid */}
      <div className="mb-6 bg-red-50/50 rounded-xl p-4 border border-red-200/60">
        <h3 className="text-xs font-bold text-red-950 uppercase tracking-wider mb-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-600" />
          <span>Common Tourist Traps & How to Avoid Them</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {info.scamsAndTrapsToAvoid.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-3 border border-red-200/80 shadow-2xs">
              <div className="text-xs font-bold text-stone-900 mb-1 leading-snug">
                🚨 {item.scam}
              </div>
              <div className="text-[11px] text-stone-600 leading-relaxed pt-1.5 border-t border-stone-100">
                <strong className="text-emerald-700">What to do:</strong> {item.prevention}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Packing Checklist */}
      <div className="border-t border-stone-200 pt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
            <Luggage className="w-4 h-4 text-amber-600" />
            <span>Essential Packing Checklist (Tap to check off)</span>
          </h3>
          <span className="text-xs text-stone-500 font-medium">
            {Object.values(packedItems).filter(Boolean).length} / {info.essentialPackingList.length} packed
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {info.essentialPackingList.map((item, idx) => {
            const isPacked = packedItems[item.item] || false;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => togglePacked(item.item)}
                className={`p-2.5 rounded-lg border text-left flex items-start gap-2.5 transition-all cursor-pointer ${
                  isPacked
                    ? 'bg-emerald-50/70 border-emerald-300 text-stone-500 line-through'
                    : 'bg-stone-50 border-stone-200 text-stone-800 hover:border-amber-400'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isPacked ? (
                    <CheckSquare className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Square className="w-4 h-4 text-stone-400" />
                  )}
                </div>
                <div>
                  <div className="text-xs font-medium leading-snug">{item.item}</div>
                  <div className="text-[10px] text-stone-400 mt-0.5 flex items-center gap-1">
                    <span>{item.category}</span>
                    {item.importance === 'High' && (
                      <span className="text-amber-700 font-semibold">· High Priority</span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
