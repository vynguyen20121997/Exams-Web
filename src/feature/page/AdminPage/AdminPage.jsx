import React from "react";
import { SimpleFooter } from "../../../components/Footer/Footer";
import { Logo } from "../../../components/Logo/Logo";
import { Button } from "@material-tailwind/react";
import { headerBoxContainer } from "../../../components/BoxContainer/BoxContainer";
import AddBarRow from "./components/AddBarRow/AddBarRow";

const AdminPage = () => {
  return (
    <div className="background-website">
      <div class="bg-white w-11/12 mx-auto rounded-3xl px-20 py-5">
        <div class="flex w-full flex-row flex-wrap items-center justify-between gap-y-6 gap-x-12 pt-5 pb-20">
          <div>
            <Logo />
          </div>
          <div>
            <Button variant="gradient">Register</Button>
          </div>
        </div>

        <div>
          <AddBarRow />
        </div>

        <SimpleFooter />
      </div>
    </div>
  );
};

export default AdminPage;
