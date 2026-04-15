import React, { useState } from 'react';

/**
 * TabGroup component for tab navigation
 * @component
 * @param {Object} props
 * @param {Array} props.tabs - Tab configuration array
 * @param {string} props.tabs[].id - Tab identifier
 * @param {string} props.tabs[].label - Tab label
 * @param {React.ReactNode} props.tabs[].content - Tab content
 * @param {string} [props.defaultTab] - Default active tab ID
 * @param {Function} [props.onChange] - Change handler
 * @param {string} [props.className] - Additional CSS classes
 */
export const TabGroup = ({
  tabs,
  defaultTab,
  onChange,
  className = '',
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs?.[0]?.id);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div className={`w-full ${className}`} {...props}>
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 border-b-2 ${
              activeTab === tab.id
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabGroup;
