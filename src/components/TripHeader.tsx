import React, { useState } from 'react';
import {
  MapPin,
  Calendar,
  Users,
  IndianRupee,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  CloudRain,
  SlidersHorizontal,
  Printer,
  Copy,
  Check,
  ArrowRight
} from 'lucide-react';
import { TripPlan } from '../types/trip';

interface TripHeaderProps {
  plan: TripPlan;
  isCheaperMode: boolean;
  onToggleCheaperMode: () => void;
  isBadWeatherMode: boolean;
  onToggleBadWeatherMode: () => void;
  onOpenCustomModal: () => void;
}

export const TripHeader: React.FC<TripHeaderProps> = ({
  plan,
  isCheaperMode,
  onToggleCheaperMode,
  isBadWeatherMode,
  onToggleBadWeatherMode,
  onOpenCustomModal
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyItinerary = () => {
    const text = `🌴 ${plan.title} (${plan.durationDays} Days / ${plan.durationDays - 1} Nights)
📍 Route: ${plan.startingLocation} ➔ ${plan.destination}
💰 Budget per person: ₹${plan.budgetBreakdown.totalCostPerPerson.toLocaleString('en-IN')} (Total: ₹${plan.budgetBreakdown.totalTripCost.toLocaleString('en-IN')} for ${plan.numTravelers} travelers)
🚆 Transit: ${plan.transportation.cheapestRecommendation}
🏨 Stay: ₹${plan.accommodation.types[0]?.estimatedPerNightPerPerson || 450}/night in ${plan.accommodation.recommendedAreas[0]?.areaName || 'Town center'}
🍲 Daily Food: ~₹${plan.foodPlan.dailyBreakdown.totalDailyCost}/day
🛡️ Emergency Buffer: ₹${plan.budgetBreakdown.recommendedBuffer.toLocaleString('en-IN')}
💡 Top Hack: ${plan.moneySavingTips[0]?.description || 'Book IRCTC Sleeper early'}

Plan created with YatriBudget`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const isWithinBudget = plan.budgetBreakdown.withinUserBudget;
  const savings = plan.budgetBreakdown.savingsOrDeficit;

  return (
    <div className="bg-white border-b border-stone-200 pt-6 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Meta Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
            <span className="flex items-center gap-1 text-stone-700">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              {plan.startingLocation}
            </span>
            <span aria-hidden="true">➔</span>
            <span className="text-amber-800 font-bold">{plan.destination}</span>
            <span aria-hidden="true">·</span>
            <span>{plan.durationDays} Days</span>
            <span aria-hidden="true">·</span>
            <span>{plan.numTravelers} {plan.numTravelers === 1 ? 'Traveler' : 'Travelers'}</span>
          </div>

          {/* Quick utility actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyItinerary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors"
              title="Copy itinerary summary for WhatsApp"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Share / Copy</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onOpenCustomModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200/70 rounded-lg transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Modify Inputs</span>
            </button>
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            {plan.title}
          </h1>
          <p className="mt-1.5 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            {plan.tagline}
          </p>
        </div>

        {/* Destination Suitability & Feasibility Banner */}
        <div
          className={`p-4 rounded-xl border mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
            isWithinBudget
              ? 'bg-emerald-50/70 border-emerald-200/80 text-emerald-950'
              : 'bg-amber-50/80 border-amber-200 text-amber-950'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0">
              {isWithinBudget ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              ) : (
                <AlertCircle className="w-5 h-5 text-amber-600" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm">
                  {plan.destinationSuitability.verdict}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/80 border border-current">
                  {isWithinBudget
                    ? `₹${Math.abs(savings).toLocaleString('en-IN')} Under Budget`
                    : `₹${Math.abs(savings).toLocaleString('en-IN')} Above Target`}
                </span>
              </div>
              <p className="text-xs mt-0.5 text-stone-700 leading-relaxed">
                {plan.destinationSuitability.reason}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
            <span className="text-xs font-medium text-stone-600">Style:</span>
            <span className="text-xs font-semibold px-2 py-1 bg-white rounded-md border border-stone-200 text-stone-800">
              {plan.travelStyle}
            </span>
          </div>
        </div>

        {/* 3 Core Financial Indicator Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {/* Card 1: Minimum Barebones */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">
              Minimum Barebones Budget
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-stone-800">
                ₹{plan.budgetBreakdown.minimumBarebonesCost.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-stone-500">/ person</span>
            </div>
            <p className="text-[11px] text-stone-500 mt-1">
              Sleeper train + ashram/dorm + local mess food only
            </p>
          </div>

          {/* Card 2: Planned Cost */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-300/80 shadow-xs relative overflow-hidden">
            <div className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center justify-between">
              <span>Target Planned Trip Cost</span>
              <span className="text-[10px] px-1.5 py-0.5 bg-amber-200/60 rounded text-amber-900 font-semibold">
                RECOMMENDED
              </span>
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-amber-950">
                ₹{plan.budgetBreakdown.totalCostPerPerson.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-amber-800 font-medium">/ person</span>
            </div>
            <div className="text-[11px] text-amber-900/80 mt-1 font-medium">
              Total: ₹{plan.budgetBreakdown.totalTripCost.toLocaleString('en-IN')} for {plan.numTravelers} {plan.numTravelers === 1 ? 'traveler' : 'travelers'}
            </div>
          </div>

          {/* Card 3: Comfortable Budget & Buffer */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">
              Comfortable Budget + Buffer
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-stone-800">
                ₹{plan.budgetBreakdown.comfortableCost.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-stone-500">/ person</span>
            </div>
            <p className="text-[11px] text-stone-600 mt-1">
              Carry <strong className="text-stone-800">₹{plan.budgetBreakdown.recommendedBuffer.toLocaleString('en-IN')}</strong> in cash/UPI as emergency buffer
            </p>
          </div>
        </div>

        {/* Alternative Plan Mode Toggles */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button
            onClick={onToggleCheaperMode}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isCheaperMode
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ultra-Budget Cheaper Mode {isCheaperMode ? '(Active)' : ''}</span>
          </button>

          <button
            onClick={onToggleBadWeatherMode}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isBadWeatherMode
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <CloudRain className="w-3.5 h-3.5" />
            <span>Rain / Bad Weather Backup Plan {isBadWeatherMode ? '(Active)' : ''}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
