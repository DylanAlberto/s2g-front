import React from 'react';

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`flex h-full w-full p-4 overflow-hidden items-center justify-center ${className} `}
    >
      {children}
    </div>
  );
};

export default Container;
