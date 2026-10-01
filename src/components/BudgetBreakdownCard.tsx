import React, { useState } from 'react';
import {
  Wallet,
  IndianRupee,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sliders,
  ShieldAlert,
  ArrowDownCircle,
  TrendingDown
} from 'lucide-react';
import { BudgetBreakdown } from '../types/trip';

interface BudgetBreakdownCardProps {
  breakdown: BudgetBreakdown;
  numTravelers: number;
  userBudget: number;
}

export const BudgetBreakdownCard: React.FC<BudgetBreakdownCardProps> = ({
  breakdown,
  numTravelers,
  userBudget
}) => {
  const [showNotes, setShowNotes] = useState(false);

  const isUnderBudget = breakdown.withinUserBudget;
  const variance = Math.abs(breakdown.savingsOrDeficit);

  return (
    <section className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-amber-600" />
            <span>Complete Estimated Budget Breakdown (₹ INR)</span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Itemized cost accounting across all travel categories with cost per person & group totals
          </p>
        </div>

        <button
          onClick={() => setShowNotes(!showNotes)}
          className="text-xs font-semibold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200/60 transition-colors self-start sm:self-auto cursor-pointer"
        >
          {showNotes ? 'Hide Item Notes' : 'Show Item Details'}
        </button>
      </div>

      {/* Progress & Target Comparison Bar */}
      <div className="mb-6 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-700">Planned Total Cost:</span>
            <span className="text-sm font-extrabold text-stone-900">
              ₹{breakdown.totalTripCost.toLocaleString('en-IN')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-stone-500">Your Target Budget:</span>
            <span className="font-bold text-stone-800">
              ₹{userBudget.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Visual Bar */}
        <div className="w-full bg-stone-200 rounded-full h-2.5 overflow-hidden">
          <div
            className={`h-2.5 rounded-full transition-all duration-500 ${
              isUnderBudget ? 'bg-emerald-600' : 'bg-amber-600'
            }`}
            style={{
              width: `${Math.min(100, Math.round((breakdown.totalTripCost / userBudget) * 100))}%`
            }}
          />
        </div>

        <div className="mt-2 flex items-center justify-between text-[11px]">
          <span className="text-stone-500">
            {Math.round((breakdown.totalTripCost / userBudget) * 100)}% of your budget allocated
          </span>
          <span
            className={`font-semibold ${
              isUnderBudget ? 'text-emerald-700' : 'text-amber-700'
            }`}
          >
            {isUnderBudget
              ? `₹${variance.toLocaleString('en-IN')} savings remaining`
              : `₹${variance.toLocaleString('en-IN')} exceeds target`}
          </span>
        </div>
      </div>

      {/* Complete Itemized Table */}
      <div className="overflow-x-auto rounded-xl border border-stone-200 mb-6">
        <table className="w-full text-left text-xs">
          <thead className="bg-stone-100/80 text-stone-700 font-bold uppercase tracking-wider text-[11px] border-b border-stone-200">
            <tr>
              <th scope="col" className="px-4 py-3">Expense Category</th>
              <th scope="col" className="px-4 py-3 text-right">Cost Per Person</th>
              <th scope="col" className="px-4 py-3 text-right">Total ({numTravelers} {numTravelers === 1 ? 'person' : 'people'})</th>
              {showNotes && <th scope="col" className="px-4 py-3">Booking & Real-world Notes</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 text-stone-700">
            {breakdown.items.map((item, idx) => (
              <tr key={idx} className="hover:bg-stone-50/70 transition-colors">
                <td className="px-4 py-3 font-semibold text-stone-900">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>{item.category}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-medium">
                  ₹{item.costPerPerson.toLocaleString('en-IN')}
                </td>
                <td className="px-4 py-3 text-right font-bold text-stone-900">
                  ₹{item.totalCost.toLocaleString('en-IN')}
                </td>
                {showNotes && (
                  <td className="px-4 py-3 text-stone-500 text-[11px]">
                    {item.notes}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
          {/* Table Footer Totals */}
          <tfoot className="bg-amber-50/70 text-stone-900 font-extrabold border-t-2 border-amber-300 text-xs sm:text-sm">
            <tr>
              <td className="px-4 py-3 uppercase tracking-wider text-amber-950">
                Grand Total (All Inclusive)
              </td>
              <td className="px-4 py-3 text-right text-amber-950 font-black">
                ₹{breakdown.totalCostPerPerson.toLocaleString('en-IN')}
              </td>
              <td className="px-4 py-3 text-right text-amber-950 font-black">
                ₹{breakdown.totalTripCost.toLocaleString('en-IN')}
              </td>
              {showNotes && <td className="px-4 py-3 text-[11px] font-normal text-amber-900">Includes emergency cushion</td>}
            </tr>
          </tfoot>
        </table>
      </div>

      {/* 3 Explicit Budget Threshold Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-stone-200 pt-6">
        {/* 1. Minimum Budget */}
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
              <span>Minimum Budget</span>
              <TrendingDown className="w-4 h-4 text-stone-400" />
            </div>
            <div className="text-2xl font-black text-stone-900">
              ₹{breakdown.minimumBarebonesCost.toLocaleString('en-IN')}
            </div>
            <div className="text-[11px] text-stone-500">per person</div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Achieved by taking Sleeper class (SL) trains, staying in ashrams/dharamsalas, walking between sights, and eating pure vegetarian thalis.
            </p>
          </div>
        </div>

        {/* 2. Comfortable Budget */}
        <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-300/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
              <span>Comfortable Budget</span>
              <CheckCircle2 className="w-4 h-4 text-amber-700" />
            </div>
            <div className="text-2xl font-black text-amber-950">
              ₹{breakdown.comfortableCost.toLocaleString('en-IN')}
            </div>
            <div className="text-[11px] text-amber-800">per person</div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Provides leeway for 3AC train upgrade, AC hostel dorms, private room splits, artisan snacks, and rental moped fuel.
            </p>
          </div>
        </div>

        {/* 3. Recommended Buffer to Carry */}
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
              <span>Recommended Buffer to Carry</span>
              <ShieldAlert className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-black text-emerald-800">
              ₹{breakdown.recommendedBuffer.toLocaleString('en-IN')}
            </div>
            <div className="text-[11px] text-stone-500">per person (Cash + UPI)</div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Keep 50% in physical small ₹50/100/500 cash notes (for remote stalls/shared autos without signal) and 50% on UPI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
