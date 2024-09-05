import React, { useState, ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  content: string | null; 
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex items-center">
      <div
        onMouseEnter={() => content && setShow(true)} 
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
      {show && content && (
        <div className="absolute z-10 w-auto p-1 text-sm text-white bg-gray-500 shadow-lg -mt-16">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
