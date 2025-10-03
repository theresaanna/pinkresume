import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export default function ItemClaimApp() {
  // Get user name from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get('name') || 'Guest';

  // Initial items
  const initialItems = [
    { id: 1, text: '$17 Anker phone charging cord (good quality not kill phone)', claimedBy: null },
    { id: 2, text: '$29 magnetic suction phone mount for anywhere', claimedBy: null },
    { id: 3, text: '$8 laminate sheets for passenger sign', claimedBy: null },
    { id: 4, text: '$39 train to SF to pick up car', claimedBy: null },
    { id: 5, text: '$30 cars to/from the bus in Sac and SF respectively ', claimedBy: null },
    { id: 6, text: '$9 charging cord for passengers (for tip chances)', claimedBy: null },
    { id: 7, text: '$15 big bag of lollipops (for tip chances)', claimedBy: null },
    { id: 8, text: '$14 reusable air freshener that\'s not cloying', claimedBy: null }
  ];

  const [items, setItems] = useState(() => {
    // Load from in-memory storage simulation
    const stored = window.appStorage?.items;
    return stored || initialItems;
  });

  // Save to in-memory storage whenever items change
  useEffect(() => {
    if (!window.appStorage) {
      window.appStorage = {};
    }
    window.appStorage.items = items;
  }, [items]);

  const toggleClaim = (itemId) => {
    setItems(items.map(item => {
      if (item.id === itemId) {
        // If item is unclaimed or claimed by current user, toggle it
        if (!item.claimedBy || item.claimedBy === userName) {
          return {
            ...item,
            claimedBy: item.claimedBy ? null : userName
          };
        }
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Event Tasks</h1>
            <p className="text-gray-600">
              Welcome, <span className="font-semibold text-indigo-600">{userName}</span>!
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Check off items to claim them
            </p>
          </div>

          <div className="space-y-3">
            {items.map(item => {
              const isClaimed = !!item.claimedBy;
              const isClaimedByUser = item.claimedBy === userName;
              const canToggle = !isClaimed || isClaimedByUser;

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-4 rounded-lg border-2 transition-all hover:shadow-md"
                  style={{
                    borderColor: isClaimed ? '#e0e7ff' : '#e5e7eb',
                    backgroundColor: isClaimed ? '#f5f7ff' : 'white'
                  }}
                >
                  <button
                    onClick={() => canToggle && toggleClaim(item.id)}
                    disabled={!canToggle}
                    className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                      canToggle
                        ? 'cursor-pointer hover:border-indigo-500'
                        : 'cursor-not-allowed opacity-50'
                    } ${
                      isClaimed
                        ? 'bg-indigo-500 border-indigo-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {isClaimed && <Check className="w-4 h-4 text-white" />}
                  </button>

                  <div className="flex-1">
                    <span
                      className={`text-lg ${
                        isClaimed
                          ? 'line-through text-gray-500'
                          : 'text-gray-800'
                      }`}
                    >
                      {item.text}
                    </span>
                    {isClaimed && (
                      <span className="ml-3 text-sm font-medium text-indigo-600">
                        claimed by {item.claimedBy}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Tip:</span> Share this link with others by adding ?name=TheirName to the URL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}