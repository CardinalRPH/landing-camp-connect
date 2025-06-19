// src/components/InspirationSection.tsx

import React, { useState, useMemo } from "react";

// 1. Mendefinisikan Tipe Data dengan TypeScript
interface Location {
  city: string;
  region: string; // Bisa berupa negara bagian, provinsi, atau negara
}

interface TabData {
  id: string;
  title: string;
  locations: Location[];
}

// 2. Membuat Data Mockup (Random seperti permintaan)
const inspirationData: TabData[] = [
  {
    id: "arts-culture",
    title: "Destinations for arts & culture",
    locations: [
      { city: "Phoenix", region: "Arizona" },
      { city: "Hot Springs", region: "Arkansas" },
      { city: "Los Angeles", region: "California" },
      { city: "San Diego", region: "California" },
      { city: "San Francisco", region: "California" },
      { city: "Barcelona", region: "Catalonia" },
      { city: "Prague", region: "Czechia" },
      { city: "Washington", region: "District of Columbia" },
      { city: "Keswick", region: "England" },
      { city: "London", region: "England" },
      { city: "Scarborough", region: "England" },
      { city: "Sherwood Forest", region: "England" },
      { city: "York", region: "England" },
      { city: "Paris", region: "France" },
      { city: "Rhodes", region: "Greece" },
      { city: "Nashville", region: "Indiana" },
    ],
  },
  {
    id: "outdoor",
    title: "Destinations for outdoor adventure",
    locations: [
      { city: "Denver", region: "Colorado" },
      { city: "Zion National Park", region: "Utah" },
      { city: "Banff", region: "Alberta" },
      { city: "Moab", region: "Utah" },
      { city: "Yellowstone", region: "Wyoming" },
      { city: "Lake Tahoe", region: "California" },
      { city: "Sedona", region: "Arizona" },
      { city: "Asheville", region: "North Carolina" },
      { city: "Jackson Hole", region: "Wyoming" },
      { city: "Patagonia", region: "Chile" },
      { city: "Interlaken", region: "Switzerland" },
      { city: "Costa Rica", region: "SJ" },
    ],
  },
  {
    id: "mountains",
    title: "Mountain cabins",
    locations: [
      { city: "Aspen", region: "Colorado" },
      { city: "Gatlinburg", region: "Tennessee" },
      { city: "Chamonix", region: "France" },
      { city: "Zermatt", region: "Switzerland" },
      { city: "Breckenridge", region: "Colorado" },
      { city: "Whistler", region: "British Columbia" },
      { city: "Leavenworth", region: "Washington" },
      { city: "Stowe", region: "Vermont" },
    ],
  },
  {
    id: "beaches",
    title: "Beach destinations",
    locations: [
      { city: "Malibu", region: "California" },
      { city: "Cancun", region: "Mexico" },
      { city: "Bora Bora", region: "French Polynesia" },
      { city: "Mykonos", region: "Greece" },
      { city: "The Hamptons", region: "New York" },
      { city: "Tulum", region: "Mexico" },
      { city: "Amalfi Coast", region: "Italy" },
      { city: "Phuket", region: "Thailand" },
      { city: "Nice", region: "France" },
      { city: "Valencia", region: "Spain" },
      { city: "South Haven", region: "Michigan" },
      { city: "Solt", region: "Croatia" },
    ],
  },
  {
    id: "unique",
    title: "Unique Stays",
    locations: [
      { city: "Treehouse", region: "Atlanta" },
      { city: "Yurt", region: "Mongolia" },
      { city: "Cave Hotel", region: "Cappadocia" },
      { city: "Ice Hotel", region: "Sweden" },
      { city: "Houseboat", region: "Amsterdam" },
      { city: "Castle", region: "Ireland" },
      { city: "Airstream", region: "Joshua Tree" },
      { city: "Ryokan", region: "Kyoto" },
    ],
  },
];

const HomeInspSection: React.FC = () => {
  // 3. State untuk melacak tab yang aktif. Defaultnya adalah tab pertama.
  const [activeTabId, setActiveTabId] = useState<string>(inspirationData[0].id);

  // Mengambil data untuk tab yang aktif menggunakan useMemo agar lebih efisien
  const activeTabData = useMemo(
    () => inspirationData.find((tab) => tab.id === activeTabId),
    [activeTabId]
  );

  return (
    <div className="container mx-auto pt-5 px-5 mb-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Inspiration for future getaways
        </h2>

        {/* 4. Navigasi Tab */}
        <nav className="border-b border-gray-200 mb-8">
          <ul
            className="flex flex-wrap -mb-px space-x-6 md:space-x-8"
            role="tablist"
          >
            {inspirationData.map((tab) => (
              <li key={tab.id} role="presentation">
                <button
                  onClick={() => setActiveTabId(tab.id)}
                  className={`inline-block py-4 text-sm md:text-base border-b-2 transition-colors duration-200 ${
                    activeTabId === tab.id
                      ? "text-black font-semibold border-black"
                      : "text-gray-500 hover:text-black border-transparent"
                  }`}
                  role="tab"
                  aria-selected={activeTabId === tab.id}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* 5. Grid Konten yang Dinamis */}
        {activeTabData && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-8">
            {activeTabData.locations.map((location, index) => (
              <div key={index} className="cursor-pointer group">
                <p className="font-semibold text-gray-800 group-hover:underline">
                  {location.city}
                </p>
                <p className="text-gray-500">{location.region}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeInspSection;
