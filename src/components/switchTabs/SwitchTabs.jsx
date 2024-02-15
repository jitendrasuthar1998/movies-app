import React, { useState } from 'react';
import './switchTabs.scss';

const SwitchTabs = ({ data, handleTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const [left, setLeft] = useState(0);

  const handleActiveTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    handleTabChange(tab, index);
  };
  
  return (
    <div className='switchingTabs'>
      <div className='tabItems'>
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab == index ? 'active' : ''}`}
            onClick={() => handleActiveTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className='movingBg' style={{ left }}></span>
      </div>
    </div>
  );
};

export default SwitchTabs;
