import React from "react";
import { ComplexNavbar } from "../Navbar/Navbar";
import { Logo } from "../../../../../assets/Logo/Logo";

export const TeacherHeader = () => {
  return (
    <div
      className="bg-purple rounded-t-3xl h-20 flex w-full flex-row pt-4 pb-3
      justify-between pl-20 pr-10"
    >
      <div>
        <Logo textcolor="text-black" logocolor="black" logoStyle="pt-1" />{" "}
      </div>
      <div>
        <ComplexNavbar />
      </div>
    </div>
  );
};
