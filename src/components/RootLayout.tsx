import React from "react";
import Header from "./Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
