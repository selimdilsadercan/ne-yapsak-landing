import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-black rounded-lg w-8 h-8 flex items-center justify-center ${className}`}>
      <span className="text-white font-bold text-lg">W</span>
    </div>
  );
};

export default Logo; 