import React, { ReactElement } from 'react';

interface GridContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const GridContainer: React.FC<GridContainerProps> = ({ children, className }) => {
  return (
    <div className={`${className} grid-container`}>
      {children}
    </div>
  );
};

export default GridContainer;