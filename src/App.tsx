/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CURATED_TRIPS, DESTINATION_SUGGESTIONS } from './data/curatedTrips';
import { TripPlan, TripFormData } from './types/trip';
import { Navbar } from './components/Navbar';
import { TripHeader } from './components/TripHeader';
import { TransportationCard } from './components/TransportationCard';
import { AccommodationCard } from './components/AccommodationCard';
import { ItineraryCard } from './components/ItineraryCard';
import { FoodPlanCard } from './components/FoodPlanCard';
import { BudgetBreakdownCard } from './components/BudgetBreakdownCard';
import { MoneySavingTipsCard } from './components/MoneySavingTipsCard';
import { SafetyInfoCard } from './components/SafetyInfoCard';
import { AlternativePlansCard } from './components/AlternativePlansCard';
import { TripFormModal } from './components/TripFormModal';
import { DestinationSuggestionsModal } from './components/DestinationSuggestions';
import { Sparkles, Compass, AlertCircle, PhoneCall, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [curatedTrips] = useState<TripPlan[]>(CURATED_TRIPS);
  const [activeTrip, setActiveTrip] = useState<TripPlan>(CURATED_TRIPS[0]);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isExploreModalOpen, setIsExploreModalOpen] = useState(false);
  const [isCheaperMode, setIsCheaperMode] = useState(false);
  const [isBadWeatherMode, setIsBadWeatherMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSelectCuratedTrip = (id: string) => {
    const found = curatedTrips.find((t) => t.id === id);
    if (found) {
      setActiveTrip(found);
      setIsCheaperMode(false);
      setIsBadWeatherMode(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePlanCustomTrip = async (formData: TripFormData) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/plan-trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      if (data.success && data.plan) {
        setActiveTrip(data.plan);
        setIsCustomModalOpen(false);
        setIsCheaperMode(false);
        setIsBadWeatherMode(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Invalid plan response from server');
      }
    } catch (err: any) {
      console.error('Failed to generate trip plan:', err);
      // Even if network fails, match or generate client-side fallback
      const matchingCurated = curatedTrips.find(
        (t) =>
          t.destination.toLowerCase().includes(formData.destination.toLowerCase()) ||
          formData.destination.toLowerCase().includes(t.destination.toLowerCase().split(',')[0].toLowerCase())
      );

      if (matchingCurated) {
        setActiveTrip({
          ...matchingCurated,
          startingLocation: formData.startingLocation || matchingCurated.startingLocation,
          numTravelers: formData.numTravelers,
          budgetPerPerson: formData.budgetPerPerson,
          totalBudget: formData.totalBudget
        });
        setIsCustomModalOpen(false);
      } else {
        setErrorMessage('Unable to connect to planner server. Showing closest curated itinerary.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectDestination = (destName: string) => {
    // Check if destination exists in curated list
    const found = curatedTrips.find((t) =>
      t.destination.toLowerCase().includes(destName.toLowerCase().split(',')[0].toLowerCase())
    );

    if (found) {
      setActiveTrip(found);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Trigger custom generator
      handlePlanCustomTrip({
        startingLocation: activeTrip.startingLocation,
        destination: destName,
        numTravelers: activeTrip.numTravelers,
        durationDays: activeTrip.durationDays,
        travelDates: activeTrip.travelDates,
        totalBudget: activeTrip.budgetPerPerson * activeTrip.numTravelers,
        budgetPerPerson: activeTrip.budgetPerPerson,
        travelStyle: activeTrip.travelStyle,
        interests: activeTrip.interests,
        preferredTransportation: activeTrip.preferredTransportation,
        accommodationPreference: activeTrip.accommodationPreference
      });
    }
  };

  return (
    <div className="min-h-screen bg-stone-100/70 text-stone-900 font-sans flex flex-col">
      {/* Top Navigation */}
      <Navbar
        curatedTrips={curatedTrips}
        selectedTripId={activeTrip.id}
        onSelectTrip={handleSelectCuratedTrip}
        onOpenCustomModal={() => setIsCustomModalOpen(true)}
        onOpenExploreModal={() => setIsExploreModalOpen(true)}
      />

      {/* Error alert if any */}
      {errorMessage && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 w-full">
          <div className="bg-amber-50 border border-amber-200 text-amber-900 px-4 py-3 rounded-xl flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>{errorMessage}</span>
            </div>
            <button
              onClick={() => setErrorMessage(null)}
              className="text-amber-800 font-bold hover:underline"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Header & Feasibility Overview */}
        <TripHeader
          plan={activeTrip}
          isCheaperMode={isCheaperMode}
          onToggleCheaperMode={() => setIsCheaperMode(!isCheaperMode)}
          isBadWeatherMode={isBadWeatherMode}
          onToggleBadWeatherMode={() => setIsBadWeatherMode(!isBadWeatherMode)}
          onOpenCustomModal={() => setIsCustomModalOpen(true)}
        />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {/* 1. Transportation & Intercity Comparison */}
          <TransportationCard
            cheapestRecommendation={activeTrip.transportation.cheapestRecommendation}
            localTransitAdvice={activeTrip.transportation.localTransitAdvice}
            options={activeTrip.transportation.options}
            localTransportOptions={activeTrip.transportation.localTransportOptions}
          />

          {/* 2. Accommodation & Safe Neighborhoods */}
          <AccommodationCard
            recommendedAreas={activeTrip.accommodation.recommendedAreas}
            types={activeTrip.accommodation.types}
            numTravelers={activeTrip.numTravelers}
          />

          {/* 3. Geographically Arranged Day-by-Day Itinerary */}
          <ItineraryCard
            itinerary={activeTrip.itinerary}
            isCheaperMode={isCheaperMode}
          />

          {/* 4. Local Food Plan & Daily Meal Budget */}
          <FoodPlanCard foodPlan={activeTrip.foodPlan} />

          {/* 5. Complete Budget Breakdown Table & Math */}
          <BudgetBreakdownCard
            breakdown={activeTrip.budgetBreakdown}
            numTravelers={activeTrip.numTravelers}
            userBudget={activeTrip.totalBudget}
          />

          {/* 6. Practical Money-Saving Hacks */}
          <MoneySavingTipsCard tips={activeTrip.moneySavingTips} />

          {/* 7. Safety, Practical Checklist & Scams to Avoid */}
          <SafetyInfoCard info={activeTrip.safetyAndPracticalInfo} />

          {/* 8. Alternative Plans & Backup Destinations */}
          <AlternativePlansCard
            alternativePlans={activeTrip.alternativePlans}
            onSelectAlternativeDestination={handleSelectDestination}
            isCheaperMode={isCheaperMode}
            isBadWeatherMode={isBadWeatherMode}
          />
        </div>
      </main>

      {/* Custom Trip Form Modal */}
      <TripFormModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onSubmit={handlePlanCustomTrip}
        isLoading={isLoading}
      />

      {/* Destination Suggestions Modal */}
      <DestinationSuggestionsModal
        isOpen={isExploreModalOpen}
        onClose={() => setIsExploreModalOpen(false)}
        suggestions={DESTINATION_SUGGESTIONS}
        currentBudgetPerPerson={activeTrip.budgetPerPerson}
        onSelectDestination={handleSelectDestination}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 mt-12 py-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div>
              <div className="font-extrabold text-stone-900 text-sm mb-1.5 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-amber-600" />
                <span>YatriBudget</span>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">
                Empowering smart, safe, and culturally rich travel across India on realistic budgets in Indian Rupees (₹).
              </p>
            </div>

            <div>
              <h3 className="font-bold text-stone-800 uppercase tracking-wider text-[11px] mb-2">
                Essential Indian Travel Apps
              </h3>
              <ul className="space-y-1 text-stone-600">
                <li>• <strong>IRCTC Rail Connect:</strong> Official train booking & Tatkal</li>
                <li>• <strong>UTS App:</strong> Paperless unreserved local train tickets</li>
                <li>• <strong>Where Is My Train:</strong> Real-time offline train tracking</li>
                <li>• <strong>State RTC Apps:</strong> KSRTC, UPSRTC, HRTC, MSRTC</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-stone-800 uppercase tracking-wider text-[11px] mb-2">
                Emergency & Safety Helplines
              </h3>
              <ul className="space-y-1 text-stone-600">
                <li>• <strong>112:</strong> National Emergency Number</li>
                <li>• <strong>139:</strong> Indian Railways Passenger Helpline</li>
                <li>• <strong>1091:</strong> Women Helpline</li>
                <li>• <strong>1363:</strong> Tourist Helpline (Multi-language)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-stone-800 uppercase tracking-wider text-[11px] mb-2">
                Budget Philosophy
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Low budget does not mean sacrificing safety. Prioritize Indian Railways sleeper trains, verified backpacker hostels, local public transit, and authentic mess meals.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]">
            <span>© {new Date().getFullYear()} YatriBudget · All prices estimated in Indian Rupees (₹)</span>
            <div className="flex items-center gap-1 text-stone-400">
              <span>Built for smart Indian travelers</span>
              <Heart className="w-3 h-3 text-red-500 fill-current" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
