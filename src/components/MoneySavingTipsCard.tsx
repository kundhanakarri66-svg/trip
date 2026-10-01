import React from 'react';
import { Lightbulb, Sparkles, TrendingDown, Tag } from 'lucide-react';
import { MoneySavingTip } from '../types/trip';

interface MoneySavingTipsCardProps {
  tips: MoneySavingTip[];
}

export const MoneySavingTipsCard: React.FC<MoneySavingTipsCardProps> = ({ tips }) => {
  return (
    <section className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            <span>Practical Money-Saving Hacks</span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Proven strategies to cut trip costs without compromising safety, cleanliness, or comfort
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-extrabold shrink-0">
                    {idx + 1}
                  </span>
                  <span>{tip.title}</span>
                </h3>

                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 shrink-0">
                  Save {tip.estimatedSavings}
                </span>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                {tip.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
