import React from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight, Train, Tag } from 'lucide-react';
import { DestinationSuggestion } from '../types/trip';

interface DestinationSuggestionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  suggestions: DestinationSuggestion[];
  currentBudgetPerPerson: number;
  onSelectDestination: (destName: string) => void;
}

export const DestinationSuggestionsModal: React.FC<DestinationSuggestionsModalProps> = ({
  isOpen,
  onClose,
  suggestions,
  currentBudgetPerPerson,
  onSelectDestination
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-stone-200">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between z-10">
          <div>
            <h2 className="text-lg font-bold text-stone-900">Recommended Indian Budget Destinations</h2>
            <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
              <span>Tailored for budget around ₹{currentBudgetPerPerson.toLocaleString('en-IN')} / person</span>
              <span aria-hidden="true">·</span>
              <span>Sorted by feasibility & value</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 p-1.5 rounded-lg hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {suggestions.map((item) => {
            const isWithinBudget = currentBudgetPerPerson >= item.estimatedBudgetPerPerson;
            const diff = Math.abs(currentBudgetPerPerson - item.estimatedBudgetPerPerson);

            return (
              <div
                key={item.name}
                className="bg-stone-50/70 border border-stone-200 hover:border-amber-400/80 rounded-xl p-4 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-bold text-base text-stone-900">{item.name}</h3>
                      <p className="text-xs text-stone-500">{item.state}</p>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-extrabold text-stone-900">
                        ₹{item.estimatedBudgetPerPerson.toLocaleString('en-IN')}
                      </div>
                      <div className="text-[11px] text-stone-500">estimated / person</div>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                    {item.tagline}
                  </p>

                  {/* Highlights & Transit */}
                  <div className="space-y-2 mb-4 bg-white/80 rounded-lg p-2.5 border border-stone-200/60 text-xs">
                    <div className="flex items-start gap-1.5 text-stone-700">
                      <Train className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item.cheapestWayToReach}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-stone-600">
                      <Tag className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item.highlight}</span>
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="flex flex-wrap gap-1 mb-4 text-[11px] text-stone-500">
                    {item.bestForInterests.map((interest) => (
                      <span key={interest} className="px-2 py-0.5 bg-stone-200/60 rounded text-stone-700">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer action with budget badge */}
                <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-medium">
                    {isWithinBudget ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">
                          ₹{diff.toLocaleString('en-IN')} under budget
                        </span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                        <span className="text-amber-700 font-medium">
                          Tight fit (₹{diff.toLocaleString('en-IN')} stretch)
                        </span>
                      </>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      onSelectDestination(item.name);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline cursor-pointer"
                  >
                    <span>Plan this trip</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
