import React, { useState } from 'react';
import { X, Sparkles, IndianRupee, Users, Calendar, MapPin, Compass, Train, Bed, ShieldCheck, Loader2 } from 'lucide-react';
import { POPULAR_STARTING_CITIES, INTEREST_OPTIONS } from '../data/curatedTrips';
import { TripFormData } from '../types/trip';

interface TripFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: TripFormData) => Promise<void>;
  isLoading: boolean;
}

export const TripFormModal: React.FC<TripFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading
}) => {
  const [formData, setFormData] = useState<TripFormData>({
    startingLocation: 'Bengaluru (Bangalore)',
    destination: 'Gokarna',
    numTravelers: 2,
    durationDays: 3,
    travelDates: 'Upcoming Weekend / Flexible',
    totalBudget: 8000,
    budgetPerPerson: 4000,
    travelStyle: 'Low-budget but safe and comfortable',
    interests: ['beaches', 'nature', 'temples', 'food'],
    preferredTransportation: 'Train (Sleeper/3AC) or State RTC Bus',
    accommodationPreference: 'Hostel / Budget Homestay'
  });

  const [suggestDestination, setSuggestDestination] = useState(false);

  if (!isOpen) return null;

  const handleNumTravelersChange = (val: number) => {
    const num = Math.max(1, Math.min(10, val));
    setFormData((prev) => ({
      ...prev,
      numTravelers: num,
      totalBudget: prev.budgetPerPerson * num
    }));
  };

  const handleBudgetPerPersonChange = (val: number) => {
    const perPerson = Math.max(500, val);
    setFormData((prev) => ({
      ...prev,
      budgetPerPerson: perPerson,
      totalBudget: perPerson * prev.numTravelers
    }));
  };

  const handleTotalBudgetChange = (val: number) => {
    const total = Math.max(500, val);
    setFormData((prev) => ({
      ...prev,
      totalBudget: total,
      budgetPerPerson: Math.round(total / Math.max(1, prev.numTravelers))
    }));
  };

  const toggleInterest = (id: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(id);
      const newInterests = exists
        ? prev.interests.filter((i) => i !== id)
        : [...prev.interests, id];
      return { ...prev, interests: newInterests };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({
      ...formData,
      destination: suggestDestination ? 'Suggest best destination within budget' : formData.destination
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900">Custom Budget Trip Planner</h2>
              <p className="text-xs text-stone-500">Plan a realistic, safe trip tailored to your Indian rupee budget</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 p-1.5 rounded-lg hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Starting Location & Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                Starting Location
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
                <input
                  type="text"
                  required
                  value={formData.startingLocation}
                  onChange={(e) => setFormData({ ...formData, startingLocation: e.target.value })}
                  placeholder="e.g. Bengaluru, Delhi NCR, Mumbai"
                  className="w-full pl-9 pr-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all text-stone-900"
                />
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {POPULAR_STARTING_CITIES.slice(0, 4).map((city) => (
                  <button
                    type="button"
                    key={city}
                    onClick={() => setFormData({ ...formData, startingLocation: city })}
                    className="text-[11px] px-2 py-0.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
                  >
                    {city.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                  Destination
                </label>
                <label className="text-[11px] text-amber-700 font-semibold cursor-pointer flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={suggestDestination}
                    onChange={(e) => setSuggestDestination(e.target.checked)}
                    className="rounded text-amber-600 focus:ring-amber-500 h-3 w-3"
                  />
                  Suggest for me
                </label>
              </div>
              <div className="relative">
                <Compass className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
                <input
                  type="text"
                  disabled={suggestDestination}
                  value={suggestDestination ? 'AI will suggest top destinations' : formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="e.g. Gokarna, Rishikesh, Hampi, Varkala"
                  className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg transition-all ${
                    suggestDestination
                      ? 'bg-amber-50/70 border-amber-200 text-amber-900 italic'
                      : 'bg-stone-50 border-stone-300 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-stone-900'
                  }`}
                />
              </div>
              {!suggestDestination && (
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {['Gokarna', 'Rishikesh', 'Hampi', 'Pondicherry', 'Jaipur'].map((dest) => (
                    <button
                      type="button"
                      key={dest}
                      onClick={() => setFormData({ ...formData, destination: dest })}
                      className="text-[11px] px-2 py-0.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
                    >
                      {dest}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Travelers & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                Travelers
              </label>
              <div className="relative">
                <Users className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.numTravelers}
                  onChange={(e) => handleNumTravelersChange(parseInt(e.target.value) || 1)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 text-stone-900"
                />
              </div>
              <p className="text-[11px] text-stone-500 mt-1">
                {formData.numTravelers === 1 ? 'Solo Backpacker' : formData.numTravelers === 2 ? 'Couple / 2 Friends' : `${formData.numTravelers} Travelers (Shared Split)`}
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                Trip Duration (Days)
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
                <input
                  type="number"
                  min="2"
                  max="12"
                  value={formData.durationDays}
                  onChange={(e) => setFormData({ ...formData, durationDays: parseInt(e.target.value) || 3 })}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 text-stone-900"
                />
              </div>
              <p className="text-[11px] text-stone-500 mt-1">
                {formData.durationDays - 1} nights / {formData.durationDays} days
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                Travel Dates / Season
              </label>
              <input
                type="text"
                value={formData.travelDates}
                onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                placeholder="e.g. Next Weekend, Nov 2026, Flexible"
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 text-stone-900"
              />
              <p className="text-[11px] text-stone-500 mt-1">Weather will adapt</p>
            </div>
          </div>

          {/* Budget in ₹ Section */}
          <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/70">
            <div className="flex items-center gap-2 mb-3">
              <IndianRupee className="w-4 h-4 text-amber-700" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Budget in Indian Rupees (₹)
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Budget Per Person (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-sm font-semibold text-stone-500">₹</span>
                  <input
                    type="number"
                    step="250"
                    min="1500"
                    max="50000"
                    value={formData.budgetPerPerson}
                    onChange={(e) => handleBudgetPerPersonChange(parseInt(e.target.value) || 2000)}
                    className="w-full pl-7 pr-3 py-2 text-sm font-semibold bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-stone-900"
                  />
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  ~₹{Math.round(formData.budgetPerPerson / formData.durationDays)} per day/person
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Maximum Total Budget ({formData.numTravelers} {formData.numTravelers === 1 ? 'traveler' : 'travelers'})
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-sm font-semibold text-stone-500">₹</span>
                  <input
                    type="number"
                    step="500"
                    min="1500"
                    max="200000"
                    value={formData.totalBudget}
                    onChange={(e) => handleTotalBudgetChange(parseInt(e.target.value) || 4000)}
                    className="w-full pl-7 pr-3 py-2 text-sm font-semibold bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-stone-900"
                  />
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  Includes to-and-fro travel, lodging, food & cushion
                </p>
              </div>
            </div>
          </div>

          {/* Interests Multi-Select */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">
              Main Interests (Pick all that apply)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {INTEREST_OPTIONS.map((item) => {
                const selected = formData.interests.includes(item.id);
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => toggleInterest(item.id)}
                    className={`flex items-center gap-2 p-2.5 text-xs rounded-xl border text-left transition-all ${
                      selected
                        ? 'bg-amber-50 border-amber-500/80 text-amber-950 font-semibold shadow-xs'
                        : 'bg-stone-50/80 border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        selected ? 'bg-amber-600 ring-2 ring-amber-200' : 'bg-stone-300'
                      }`}
                    />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Transport & Stay Preferences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                Preferred Transportation
              </label>
              <div className="relative">
                <Train className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
                <select
                  value={formData.preferredTransportation}
                  onChange={(e) => setFormData({ ...formData, preferredTransportation: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 text-stone-900"
                >
                  <option value="Train (Sleeper/3AC) or State RTC Bus">Train (Sleeper/3AC) or State Bus (Cheapest Practical)</option>
                  <option value="Indian Railways Sleeper Class Only (Ultra-Budget)">Indian Railways Sleeper Class Only (Ultra-Budget)</option>
                  <option value="Indian Railways 3AC (Budget Air-Conditioned)">Indian Railways 3AC (Budget Air-Conditioned)</option>
                  <option value="State RTC Bus (KSRTC/UPSRTC/HRTC/SETC)">State RTC Bus (Reliable & Frequent)</option>
                  <option value="Cheapest Flight / Train Combo">Cheapest Flight / Train Combo</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                Accommodation Preference
              </label>
              <div className="relative">
                <Bed className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
                <select
                  value={formData.accommodationPreference}
                  onChange={(e) => setFormData({ ...formData, accommodationPreference: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 text-stone-900"
                >
                  <option value="Hostel / Backpacker Bunk Bed">Hostel Bunk Bed (Zostel/goSTOPS/Hosteller)</option>
                  <option value="Budget Homestay / Family Guesthouse">Budget Homestay / Family Guesthouse</option>
                  <option value="Budget Hotel (Private Double Room)">Budget Hotel (Private Double Room)</option>
                  <option value="Ashram / Dharamsala (Lowest Cost)">Ashram / Dharamsala (Lowest Cost & Serene)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Travel Style */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
              Travel Style & Safety
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { title: 'Low-Budget & Safe', desc: 'Comfortable balance, verified stays & local transit' },
                { title: 'Backpacker Barebones', desc: 'Overnight trains, hostels, walking & maximum savings' },
                { title: 'Budget Explorer', desc: 'Private budget room, iconic activities & authentic dining' }
              ].map((style) => (
                <button
                  type="button"
                  key={style.title}
                  onClick={() => setFormData({ ...formData, travelStyle: style.title })}
                  className={`p-3 text-left rounded-xl border transition-all ${
                    formData.travelStyle === style.title
                      ? 'border-amber-600 bg-amber-50/70'
                      : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                  }`}
                >
                  <div className="font-semibold text-xs text-stone-900 flex items-center justify-between">
                    <span>{style.title}</span>
                    {formData.travelStyle === style.title && (
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                    )}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5 leading-snug">{style.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2 border-t border-stone-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 disabled:opacity-50 rounded-lg shadow-sm hover:shadow transition-all"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Calculating Real Budget Itinerary...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Complete Plan (₹)</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
