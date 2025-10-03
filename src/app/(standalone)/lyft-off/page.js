'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Check } from 'lucide-react';

export default function ItemClaimApp() {
  const searchParams = useSearchParams();
  const userName = searchParams.get('name') || 'Guest';

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/items');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
    // Poll for updates every 3 seconds
    const interval = setInterval(fetchItems, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleClaim = async (itemId) => {
    try {
      const response = await fetch(`/api/items/${itemId}/claim`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName })
      });

      if (response.ok) {
        fetchItems(); // Refresh the list
      } else {
        const error = await response.json();
        alert(error.error);
      }
    } catch (error) {
      console.error('Failed to toggle claim:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">🚀Lyft-off!</h1>
            <p className="text-gray-600">
              Welcome, <span className="font-semibold text-indigo-600">{userName}</span>!
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Check off items to claim them
            </p>
          </div>

          <div className="space-y-3">
            {items.map(item => {
              const isClaimed = !!item.claimed_by;
              const isClaimedByUser = item.claimed_by === userName;
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
                        claimed by {item.claimed_by}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}