import React from "react";
import Navbar from "./_components/Navbar";

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout = ({ children }: RouteLayoutProps) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="px-16">{children}</div>
    </div>
  );
};

export default RouteLayout;
