import React from "react";

const BalanceFeature = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Top Bar with Search and Notification */}
      <div className="flex justify-between items-center">
        <div className="flex-1 max-w-[200px]">
          <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="ml-2 text-sm text-gray-500">
              Search "Payments"
            </span>
          </div>
        </div>
        <div className="w-6 h-6">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
      </div>

      {/* Currency Selector and Balance */}
      <div className="space-y-4">
        <button className="flex items-center space-x-2 text-sm font-medium">
          <span className="w-5 h-5">🇺🇸</span>
          <span>US Dollar</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div className="space-y-1">
          <h1 className="text-4xl font-bold">$20,000</h1>
          <p className="text-sm text-gray-500">Available Balance</p>
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
          Add Money
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-4">
        <button className="flex flex-col items-center space-y-2">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <span className="text-sm">Send</span>
        </button>
        <button className="flex flex-col items-center space-y-2">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-sm">Request</span>
        </button>
        <button className="flex flex-col items-center space-y-2">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
          </div>
          <span className="text-sm">Bank</span>
        </button>
      </div>
    </div>
  );
};

export default BalanceFeature;
