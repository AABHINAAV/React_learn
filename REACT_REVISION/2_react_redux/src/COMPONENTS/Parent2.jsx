import React from "react";
import { Outlet } from "react-router-dom";

export default function Parent2() {
  return (
    <>
      <div>Parent2</div>
      <Outlet></Outlet>
    </>
  );
}
