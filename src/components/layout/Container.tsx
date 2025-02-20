import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-white rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default Container;
