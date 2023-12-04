import React from "react";
import { pageContainer } from "../../../components/PageContainer/PageContainer";
import { boxContainer } from "../../../components/BoxContainer/BoxContainer";
import { Logo } from "../../../components/Logo/Logo";
import { SimpleFooter } from "../../../components/Footer/Footer";

const StartingPage = () => {
  return (
    <div class={pageContainer}>
      <div class={boxContainer}>
        <div>
          <Logo />
        </div>
        <div>
          <button>Register</button>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default StartingPage;
