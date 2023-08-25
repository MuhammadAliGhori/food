
import React, { useState } from "react";

export default function Layout({ children }) {
  
  return (
    <div>
      {/* <Navbar /> */}
      <main> {children}</main>
      {/* <Footer /> */}
    </div>
  );
}
