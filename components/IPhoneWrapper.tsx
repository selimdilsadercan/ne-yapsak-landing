import React, { ReactNode } from "react";

interface NavItem {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
}

interface IPhoneWrapperProps {
  children: ReactNode;
  activeNavItem?: "home" | "discover" | "groups" | "library" | "other";
}

const defaultNavItems = [
  {
    icon: (isActive: boolean) => (
      <svg
        viewBox="0 0 24 24"
        className={`w-6 h-6 ${isActive ? "fill-blue-600" : "fill-gray-400"}`}
      >
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>
    ),
    label: "Ana Sayfa",
  },
  {
    icon: (isActive: boolean) => (
      <svg
        viewBox="0 0 24 24"
        className={`w-6 h-6 ${isActive ? "fill-blue-600" : "fill-gray-400"}`}
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "Keşfet",
  },
  {
    icon: (isActive: boolean) => (
      <svg
        viewBox="0 0 24 24"
        className={`w-6 h-6 ${isActive ? "fill-blue-600" : "fill-gray-400"}`}
      >
        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
      </svg>
    ),
    label: "Gruplar",
  },
  {
    icon: (isActive: boolean) => (
      <svg
        viewBox="0 0 24 24"
        className={`w-6 h-6 ${isActive ? "fill-blue-600" : "fill-gray-400"}`}
      >
        <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
        <path
          fillRule="evenodd"
          d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "Kitaplığın",
  },
];

const IPhoneWrapper: React.FC<IPhoneWrapperProps> = ({
  children,
  activeNavItem = "home",
}) => {
  return (
    <div className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[45px] shadow-xl overflow-hidden border-[8px] border-black">
      {/* Screen Content */}
      <div className="relative w-full h-full bg-white overflow-hidden">
        {/* Status Bar + Dynamic Island */}
        <div className="relative h-[50px] px-5">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[95px] h-[25px] bg-black rounded-b-[18px] z-50">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] bg-[#1a1a1a] rounded-full"></div>
          </div>

          {/* Status Bar Content */}
          <div className="flex justify-between items-center h-full pt-1">
            <div className="text-sm font-medium text-gray-900 pl-2">9:41</div>
            <div className="flex items-center space-x-1.5 pr-2">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 10V8A2 2 0 0018 6H6A2 2 0 004 8v2a2 2 0 002 2h12a2 2 0 002-2m-1 4H5a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2v-2a2 2 0 00-2-2" />
                </svg>
                <span className="ml-[2px] text-xs font-medium text-gray-900">
                  100%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed App Header */}
        <div className="px-4 pb-2 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* Wedo Logo */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <span className="ml-2 text-xl font-semibold text-gray-900">
                  wedo
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notification Bell */}
              <button className="relative p-2">
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
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="h-[calc(100%-130px)] overflow-y-auto pb-16">
          {children}
        </div>

        {/* Bottom Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100">
          <div className="grid h-full grid-cols-4 px-4">
            {defaultNavItems.map((item, index) => {
              const isActive =
                (index === 0 && activeNavItem === "home") ||
                (index === 1 && activeNavItem === "discover") ||
                (index === 2 && activeNavItem === "groups") ||
                (index === 3 && activeNavItem === "library");
              return (
                <button
                  key={index}
                  className="flex flex-col items-center justify-center space-y-1"
                >
                  {item.icon(isActive)}
                  <span
                    className={`text-xs ${
                      isActive ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[120px] h-1 bg-gray-600 rounded-full"></div>
    </div>
  );
};

export default IPhoneWrapper;
