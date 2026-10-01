import React from 'react';
import { Utensils, Coffee, Sun, Sunset, Moon, Sparkles, CheckCircle2 } from 'lucide-react';
import { FoodPlan } from '../types/trip';

interface FoodPlanCardProps {
  foodPlan: FoodPlan;
}

export const FoodPlanCard: React.FC<FoodPlanCardProps> = ({ foodPlan }) => {
  const { dailyBreakdown, mustTryDishes, budgetFoodHacks } = foodPlan;

  return (
    <section className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            <span>Local Food Guide & Daily Meal Budget</span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Authentic regional delicacies, local thali joints & daily per-person meal allocation
          </p>
        </div>

        <div className="text-right">
          <div className="text-xs text-stone-500 font-medium">Daily Food Allocation</div>
          <div className="text-lg font-extrabold text-stone-900">
            ₹{dailyBreakdown.totalDailyCost.toLocaleString('en-IN')}
          </div>
          <div className="text-[10px] text-stone-400">per person / day</div>
        </div>
      </div>

      {/* Daily Meal Breakdown Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {/* Breakfast */}
        <div className="bg-amber-50/50 rounded-xl p-3.5 border border-amber-200/70 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                <Coffee className="w-4 h-4 text-amber-700" />
                <span>Breakfast & Chai</span>
              </div>
              <span className="text-xs font-extrabold text-stone-900">
                ₹{dailyBreakdown.breakfast.cost}
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              {dailyBreakdown.breakfast.suggestions}
            </p>
          </div>
        </div>

        {/* Lunch */}
        <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800">
                <Sun className="w-4 h-4 text-amber-600" />
                <span>Thali / Lunch</span>
              </div>
              <span className="text-xs font-extrabold text-stone-900">
                ₹{dailyBreakdown.lunch.cost}
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              {dailyBreakdown.lunch.suggestions}
            </p>
          </div>
        </div>

        {/* Evening Snacks */}
        <div className="bg-amber-50/50 rounded-xl p-3.5 border border-amber-200/70 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                <Sunset className="w-4 h-4 text-amber-700" />
                <span>Evening Chai & Snack</span>
              </div>
              <span className="text-xs font-extrabold text-stone-900">
                ₹{dailyBreakdown.eveningSnacks.cost}
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              {dailyBreakdown.eveningSnacks.suggestions}
            </p>
          </div>
        </div>

        {/* Dinner */}
        <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800">
                <Moon className="w-4 h-4 text-indigo-600" />
                <span>Dinner / Dhaba</span>
              </div>
              <span className="text-xs font-extrabold text-stone-900">
                ₹{dailyBreakdown.dinner.cost}
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              {dailyBreakdown.dinner.suggestions}
            </p>
          </div>
        </div>
      </div>

      {/* Must Try Regional Dishes */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
          Iconic Must-Try Regional Specialties
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {mustTryDishes.map((dish, idx) => (
            <div
              key={idx}
              className="border border-stone-200 rounded-xl p-4 bg-white shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h4 className="text-sm font-bold text-stone-900 leading-snug">{dish.name}</h4>
                  <span className="text-xs font-extrabold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 shrink-0">
                    ~₹{dish.approxCost}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  {dish.description}
                </p>
              </div>

              <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-100">
                <strong className="text-stone-700">Where locals eat:</strong> {dish.bestPlacesToTry}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Budget Food Hacks */}
      <div className="border-t border-stone-200 pt-4">
        <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Practical Indian Budget Food Hacks</span>
        </h3>
        <div className="space-y-1.5">
          {budgetFoodHacks.map((hack, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>{hack}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
